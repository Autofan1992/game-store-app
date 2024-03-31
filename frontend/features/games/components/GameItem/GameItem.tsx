import { memo } from 'react'

import { faPlaystation, faWindows, faXbox } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from 'features/games/components/GameItem/GameItem.module.scss'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Button, Card } from 'react-bootstrap'

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks'
import { selectCartItemQuantity } from '../../../../redux/selectors/cartSelectors'
import { decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem } from '../../../../redux/slices/cartSlice'
import { GameCardType, GamePlatformType } from '../../../../types/gameCardTypes'
import { formatCurrency } from '../../../../utils/formatCurrency'

const RatingWrapper = dynamic(() => import('../../../../features/games/components/Rating/RatingWrapper'), {
    ssr: false,
})

const defaultImage = 'https://via.placeholder.com/460x460?text=no-image'

type GameItemProps = GameCardType &
    GamePlatformType & {
        isGamesPage?: boolean
    }

function GameItem(props: GameItemProps) {
    const {
        alt,
        description,
        id,
        genre,
        image,
        ageLimit,
        name,
        rating,
        price,
        platform,
        isGamesPage,
    } = props

    const itemQuantity = useAppSelector((state) => selectCartItemQuantity(state, id))
    const dispatch = useAppDispatch()

    const onCartItemIncrease = () =>
        dispatch(increaseCartItemQuantity(itemQuantity < 1 ? props : id))
    const onCartItemDecrease = () => dispatch(decreaseCartItemQuantity(id))
    const onCartItemRemove = () => dispatch(removeCartItem(id))

    const gamePageLink = `/games/${id}`

    const cardImgClass = isGamesPage ? styles.cardImg : `${styles.cardImg} ${styles.isGamesPage}`

    return (
        <Card className={styles.gameCard}>
            <div className={styles.cardImgBlock}>
                <div className={styles.icons}>
                    {platform?.pc && <FontAwesomeIcon icon={faWindows} />}
                    {platform?.playstation && <FontAwesomeIcon icon={faPlaystation} />}
                    {platform?.xbox && <FontAwesomeIcon icon={faXbox} />}
                </div>
                {isGamesPage ? (
                    <Link className={cardImgClass} href={gamePageLink}>
                        <Card.Img alt={alt} src={image ?? defaultImage} />
                    </Link>
                ) : (
                    <div className={cardImgClass}>
                        <Card.Img alt={alt} src={image ?? defaultImage} />
                    </div>
                )}
                <div className={styles.ratingBlock}>
                    <RatingWrapper rating={rating} />
                </div>
            </div>
            <Card.Body className={styles.gameCardBody}>
                <Card.Title className='fs-5 fw-bold'>{name}</Card.Title>
                <h6>Genre: {genre}</h6>
                <h6>Age Limit: {ageLimit}+</h6>
                <Card.Text>{description}</Card.Text>
                <h6 className='mt-auto mb-4'>Price: {formatCurrency(price)}</h6>
                {itemQuantity > 0 ? (
                    <div className='text-center'>
                        <div className='d-flex align-items-center justify-content-center gap-2'>
                            <Button onClick={onCartItemDecrease}>-</Button>
                            <div>
                                <span className='fs-3 me-2'>{itemQuantity}</span>
                                <span>in cart</span>
                            </div>
                            <Button onClick={onCartItemIncrease}>+</Button>
                        </div>
                        <Button
                            className='mt-2'
                            size='sm'
                            variant='danger'
                            onClick={onCartItemRemove}
                        >
                            Remove
                        </Button>
                    </div>
                ) : (
                    <Button variant='outline-primary' onClick={onCartItemIncrease}>
                        Add to cart
                    </Button>
                )}
                {isGamesPage && (
                    <Link className='btn btn-outline-dark mt-2' href={gamePageLink}>
                        See more info
                    </Link>
                )}
            </Card.Body>
        </Card>
    )
}

export default memo(GameItem)
