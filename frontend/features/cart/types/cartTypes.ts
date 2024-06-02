import { GameFragment } from '../../games/graphql/queries/GamesForHomePage.generated'

export type CartItemType = GameFragment & {
    quantity: number
}
