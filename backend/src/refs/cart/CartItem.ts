import builder from '../../../lib/builder'

const CartItemRef = builder.prismaObject('CartItem', {
    fields: (t) => ({
        id: t.exposeID('id'),
        cart: t.relation('cart'),
        game: t.relation('game'),
        amount: t.exposeInt('amount'),
    })
})

export default CartItemRef
