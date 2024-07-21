import builder from '../../../lib/builder'
import prisma from '../../../lib/prisma'
import CreateCartItemInputRef from '../../refs/cart/CreateCartItemInput'
import { GraphQLError } from 'graphql/error'

builder.mutationField('createCartItem', (t) =>
    t.prismaField({
        args: {
            input: t.arg({ type: CreateCartItemInputRef, required: true })
        },
        type: 'CartItem',
        resolve: async (query, _, { input: { gameId, ...input } }, ctx) => {
            const { user } = await ctx

            if (!user) throw new GraphQLError('Unauthenticated')

            const { id: cartId } = await prisma.cart.upsert({
                create: {
                    userId: user.id
                },
                update: {
                    userId: user.id
                },
                where: {
                    userId: user.id
                }
            })

            return prisma.cartItem.create({
                ...query,
                data: {
                    ...input,
                    cartId,
                    gameId
                }
            })
        }
    })
)
