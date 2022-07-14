import { AgesLimit, GamesPlatforms, GamesSortCriteria, SortTypes } from '../../../types/gameCardTypes'

export const ageLimitOptions = [
    {
        value: AgesLimit.All,
        label: 'All ages'
    },
    {
        value: AgesLimit.Three,
        label: `Above ${AgesLimit.Three}`
    },
    {
        value: AgesLimit.Six,
        label: `Above ${AgesLimit.Six}`
    },
    {
        value: AgesLimit.Twelve,
        label: `Above ${AgesLimit.Twelve}`
    },
    {
        value: AgesLimit.Sixteen,
        label: `Above ${AgesLimit.Sixteen}`
    },
    {
        value: AgesLimit.Eighteen,
        label: `Above ${AgesLimit.Eighteen}`
    },

]

export const gamePlatformsOptions = [
    {
        value: GamesPlatforms.All,
        label: 'All platforms'
    },
    {
        value: GamesPlatforms.Pc,
        label: 'Pc'
    },
    {
        value: GamesPlatforms.Xbox,
        label: 'Xbox'
    },
    {
        value: GamesPlatforms.Playstation,
        label: 'Playstation'
    },
]

export const sortCriteriaOptions = [
    {
        value: undefined,
        label: 'Select sort criteria',
    },
    {
        value: GamesSortCriteria.Name,
        label: 'Name'
    },
    {
        value: GamesSortCriteria.Rating,
        label: 'Rating'
    },
    {
        value: GamesSortCriteria.Price,
        label: 'Price'
    },
]

export const sortTypesOptions = [
    {
        value: SortTypes.Ascending,
        label: 'Ascending'
    },
    {
        value: SortTypes.Descending,
        label: 'Descending'
    },
]