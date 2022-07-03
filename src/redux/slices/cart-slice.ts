import { GameCardType } from '../../types/game-card-types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItemType } from '../../types/cart-types'

const initialState = {
    showOffCanvas: false,
    items: [] as CartItemType[]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setShowCanvas(state, { payload }: PayloadAction<boolean>) {
            state.showOffCanvas = payload
        },
        increaseCartItemQuantity(state, { payload }: PayloadAction<GameCardType>) {
            const item = state.items.find(item => item.id === payload.id)

            if (item) {
                item.quantity += 1
            } else {
                state.items.push({ ...payload, quantity: 1 })
            }
        },
        decreaseCartItemQuantity(state, { payload }: PayloadAction<GameCardType>) {
            const item = state.items.find(item => item.id === payload.id)

            if (item && item.quantity > 1) {
                item.quantity -= 1
            } else {
                state.items = state.items.filter(item => item.id !== payload.id)
            }
        },
        removeCartItem(state, { payload }: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== payload)
        },
    }
})

export const { increaseCartItemQuantity, decreaseCartItemQuantity, removeCartItem, setShowCanvas } = cartSlice.actions

export default cartSlice.reducer
