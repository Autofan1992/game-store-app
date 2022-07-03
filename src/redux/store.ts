import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './slices/games-slice'
import cartReducer from './slices/cart-slice'

const store = configureStore({
    reducer: {
        gamesPage: gamesReducer,
        cart: cartReducer
    },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

export default store
