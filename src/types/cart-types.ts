import { GameCardType } from './game-card-types'

export type CartItemType = GameCardType & {
    quantity: number
}