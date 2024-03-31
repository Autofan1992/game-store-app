import { EGameGenre, EGamePlatform } from '../models/games.enums'

export const GAME_GENRE_OPTIONS = Object.entries(EGameGenre).map(([key, value]) => ({
    value,
    label: key
}))

export const GAME_PLATFORM_OPTIONS = Object.entries(EGamePlatform).map(([key, value]) => ({
    value,
    label: key
}))