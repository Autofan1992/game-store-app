import { GamePlatform, GameSortCriteria, OrderBy } from '../../../../graphql-generated/types'
import {
    AgesLimit,

} from '../../../../types/gameCardTypes'

export const ageLimitOptions = [
    {
        value: AgesLimit.All,
        label: 'All ages',
    },
    {
        value: AgesLimit.Three,
        label: `Above ${AgesLimit.Three}`,
    },
    {
        value: AgesLimit.Six,
        label: `Above ${AgesLimit.Six}`,
    },
    {
        value: AgesLimit.Twelve,
        label: `Above ${AgesLimit.Twelve}`,
    },
    {
        value: AgesLimit.Sixteen,
        label: `Above ${AgesLimit.Sixteen}`,
    },
    {
        value: AgesLimit.Eighteen,
        label: `Above ${AgesLimit.Eighteen}`,
    },
]

export const gamePlatformsOptions = [
    {
        value: undefined,
        label: 'All platforms',
    },
    {
        value: GamePlatform.Pc,
        label: 'Pc',
    },
    {
        value: GamePlatform.Xbox,
        label: 'Xbox',
    },
    {
        value: GamePlatform.Playstation,
        label: 'Playstation',
    },
]

export const sortCriteriaOptions = [
    {
        value: undefined,
        label: 'Select sort criteria',
    },
    {
        value: GameSortCriteria.Name,
        label: 'Name',
    },
    {
        value: GameSortCriteria.Rating,
        label: 'Rating',
    },
    {
        value: GameSortCriteria.Price,
        label: 'Price',
    },
]

export const sortTypesOptions = [
    {
        value: OrderBy.Asc,
        label: 'Ascending',
    },
    {
        value: OrderBy.Desc,
        label: 'Descending',
    },
]
