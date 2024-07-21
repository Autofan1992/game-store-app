import builder from '../../../lib/builder'

const PatchCartItemInputRef = builder.inputType('PatchCartItemInput', {
    fields: (t) => ({
        itemId: t.string({ required: true }),
        amount: t.int()
    })
})

export default PatchCartItemInputRef
