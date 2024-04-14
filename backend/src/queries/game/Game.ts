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
            const res = await fetch(
                'https://dev-1wgvqrm7be0kltrp.us.auth0.com/authorize?response_type=code&client_id=yPAJtA4wrxzcYg7bIhxj2n1Qo8GQ2g5A&scope=openid'
            )

            console.log(res)
            return prisma.game.findUnique({
                ...query,
                where: {
                    id
                }
            })
        }
    })
)
