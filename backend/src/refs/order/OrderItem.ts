import builder from '../../../lib/builder'

const OrderItemRef = builder.prismaObject('OrderItem', {
    fields: (t) => ({
        id: t.exposeID('id'),
        order: t.relation('order'),
        game: t.relation('game'),
        amount: t.exposeInt('amount'),
    })
})

export default OrderItemRef