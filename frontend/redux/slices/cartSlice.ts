import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartItemType } from '../../features/cart/types/cartTypes'
import { GameFragment } from '../../features/games/graphql/queries/GamesForHomePage.generated'
import { RootStateType } from '../store'

const initialState = {
    isFetching: false,
    showOffCanvas: false,
    items: [] as CartItemType[],
}

export const onCheckout = createAsyncThunk<void, undefined, { state: RootStateType }>(
    'checkoutHandle',
    async (_, { getState }) => {
        const {
            cart: { items },
        } = getState()
        items

        // try {
        //     // TODO: implement stripe
        //     const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_API_KEY as string)
        //     items
        //     stripePromise
        // } catch (e) {
        //     console.warn(e)
        // }
    },
)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setShowCanvas(state, { payload }: PayloadAction<boolean>) {
            state.showOffCanvas = payload
        },
        increaseCartItemQuantity(state, { payload }: PayloadAction<GameFragment>) {
            const item = state.items.find((item) => item.id === payload.id)

            if (item) {
                item.quantity += 1
            } else {
                state.items.push({ ...(payload), quantity: 1 })
            }
        },
        decreaseCartItemQuantity(state, { payload }: PayloadAction<string>) {
            const item = state.items.find((item) => item.id === payload)

            if (item && item.quantity > 1) {
                item.quantity -= 1
            } else {
                state.items = state.items.filter((item) => item.id !== payload)
            }
        },
        removeCartItem(state, { payload }: PayloadAction<string>) {
            state.items = state.items.filter((item) => item.id !== payload)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(onCheckout.pending, (state) => {
                state.isFetching = true
            })
            .addCase(onCheckout.fulfilled, (state) => {
                state.isFetching = false
            })
            .addCase(onCheckout.rejected, (state) => {
                state.isFetching = false
            })
    },
})

export const { increaseCartItemQuantity, decreaseCartItemQuantity, removeCartItem, setShowCanvas } =
    cartSlice.actions

export default cartSlice.reducer
