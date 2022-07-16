import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks'
import { selectCartItemTotalPrice } from '../../../../redux/selectors/cartSelectors'
import { FC } from 'react'
import { CartItemType } from '../../../../types/cartTypes'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { Button } from 'react-bootstrap'
import { removeCartItem } from '../../../../redux/slices/cartSlice'
import styles from './CartItem.module.scss'

const CartItem: FC<CartItemType> = (props) => {
    const {
        alt,
        id,
        image,
        name,
        price,
        quantity
    } = props
    const dispatch = useAppDispatch()
    const totalItemPrice = useAppSelector(state => selectCartItemTotalPrice(state, id))
    const onCartItemRemove = () => dispatch(removeCartItem(id))

    return <div className="item-block d-flex align-items-center gap-3 justify-content-between">
        <div className="item-info d-flex align-items-center">
            <div className={styles.itemImg}>
                <img src={image} alt={alt}/>
            </div>
            <div className="ms-3">
                <p className="name mb-0">
                    <span>{name}</span>
                    {quantity > 1 &&
                        <span className="text-muted ms-2">x{quantity}</span>
                    }
                </p>
                <p className="text-muted mb-0">{formatCurrency(price)}</p>
            </div>
        </div>
        <div className="item-price d-flex align-items-center">
            <h6 className="mb-0 me-2">{formatCurrency(totalItemPrice)}</h6>
            <Button size="sm" variant="outline-danger" onClick={onCartItemRemove}>&times;</Button>
        </div>
    </div>
}

export default CartItem