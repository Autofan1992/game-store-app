import builder from '../../../lib/builder'
import { GamePlatform, UserRole } from '@prisma/client'
import GameAggregateRef from './GameAggregate'
import prisma from '../../../lib/prisma'

const GameRef = builder.prismaObject('Game', {
    fields: (t) => ({
        id: t.exposeID('id'),
        createdAt: t.expose('createdAt', {
            type: 'Date'
        }),
        updatedAt: t.expose('updatedAt', {
            type: 'Date'
        }),
        ageLimit: t.exposeInt('ageLimit'),
        price: t.exposeFloat('price'),
        platform: t.expose('platform', {
            type: [GamePlatformRef]
        }),
        description: t.exposeString('description'),
        genre: t.exposeString('genre'),
        name: t.exposeString('name'),
        amount: t.exposeInt('amount'),
        comments: t.relation('comments'),
        views: t.exposeInt('views'),
        image: t.relation('image'),
        user: t.relation('user'),
        isLiked: t.boolean({
            resolve: async ({ id }, _, ctx) => {
                const user = (await ctx).user

                if (!user) return false

                const like = await prisma.like.findFirst({
                    where: {
                        userId: user.id,
                        gameId: id
                    }
                })

                return !!like
            }
        }),
        isEditable: t.boolean({
            resolve: async ({ userId }, _, ctx) => {
                const user = (await ctx).user

                return user ? userId === user.id || user.role === UserRole.Admin : false
            }
        }),
        aggregate: t.field({
            type: GameAggregateRef,
            resolve: async ({ id }) => {
                const {
                    _avg: { score: rating }
                } = await prisma.rating.aggregate({
                    _avg: {
                        score: true
                    },
                    where: {
                        gameId: id
                    }
                })

                const likes = await prisma.like.count({
                    where: {
                        gameId: id
                    }
                })

                return {
                    likes,
                    rating
                }
            }
        })
    })
})

export default GameRef

export const GamePlatformRef = builder.enumType('GamePlatform', {
    values: Object.values(GamePlatform)
})
