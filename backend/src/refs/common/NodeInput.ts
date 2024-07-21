import builder from '../../../lib/builder'

const NodeInputRef = builder.inputType('NodeInput', {
    fields: (t) => ({
        id: t.string({ required: true })
    })
})

export default NodeInputRef
