import builder from '../../../lib/builder'
import prisma from '../../../lib/prisma'
import GameInputRef from '../../refs/game/GameInput'

builder.queryField('game', (t) =>
    t.prismaField({
        args: {
            input: t.arg({ type: GameInputRef, required: true })
        },
        type: 'Game',
        nullable: true,
        resolve: async (query, _, { input: { id } }) => {
            return prisma.game.findUnique({
                ...query,
                where: {
                    id
                }
            })
        }
    })
)