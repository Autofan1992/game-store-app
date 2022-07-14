import { GameCardType } from '../../types/gameCardTypes'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItemType } from '../../types/cartTypes'

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
        increaseCartItemQuantity(state, { payload }: PayloadAction<GameCardType | number>) {
            const item = state.items.find(item => item.id === payload)

            if (item) {
                item.quantity += 1
            } else {
                state.items.push({ ...(payload as GameCardType), quantity: 1 })
            }
        },
        decreaseCartItemQuantity(state, { payload }: PayloadAction<number>) {
            const item = state.items.find(item => item.id === payload)

            if (item && item.quantity > 1) {
                item.quantity -= 1
            } else {
                state.items = state.items.filter(item => item.id !== payload)
            }
        },
        removeCartItem(state, { payload }: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== payload)
        },
    }
})

export const { increaseCartItemQuantity, decreaseCartItemQuantity, removeCartItem, setShowCanvas } = cartSlice.actions

export default cartSlice.reducer
