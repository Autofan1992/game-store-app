import builder from '../../../lib/builder'

const GameInputRef = builder.inputType('GameInput', {
    fields: (t) => ({
        id: t.string({ required: true }),
    }),
})

export default GameInputRef