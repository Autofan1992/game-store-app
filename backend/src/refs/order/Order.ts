import builder from '../../../lib/builder'
import { OrderStatus } from '../../generated/prisma-client'

const OrderRef = builder.prismaObject('Order', {
    fields: (t) => ({
        id: t.exposeID('id'),
        createdAt: t.expose('createdAt', {
            type: 'Date',
        }),
        updatedAt: t.expose('updatedAt', {
            type: 'Date',
        }),
        user: t.relation('user'),
        items: t.relation('items'),
    })
})

export default OrderRef

export const OrderStatusRef = builder.enumType('OrderStatus', {
    values: Object.values(OrderStatus)
})

