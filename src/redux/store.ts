import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './slices/games-slice'

const store = configureStore({
    reducer: {
        gamesPage: gamesReducer
    },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

export default store
