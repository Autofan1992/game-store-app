import { Card } from 'react-bootstrap'
import { FC } from 'react'
import { GameCardType, GamePlatformType } from '../../../types/game-card-types'
import { Link } from 'react-router-dom'
import styles from './GameItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaystation, faWindows, faXbox } from '@fortawesome/free-brands-svg-icons'
import { Rating } from 'react-simple-star-rating'

const defaultImage =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'

const GameItem: FC<GameCardType & GamePlatformType> = (
    {
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
        platform
    }) => {
    const ratingValuePercent = rating / 5 * 100

    return <div className="col-lg-4 text-black">
        <Card className={styles.gameCard}>
            <div className={styles.cardImgBlock}>
                <div className={styles.icons}>
                    {platform?.pc && <FontAwesomeIcon icon={faWindows}/>}
                    {platform?.playstation && <FontAwesomeIcon icon={faPlaystation}/>}
                    {platform?.xbox && <FontAwesomeIcon icon={faXbox}/>}
                </div>
                <Card.Img className={styles.cardImg} src={image ?? defaultImage}/>
            </div>
            <Card.Body>
                <div className="mb-3">
                    <Rating
                        ratingValue={ratingValuePercent}
                        iconsCount={5}
                        fillColor="orange"
                        emptyColor="gray"
                        size={20}
                        readonly
                    />
                </div>
                <Card.Title>{name}</Card.Title>
                <h6>Genre: {genre}</h6>
                <h6>Age Limit: {ageLimit}</h6>
                <Card.Text>{description.substring(0, 100)}...</Card.Text>
                <Link to={`games/${id}`} className="btn btn-outline-dark">See more info</Link>
            </Card.Body>
        </Card>
    </div>
}

export default GameItem