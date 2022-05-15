import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import gamesState from '../mock-data/games-state'
import { AgesLimit, GamesGenres, GamesPlatforms, GamesSortCriteria, SortTypes } from '../../types/game-card-types'

const initialState = {
    games: gamesState,
    filters: {
        genres: [] as Array<GamesGenres>,
        ageLimit: AgesLimit.All as AgesLimit,
        sortType: SortTypes.Descending as SortTypes,
        sortCriteria: GamesSortCriteria.Name as GamesSortCriteria,
        gamePlatforms: GamesPlatforms.All as GamesPlatforms
    },
}

const gamesSlice = createSlice({
    name: 'init',
    initialState,
    reducers: {
        setGenres: (state, { payload }: PayloadAction<Array<GamesGenres>>) => {
            state.filters.genres = payload
        },
        setAgeLimit: (state, { payload }: PayloadAction<AgesLimit>) => {
            state.filters.ageLimit = payload
        },
        setSortType: (state, { payload }: PayloadAction<SortTypes>) => {
            state.filters.sortType = payload
        },
        setSortCriteria: (state, { payload }: PayloadAction<GamesSortCriteria>) => {
            state.filters.sortCriteria = payload
        },
        setGamePlatforms: (state, { payload }: PayloadAction<GamesPlatforms>) => {
            state.filters.gamePlatforms = payload
        },
        resetFilters: (state) => {
            state.filters = initialState.filters
        }
    },
})

export const { setGenres, setSortType, setSortCriteria, setGamePlatforms, resetFilters, setAgeLimit } = gamesSlice.actions
export default gamesSlice.reducer