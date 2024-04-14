import builder from '../../../lib/builder'

const CreateCommentInputRef = builder.inputType('CreateCommentInput', {
    fields: (t) => ({
        text: t.string({ required: true }),
        gameId: t.string({ required: true })
    })
})

export default CreateCommentInputRef
