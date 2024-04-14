import builder from '../../../lib/builder'

const ConnectionPagination = builder.inputType('ConnectionInputPagination', {
    fields: (t) => ({
        skip: t.int(),
        take: t.int()
    })
})

export default ConnectionPagination
