import builder from '../../../lib/builder'
import prisma from '../../../lib/prisma'
import { GraphQLError } from 'graphql/error'
import PatchOrderInputRef from '../../refs/order/PatchOrderInput'

builder.mutationField('patchOrder', (t) =>
    t.prismaField({
        args: {
            input: t.arg({ type: PatchOrderInputRef, required: true })
        },
        type: 'Order',
        resolve: async (
            query,
            _,
            { input: { id, paymentStatus, status } },
            ctx
        ) => {
            const { user } = await ctx

            if (!user) throw new GraphQLError('Unauthenticated')

            return prisma.order.update({
                ...query,
                data: {
                    paymentStatus: paymentStatus ?? undefined,
                    status: status ?? undefined
                },
                where: {
                    id
                }
            })
        }
    })
)
