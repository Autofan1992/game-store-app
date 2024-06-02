import { Fragment, memo } from 'react'

import { faPlaystation, faWindows, faXbox } from '@fortawesome/free-brands-svg-icons'
import { faThumbsUp as faThumbsUpRegular } from '@fortawesome/free-regular-svg-icons'
import { faThumbsUp as faThumbsUpSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from 'features/games/components/GameItem/GameItem.module.scss'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Card } from 'react-bootstrap'

import { GamePlatform } from '../../../../graphql-generated/types'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks'
import { selectCartItemQuantity } from '../../../../redux/selectors/cartSelectors'
import { decreaseCartItemQuantity, increaseCartItemQuantity, removeCartItem, } from '../../../../redux/slices/cartSlice'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { GameFragment } from '../../graphql/fragments/GameFragments.generated'
import { usePatchGameMutation } from '../../graphql/mutations/PatchGame.generated'

const RatingWrapper = dynamic(
    () => import('../../../../features/games/components/Rating/RatingWrapper'),
    {
        ssr: false,
    },
)

const defaultImage = 'https://via.placeholder.com/460x460?text=no-image'

type GameItemProps = GameFragment & {
    isGamesPage?: boolean
}

const platformIcons = {
    [GamePlatform.Pc]: <FontAwesomeIcon icon={ faWindows }/>,
    [GamePlatform.Playstation]: <FontAwesomeIcon icon={ faPlaystation }/>,
    [GamePlatform.Xbox]: <FontAwesomeIcon icon={ faXbox }/>,
}

function GameItem(props: GameItemProps) {

    const {
        description,
        id,
        genre,
        image,
        ageLimit,
        name,
        aggregate: { rating },
        price,
        platform,
        isGamesPage,
        isLiked,
    } = props
    const [patchGame] = usePatchGameMutation()

    const patchGameRating = (value: number) => {
        if (rating !== value) {
            patchGame({
                variables: { input: { id, rating: value } }
            })
        }
    }

    const patchGameLike = () => {
        patchGame({
            variables: { input: { id, like: !isLiked } },
            optimisticResponse: {
                __typename: 'Mutation',
                patchGame: { __typename: 'Game', ...props, isLiked: !isLiked }
            }
        })
    }

    const itemQuantity = useAppSelector((state) => selectCartItemQuantity(state, id))
    const dispatch = useAppDispatch()

    const onCartItemIncrease = () =>
        dispatch(increaseCartItemQuantity(props))
    const onCartItemDecrease = () => dispatch(decreaseCartItemQuantity(id))
    const onCartItemRemove = () => dispatch(removeCartItem(id))

    const gamePageLink = `/games/${ id }`

    const cardImgClass = isGamesPage ? styles.cardImg : `${ styles.cardImg } ${ styles.isGamesPage }`

    return (
        <Card className={ styles.gameCard }>
            <div className={ styles.cardImgBlock }>
                <div className={ styles.icons }>
                    { platform.map((item, idx) => (
                        <Fragment key={ idx }>
                            { platformIcons[item] }
                        </Fragment>
                    )) }
                </div>
                { isGamesPage ? (
                    <Link className={ cardImgClass } href={ gamePageLink }>
                        <Image alt={ name } fill src={ image.url ?? defaultImage }/>
                    </Link>
                ) : (
                    <div className={ cardImgClass }>
                        <Image alt={ name } fill src={ image.url ?? defaultImage }/>
                    </div>
                ) }
                <div className={ styles.ratingBlock }>
                    <RatingWrapper rating={ Number(rating) } setRating={ patchGameRating }/>
                </div>
                <div className={ styles.likeIcon }>
                    <button className='btn' onClick={ patchGameLike }><FontAwesomeIcon className='fa-2xl'
                        color='#fff'
                        icon={ isLiked ? faThumbsUpSolid : faThumbsUpRegular }/>
                    </button>
                </div>
            </div>

            <Card.Body className={ styles.gameCardBody }>
                <Card.Title className='fs-5 fw-bold'>{ name }</Card.Title>
                <h6>Genre: { genre }</h6>
                <h6>Age Limit: { ageLimit }+</h6>
                <Card.Text>{ description }</Card.Text>
                <h6 className='mt-auto mb-4'>Price: { formatCurrency(price) }</h6>
                { itemQuantity > 0 ? (
                    <div className='text-center'>
                        <div className='d-flex align-items-center justify-content-center gap-2'>
                            <Button onClick={ onCartItemDecrease }>-</Button>
                            <div>
                                <span className='fs-3 me-2'>{ itemQuantity }</span>
                                <span>in cart</span>
                            </div>
                            <Button onClick={ onCartItemIncrease }>+</Button>
                        </div>
                        <Button
                            className='mt-2'
                            size='sm'
                            variant='danger'
                            onClick={ onCartItemRemove }
                        >
                            Remove
                        </Button>
                    </div>
                ) : (
                    <Button variant='outline-primary' onClick={ onCartItemIncrease }>
                        Add to cart
                    </Button>
                ) }
                { isGamesPage && (
                    <Link className='btn btn-outline-dark mt-2' href={ gamePageLink }>
                        See more info
                    </Link>
                ) }
            </Card.Body>
        </Card>
    )
}

export default memo(GameItem)
