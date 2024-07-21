import builder from '../../../lib/builder'
import prisma from '../../../lib/prisma'
import { GraphQLError } from 'graphql/error'
import PatchCartItemInputRef from '../../refs/cart/PatchCartItemInput'

builder.mutationField('patchCartItem', (t) =>
    t.prismaField({
        args: {
            input: t.arg({ type: PatchCartItemInputRef, required: true })
        },
        type: 'CartItem',
        resolve: async (query, _, { input: { itemId, amount } }, ctx) => {
            const { user } = await ctx

            if (!user) throw new GraphQLError('Unauthenticated')

            return prisma.cartItem.update({
                ...query,
                data: {
                    amount: amount ?? undefined
                },
                where: {
                    id: itemId
                }
            })
        }
    })
)
