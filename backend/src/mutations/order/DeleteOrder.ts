import builder from '../../../lib/builder'
import prisma from '../../../lib/prisma'
import { GraphQLError } from 'graphql/error'
import NodeInputRef from '../../refs/common/NodeInput'

builder.mutationField('deleteOrder', (t) =>
    t.prismaField({
        args: {
            input: t.arg({ type: NodeInputRef, required: true })
        },
        type: 'Order',
        resolve: async (query, _, { input: { id } }, ctx) => {
            const { user } = await ctx

            if (!user) throw new GraphQLError('Unauthenticated')

            return prisma.order.delete({
                ...query,
                where: {
                    id
                }
            })
        }
    })
)
