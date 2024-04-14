import builder from '../../../lib/builder'
import prisma from '../../../lib/prisma'
import { GraphQLError } from 'graphql/error'
import PatchGameInputRef from '../../refs/game/PatchGameInput'
import { UserRole } from '@prisma/client'

builder.mutationField('patchGame', (t) =>
    t.prismaField({
        args: {
            input: t.arg({ type: PatchGameInputRef, required: true })
        },
        type: 'Game',
        resolve: async (
            query,
            _,
            {
                input: {
                    id,
                    rating,
                    like,
                    imageId,
                    ageLimit,
                    price,
                    description,
                    genre,
                    name,
                    amount,
                    ...input
                }
            },
            ctx
        ) => {
            const { user } = await ctx

            if (!user) throw new GraphQLError('Unauthenticated')

            if (
                price ||
                amount ||
                ageLimit ||
                description ||
                genre ||
                name ||
                imageId
            ) {
                if (user.role !== UserRole.Admin)
                    throw new GraphQLError('Unauthorized')
            }

            if (rating) {
                await updateRating({ rating, userId: user.id, id })
            }

            if (typeof like === 'boolean') {
                await updateLike({ like, userId: user.id, id })
            }

            return prisma.game.update({
                ...query,
                where: { id },
                data: {
                    ...input,
                    ...(imageId && {
                        image: {
                            connect: {
                                id: imageId
                            }
                        }
                    }),
                    ageLimit: ageLimit ?? undefined,
                    price: price ?? undefined,
                    description: description ?? undefined,
                    genre: genre ?? undefined,
                    name: name ?? undefined,
                    amount: amount ?? undefined
                }
            })
        }
    })
)

interface UpdateModelParams {
    id: string
    userId: string
}

interface UpdateLikeParams extends UpdateModelParams {
    like: boolean
}

const updateLike = async ({ like, userId, id }: UpdateLikeParams) => {
    if (!like) {
        await prisma.like.delete({
            where: { userId_gameId: { userId, gameId: id } }
        })

        return
    }

    try {
        await prisma.like.create({
            data: {
                user: {
                    connect: {
                        id: userId
                    }
                },
                game: {
                    connect: {
                        id
                    }
                }
            }
        })
    } catch (e) {
        throw new GraphQLError('Already liked')
    }
}

interface UpdateRatingParams extends UpdateModelParams {
    rating: number
}

const updateRating = async ({ userId, id, rating }: UpdateRatingParams) => {
    await prisma.rating.upsert({
        create: {
            user: {
                connect: {
                    id: userId
                }
            },
            game: {
                connect: {
                    id
                }
            },
            score: rating
        },
        update: {
            score: rating
        },
        where: {
            userId_gameId: {
                userId,
                gameId: id
            }
        }
    })
}
