import builder from '../../../lib/builder'
import prisma from '../../../lib/prisma'
import { GraphQLError } from 'graphql/error'
import PatchCommentInputRef from '../../refs/comment/PatchCommentInput'
import { UserRole } from '@prisma/client'

builder.mutationField('patchComment', (t) =>
    t.prismaField({
        args: {
            input: t.arg({ type: PatchCommentInputRef, required: true })
        },
        type: 'Comment',
        resolve: async (query, _, { input: { id, text } }, ctx) => {
            const { user } = await ctx
            const { user: { id: authorId } } = await prisma.comment.findUniqueOrThrow({
                where: {
                    id
                },
                include: {
                    user: true
                }
            })

            if (!user) throw new GraphQLError('Unauthenticated')

            const isUserAuthorizedToPatch = user.id === authorId || user.role === UserRole.Admin
            if (!isUserAuthorizedToPatch) throw new GraphQLError('Unauthorized')

            return prisma.comment.update({
                ...query,
                where: {
                    id
                },
                data: {
                    text: text ?? undefined
                }
            })
        }
    })
)
