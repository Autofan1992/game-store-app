import { Rating } from 'react-simple-star-rating'

interface IRatingWrapperProps {
    rating: number
    setRating: (rating: number) => void
}

export default function RatingWrapper({ rating, setRating }: IRatingWrapperProps) {
    return (
        <Rating
            allowFraction={true}
            emptyColor='gray'
            fillColor='orange'
            iconsCount={5}
            initialValue={rating}
            key={rating}
            size={20}
            onClick={(value) => {
                setRating(value)
            }}
        />
    )
}
