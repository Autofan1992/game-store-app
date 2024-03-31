import { Rating } from 'react-simple-star-rating'

interface IRatingWrapperProps {
    rating: number
}

export default function RatingWrapper({ rating }: IRatingWrapperProps) {
    return (
        <Rating
            emptyColor='gray'
            fillColor='orange'
            iconsCount={5}
            initialValue={rating}
            readonly
            size={20}
        />
    )
}
