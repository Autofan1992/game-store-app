import { CartItemType } from '../types/cartTypes'
import { paymentAPIInstance } from './api'

export const paymentApi = {
    async checkoutHandle(items: CartItemType[]) {
        return await paymentAPIInstance.post<{ id: string }>('payment/create-checkout-session', items)
    }
}