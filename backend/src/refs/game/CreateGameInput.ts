import builder from '../../../lib/builder'
import { GameGenreRef, GamePlatformRef } from './Game'

const CreateGameInputRef = builder.inputType('CreateGameInput', {
    fields: (t) => ({
        ageLimit: t.int({ required: true }),
        price: t.float({ required: true }),
        platforms: t.field({ type: [GamePlatformRef], required: true }),
        description: t.string({ required: true }),
        genre: t.field({ type: GameGenreRef, required: true }),
        name: t.string({ required: true }),
        amount: t.int({ required: true }),
        imageId: t.string({ required: true })
    })
})

export default CreateGameInputRef
