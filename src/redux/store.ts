import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './reducers/games-reducer'

const store = configureStore({
    reducer: {
        gamesPage: gamesReducer
    },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

export default store
