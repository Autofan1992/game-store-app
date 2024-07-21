import builder from '../../../lib/builder'

const CreateCartItemInputRef = builder.inputType('CreateCartItemInput', {
    fields: (t) => ({
        gameId: t.string({ required: true })
    })
})

export default CreateCartItemInputRef
