import { EGamePlatform } from './games.enums'

export type TCreateGame = {
    name: string
    ageLimit: number
    price: number
    amount: number
    genre: string
    imageUrl: string
    description: string
    platform: EGamePlatform[]
}

export type TGame = {
    id: number
    name: string
    ageLimit: number
    price: number
    amount: number
    genre: string
    imageUrl: string
    description: string
    platform: EGamePlatform[]
}
