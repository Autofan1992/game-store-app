import { GameCardType } from '../../../types/gameCardTypes'

export type CartItemType = GameCardType & {
    quantity: number
}
