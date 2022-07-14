import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './slices/gamesSlice'
import cartReducer from './slices/cartSlice'

const store = configureStore({
    reducer: {
        gamesPage: gamesReducer,
        cart: cartReducer
    },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

export default store
