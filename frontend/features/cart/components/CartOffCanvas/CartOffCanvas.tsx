import { FC } from 'react'

import { Button, Offcanvas, Spinner, Stack } from 'react-bootstrap'

import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hooks'
import {
    selectCartIsFetching,
    selectCartItems,
    selectCartItemsTotalPrice,
    selectShowCartOffCanvas,
} from '../../../../redux/selectors/cartSelectors'
import { onCheckout, setShowCanvas } from '../../../../redux/slices/cartSlice'
import { formatCurrency } from '../../../../utils/formatCurrency'

import CartItem from './CartItem/CartItem'

const CartOffCanvas: FC = () => {
    const show = useAppSelector(selectShowCartOffCanvas)
    const items = useAppSelector(selectCartItems)
    const dispatch = useAppDispatch()
    const totalItemsPrice = useAppSelector(selectCartItemsTotalPrice)
    const isFetching = useAppSelector(selectCartIsFetching)

    const handleClose = () => dispatch(setShowCanvas(false))
    const cartCheckoutHandle = () => dispatch(onCheckout())

    return (
        <Offcanvas placement='end' show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='d-flex flex-column'>
                {isFetching ? (
                    <div className='d-flex justify-content-center align-items-center h-100 w-100'>
                        <Spinner animation='border' />
                    </div>
                ) : items.length > 0 ? (
                    <>
                        <Stack className='flex-fill justify-content-center' gap={3}>
                            {items.map((item) => (
                                <CartItem key={item.id} {...item} />
                            ))}
                        </Stack>
                        <div className='text-end mt-4'>
                            <h4 className='fw-bold'>Total: {formatCurrency(totalItemsPrice)}</h4>
                        </div>
                        <div className='text-center mt-4'>
                            <Button
                                disabled={isFetching}
                                variant='success'
                                onClick={cartCheckoutHandle}
                            >
                                Proceed to payment
                            </Button>
                        </div>
                    </>
                ) : (
                    <h6 className='text-center'>No items in the cart. Time to add some!</h6>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default CartOffCanvas
