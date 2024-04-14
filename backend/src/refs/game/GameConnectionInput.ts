import ConnectionPaginationRef from '../common/ConnectionPagination'
import OrderByRef, { OrderBy } from '../common/OrderBy'
import builder from '../../../lib/builder'
import { GamePlatformRef } from './Game'

const GameConnectionInputRef = builder.inputType('GameConnectionInput', {
    fields: (t) => ({
        pagination: t.field({ type: ConnectionPaginationRef }),
        where: t.field({ type: GameConnectionInputWhereRef })
    })
})

const GameConnectionInputWhereRef = builder.inputType(
    'GameConnectionInputWhere',
    {
        fields: (t) => ({
            genres: t.stringList(),
            ageLimit: t.int(),
            orderBy: t.field({ type: OrderByRef, defaultValue: OrderBy.Asc }),
            sortCriteria: t.field({ type: GameSortCriteriaRef }),
            platforms: t.field({ type: [GamePlatformRef] }),
            name: t.string()
        })
    }
)

enum GameSortCriteria {
    Name = 'name',
    Rating = 'rating',
    Price = 'price'
}

const GameSortCriteriaRef = builder.enumType('GameSortCriteria', {
    values: Object.values(GameSortCriteria)
})

export default GameConnectionInputRef
