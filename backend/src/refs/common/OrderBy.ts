import builder from '../../../lib/builder'

export enum OrderBy {
    Asc = 'asc',
    Desc = 'desc'
}

const OrderByRef = builder.enumType('OrderBy', {
    values: Object.values(OrderBy)
})

export default OrderByRef
