import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './slices/cartSlice'
import gamesReducer from './slices/gamesSlice'

const store = configureStore({
    reducer: {
        gamesPage: gamesReducer,
        cart: cartReducer
    },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

export default store
