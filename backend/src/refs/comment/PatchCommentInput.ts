import builder from '../../../lib/builder'

const PatchCommentInputRef = builder.inputType('PatchCommentInput', {
    fields: (t) => ({
        text: t.string(),
        id: t.string({ required: true })
    })
})

export default PatchCommentInputRef
