class GameAggregate {
    rating: number | null
    likes: number

    constructor(rating: number | null, likes: number) {
        this.rating = rating
        this.likes = likes
    }
}

export default GameAggregate
