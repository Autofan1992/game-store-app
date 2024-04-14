import builder from '../../../lib/builder'

const PatchGameInputRef = builder.inputType('PatchGameInput', {
    fields: (t) => ({
        id: t.string({ required: true }),
        rating: t.float(),
        price: t.float(),
        ageLimit: t.int(),
        description: t.string(),
        name: t.string(),
        genre: t.string(),
        imageId: t.string(),
        amount: t.int(),
        like: t.boolean()
    })
})

export default PatchGameInputRef
