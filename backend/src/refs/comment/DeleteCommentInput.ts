import builder from '../../../lib/builder'

const DeleteCommentInputRef = builder.inputType('DeleteCommentInput', {
    fields: (t) => ({
        id: t.string({ required: true })
    })
})

export default DeleteCommentInputRef
