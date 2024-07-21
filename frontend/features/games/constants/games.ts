import { GameGenre, GamePlatform } from '../../../graphql-generated/types'

export const GAME_GENRE_OPTIONS =Object.entries(GameGenre).map(([key, value]) => ({
    value,
    label: key,
}))

export const GAME_PLATFORM_OPTIONS= Object.entries(GamePlatform).map(([key, value]) => ({
    value,
    label: key,
}))