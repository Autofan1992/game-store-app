import builder from '../../../lib/builder'

const NodeListInputRef = builder.inputType('NodeListInput', {
    fields: (t) => ({
        connect: t.idList(),
        disconnect: t.idList(),
        update: t.idList(),
    })
})

export default NodeListInputRef
