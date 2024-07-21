import builder from '../../../lib/builder'
import prisma from '../../../lib/prisma'
import { GraphQLError } from 'graphql/error'

builder.queryField('cart', (t) =>
    t.prismaField({
        type: 'Cart',
        nullable: true,
        resolve: async (query, __, ___, context) => {
            const { user: authUser } = await context

            if (!authUser) {
                throw new GraphQLError(
                    'You have to be logged in to get your cart',
                    {
                        extensions: {
                            response: {
                                status: 401
                            }
                        }
                    }
                )
            }

            return prisma.cart.findUnique({
                ...query,
                where: {
                    userId: authUser.id
                }
            })
        }
    })
)
