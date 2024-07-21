import builder from '../../../lib/builder'
import prisma from '../../../lib/prisma'
import { GraphQLError } from 'graphql/error'

builder.mutationField('createOrder', (t) =>
    t.prismaField({
        type: 'Order',
        resolve: async (query, _, __, ctx) => {
            const { user } = await ctx

            if (!user) throw new GraphQLError('Unauthenticated')

            const { items: cartItems, id: cartId } =
                await prisma.cart.findUniqueOrThrow({
                    where: {
                        userId: user.id
                    },
                    include: {
                        items: true
                    }
                })

            const order = await prisma.order.create({
                ...query,
                data: {
                    userId: user.id
                }
            })

            await prisma.$transaction(
                cartItems.map(({ gameId, amount }) =>
                    prisma.orderItem.create({
                        data: {
                            gameId,
                            amount,
                            orderId: order.id
                        }
                    })
                )
            )

            await prisma.cartItem.deleteMany({
                where: {
                    cartId
                }
            })

            return order
        }
    })
)
