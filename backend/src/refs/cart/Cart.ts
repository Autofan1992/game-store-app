import builder from '../../../lib/builder'

const CartRef = builder.prismaObject('Cart', {
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

export default CartRef
