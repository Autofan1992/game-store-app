import builder from '../../../lib/builder'
import prisma from '../../../lib/prisma'
import { GraphQLError } from 'graphql/error'
import NodeInputRef from '../../refs/common/NodeInput'

builder.mutationField('deleteCartItem', (t) =>
    t.prismaField({
        args: {
            input: t.arg({ type: NodeInputRef, required: true })
        },
        type: 'CartItem',
        resolve: async (query, _, { input: { id } }, ctx) => {
            const { user } = await ctx

            if (!user) throw new GraphQLError('Unauthenticated')

            return prisma.cartItem.delete({
                ...query,
                where: {
                    id
                }
            })
        }
    })
)
