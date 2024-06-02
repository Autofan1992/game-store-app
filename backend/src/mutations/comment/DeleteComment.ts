import builder from '../../../lib/builder'
import prisma from '../../../lib/prisma'
import { GraphQLError } from 'graphql/error'
import DeleteCommentInputRef from '../../refs/comment/DeleteCommentInput'
import { UserRole } from '@prisma/client'

builder.mutationField('deleteComment', (t) =>
    t.prismaField({
        args: {
            input: t.arg({ type: DeleteCommentInputRef, required: true })
        },
        type: 'Comment',
        resolve: async (query, _, { input: { id } }, ctx) => {
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
            
            const isUserAuthorizedToDelete = user.id === authorId || user.role === UserRole.Admin
            if (!isUserAuthorizedToDelete) throw new GraphQLError('Unauthorized')

            return prisma.comment.delete({
                ...query,
                where: {
                    id
                }
            })
        }
    })
)
