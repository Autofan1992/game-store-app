import builder from '../../../lib/builder'
import GameAggregate from '../../types/gameAggragate'

const GameAggregateRef = builder.objectType(GameAggregate, {
    name: 'GameAggregate',
    fields: (t) => ({
        rating: t.exposeFloat('rating', { nullable: true }),
        likes: t.exposeInt('likes')
    })
})

export default GameAggregateRef
