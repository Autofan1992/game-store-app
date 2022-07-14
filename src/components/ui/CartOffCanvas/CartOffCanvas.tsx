import ReactDOM from 'react-dom'
import { FC } from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import {
    selectCartItems,
    selectCartItemsTotalPrice,
    selectShowCartOffCanvas
} from '../../../redux/selectors/cartSelectors'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks'
import { setShowCanvas } from '../../../redux/slices/cartSlice'
import CartItem from './CartItem/CartItem'
import { formatCurrency } from '../../../utils/formatCurrency'

const CartOffCanvas: FC = () => {
    const show = useAppSelector(selectShowCartOffCanvas)
    const items = useAppSelector(selectCartItems)
    const dispatch = useAppDispatch()
    const totalItemsPrice = useAppSelector(selectCartItemsTotalPrice)

    const handleClose = () => dispatch(setShowCanvas(false))

    return ReactDOM.createPortal(
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column">
                {items.length > 0
                    ? <>
                        <Stack gap={3} className="flex-fill justify-content-center">
                            {items.map(item => <CartItem key={item.id} {...item}/>)}
                        </Stack>
                        <div className="text-end mt-4">
                            <h4 className="fw-bold">Total: {formatCurrency(totalItemsPrice)}</h4>
                        </div>
                    </>
                    : <h6 className="text-center">No items in the cart. Time to add some!</h6>
                }
            </Offcanvas.Body>
        </Offcanvas>,
        document.getElementById('offCanvas-root') as Element
    )
}

export default CartOffCanvas