import { RootStateType } from '../store'
import { createSelector } from '@reduxjs/toolkit'

export const selectCartItems = (state: RootStateType) => state.cart.items
export const selectCartItemsCount = (state: RootStateType) => state.cart.items.length
export const selectShowCartOffCanvas = (state: RootStateType) => state.cart.showOffCanvas

export const selectCartItemQuantity = createSelector(
    [selectCartItems, (state: RootStateType, id: number) => id],
    (items, id) => {
        const item = items.find(item => item.id === id)
        return item?.quantity || 0
    }
)

export const selectCartItemTotalPrice = createSelector(
    [selectCartItems, (state: RootStateType, id: number) => id],
    (items, id) => {
        const item = items.find(item => item.id === id)
        return item ? (item?.quantity * item?.price) : 0
    }
)

export const selectCartItemsTotalPrice = createSelector(
    selectCartItems,
    (items) => items.reduce((total, item) => total + item.quantity * item.price, 0)
)