export interface IComment {
    text: string
    id: string
    createdAt: string
    author: ICommentAuthor
}

interface ICommentAuthor {
    fullName: string
    avatar?: string
}

export type GameCardType = {
    id: string
    name: string
    image: string
    price: number
    description: string
    ageLimit: number
    rating: number
    alt?: string
    amount: number
    genre: string
    comments?: IComment[]
}

export type GamePlatformType = {
    platform: {
        pc: boolean
        playstation: boolean
        xbox: boolean
    }
}

export enum GamesPlatforms {
    All = 'all',
    Pc = 'pc',
    Playstation = 'playstation',
    Xbox = 'xbox',
}

export enum GamesGenres {
    Shooter = 'Shooter',
    Sandbox = 'Sandbox',
    RPG = 'RPG',
    Action = 'Action-adventure',
    Simulator = 'Simulator',
}

export enum AgesLimit {
    All = 0,
    Three = 3,
    Six = 6,
    Twelve = 12,
    Sixteen = 16,
    Eighteen = 18,
}

export enum GamesSortCriteria {
    Name = 'name',
    Rating = 'rating',
    Price = 'price',
}

export enum SortTypes {
    Ascending = 'ascending',
    Descending = 'descending',
}
