import { GameCardType } from './gameCardTypes'

export type CartItemType = GameCardType & {
    quantity: number
}