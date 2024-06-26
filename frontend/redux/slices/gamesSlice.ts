import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {
    AgesLimit,
    GamesGenres,
    GamesPlatforms,
    GamesSortCriteria,
    SortTypes,
} from '../../types/gameCardTypes'
import gamesData from '../mock-data/gamesData'

const initialState = {
    games: gamesData,
    visibleGamesCount: 9,
    searchName: undefined as string | undefined,
    filters: {
        genres: [] as GamesGenres[],
        ageLimit: AgesLimit.All,
        sortType: SortTypes.Ascending,
        sortCriteria: undefined as GamesSortCriteria | undefined,
        gamePlatforms: GamesPlatforms.All,
    },
}

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setGenres: (state, { payload }: PayloadAction<GamesGenres[]>) => {
            state.filters.genres = payload
        },
        incVisibleGamesCount: (state, { payload }: PayloadAction<number>) => {
            state.visibleGamesCount = state.visibleGamesCount + payload
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
        setGamesSearchName: (state, { payload }: PayloadAction<string>) => {
            state.searchName = payload
        },
        resetFilters: (state) => {
            state.filters = initialState.filters
        },
    },
})

export const {
    setGenres,
    setSortType,
    setSortCriteria,
    setGamePlatforms,
    resetFilters,
    setAgeLimit,
    setGamesSearchName,
    incVisibleGamesCount,
} = gamesSlice.actions

export default gamesSlice.reducer
