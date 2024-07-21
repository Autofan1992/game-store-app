import builder from '../../../lib/builder'
import prisma from '../../../lib/prisma'
import { UserRole } from '../../generated/prisma-client'
import NodeInputRef from '../../refs/common/NodeInput'
import { GraphQLError } from 'graphql/error'

builder.mutationField('deleteGame', (t) =>
    t.prismaField({
        args: {
            input: t.arg({ type: NodeInputRef, required: true })
        },
        type: 'Game',
        resolve: async (query, _, { input: { id } }, ctx) => {
            const { user } = await ctx

            if (!user) throw new GraphQLError('Unauthenticated')
            if (user.role !== UserRole.Admin)
                throw new GraphQLError('Unauthorized')

            return prisma.game.delete({
                ...query,
                where: {
                    id
                }
            })
        }
    })
)
