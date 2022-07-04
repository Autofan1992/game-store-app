import { Button, Card } from 'react-bootstrap'
import { FC } from 'react'
import { GameCardType, GamePlatformType } from '../../../types/game-card-types'
import { Link } from 'react-router-dom'
import styles from './GameItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaystation, faWindows, faXbox } from '@fortawesome/free-brands-svg-icons'
import { Rating } from 'react-simple-star-rating'
import { formatCurrency } from '../../../helpers/formatCurrency'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { selectCartItemQuantity } from '../../../redux/selectors/cart-selectors'
import { decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem } from '../../../redux/slices/cart-slice'

const defaultImage =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'

type PropsType = {
    isGamesPage?: boolean
}

const GameItem: FC<GameCardType & GamePlatformType & PropsType> = (props) => {
    const {
        alt,
        amount,
        description,
        id,
        genre,
        image,
        ageLimit,
        name,
        rating,
        price,
        platform,
        isGamesPage
    } = props

    const ratingValuePercent = rating / 5 * 100
    const itemQuantity = useAppSelector(state => selectCartItemQuantity(state, id))
    const dispatch = useAppDispatch()

    const onCartItemIncrease = () => dispatch(increaseCartItemQuantity(itemQuantity < 1 ? props : id))
    const onCartItemDecrease = () => dispatch(decreaseCartItemQuantity(id))
    const onCartItemRemove = () => dispatch(removeCartItem(id))

    const gamePageLink = `/games/${id}`

    const cardImgClass = isGamesPage ? styles.cardImg : `${styles.cardImg} ${styles.isGamesPage}`

    return (
        <Card className={styles.gameCard}>
            <div className={styles.cardImgBlock}>
                <div className={styles.icons}>
                    {platform?.pc && <FontAwesomeIcon icon={faWindows}/>}
                    {platform?.playstation && <FontAwesomeIcon icon={faPlaystation}/>}
                    {platform?.xbox && <FontAwesomeIcon icon={faXbox}/>}
                </div>
                {isGamesPage
                    ? <Link to={gamePageLink}>
                        <Card.Img className={cardImgClass} src={image ?? defaultImage} alt={alt}/>
                    </Link>
                    : <Card.Img className={cardImgClass} src={image ?? defaultImage} alt={alt}/>
                }
                <div className={styles.ratingBlock}>
                    <Rating
                        ratingValue={ratingValuePercent}
                        iconsCount={5}
                        fillColor="orange"
                        emptyColor="gray"
                        size={20}
                        readonly
                    />
                </div>
            </div>
            <Card.Body className={styles.gameCardBody}>
                <Card.Title className="fs-5 fw-bold">{name}</Card.Title>
                <h6>Genre: {genre}</h6>
                <h6>Age Limit: {ageLimit}+</h6>
                <Card.Text>{description}</Card.Text>
                <h6 className="mt-auto mb-4">Price: {formatCurrency(price)}</h6>
                {itemQuantity > 0
                    ? <div className="text-center">
                        <div className="d-flex align-items-center justify-content-center gap-2">
                            <Button onClick={onCartItemDecrease}>-</Button>
                            <div>
                                <span className="fs-3 me-2">{itemQuantity}</span>
                                <span>in cart</span>
                            </div>
                            <Button onClick={onCartItemIncrease}>+</Button>
                        </div>
                        <Button size="sm" variant="danger" className="mt-2" onClick={onCartItemRemove}>Remove</Button>
                    </div>
                    : <Button variant="outline-primary" onClick={onCartItemIncrease}>Add to cart</Button>
                }
                {isGamesPage && <Link to={gamePageLink} className="btn btn-outline-dark mt-2">See more info</Link>}
            </Card.Body>
        </Card>
    )
}

export default GameItem