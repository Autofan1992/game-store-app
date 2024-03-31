import GameConnectionResponseRef from '../../refs/game/GameConnectionResponse'
import builder from '../../../lib/builder'
import { getConnectionPagination } from '../../utils/connection.utils'
import prisma from '../../../lib/prisma'
import GameConnectionInputRef from '../../refs/game/GameConnectionInput'
import { GamePlatform } from '@prisma/client'

builder.queryField('gameConnection', t =>
    t.field({
        type: GameConnectionResponseRef,
        args: {
            input: t.arg({ type: GameConnectionInputRef }),
        },
        resolve: async (query, { input }) => {
            const { where, pagination } = input || {}
            const { skip, take } = getConnectionPagination(pagination)
            const totalCount = await prisma.game.count()

            const nodes = await prisma.game.findMany({
                ...query,
                orderBy: {
                    [where?.sortCriteria || 'createdAt']: where?.orderBy,
                },
                where: {
                    AND: [
                        {
                            ageLimit: {
                                gte: where?.ageLimit ?? undefined
                            }
                        },
                        {
                            genre: {
                                in: where?.genres ?? undefined,
                                mode: 'insensitive'
                            }
                        },
                        {
                            platform: {
                                hasSome: where?.platforms ?? Object.values(GamePlatform)
                            }
                        }
                    ]
                },
                skip,
                take,
            })
            const hasMore = totalCount > skip + take

            return {
                nodes,
                totalCount,
                hasMore,
            }
        },
    })
)