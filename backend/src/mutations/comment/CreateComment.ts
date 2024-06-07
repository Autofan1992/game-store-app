import builder from '../../../lib/builder'
import prisma from '../../../lib/prisma'
import { GraphQLError } from 'graphql/error'
import CreateCommentInputRef from '../../refs/comment/CreateCommentInput'

builder.mutationField('createComment', (t) =>
    t.prismaField({
        args: {
            input: t.arg({ type: CreateCommentInputRef, required: true })
        },
        type: 'Comment',
        resolve: async (query, _, { input: { gameId, text } }, ctx) => {
            const { user, pubsub } = await ctx

            if (!user) throw new GraphQLError('Unauthenticated')

            const comment = await prisma.comment.create({
                ...query,
                data: {
                    user: {
                        connect: {
                            id: user.id
                        }
                    },
                    game: {
                        connect: {
                            id: gameId
                        }
                    },
                    text
                }
            })

            pubsub.publish('comments', {
                comment,
            })

            return comment
        }
    })
)
