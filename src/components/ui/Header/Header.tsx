import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { FC, memo } from 'react'
import CartIcon from '../Icons/CartIcon'
import styles from './Header.module.scss'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks'
import { selectCartItemsCount } from '../../../redux/selectors/cartSelectors'
import { setShowCanvas } from '../../../redux/slices/cartSlice'
import { useAppContext } from '../../../context/appContext'

type CartButtonProps = {
    handleCartOffCanvasShow: () => void
    cartItemsCount: number
    classes: string
}

const CartButton: FC<CartButtonProps> = ({ handleCartOffCanvasShow, cartItemsCount, classes }) => (
    <Button
        className={classes}
        size="sm"
        variant="outline-primary"
        onClick={handleCartOffCanvasShow}>
        <CartIcon size={20}/>
        <Badge bg="danger" className={`rounded-circle ${styles.cartBadge}`}>{cartItemsCount}</Badge>
    </Button>
)

const Header: FC = memo(() => {
    const { pathname } = useLocation()
    const dispatch = useAppDispatch()
    const { appWindowWidth: windowWidth } = useAppContext()
    const cartItemsCount = useAppSelector(selectCartItemsCount)

    const handleCartOffCanvasShow = () => dispatch(setShowCanvas(true))
    const currentMenuKey = (key: string) => pathname.search(key) >= 0 ? pathname : key

    return (
        <header className={styles.header}>
            <Navbar bg="dark" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand as={Link} to="/">Games Store</Navbar.Brand>
                    {windowWidth < 768 && (
                        <CartButton
                            classes="rounded-circle text-white position-relative ms-auto me-4"
                            cartItemsCount={cartItemsCount}
                            handleCartOffCanvasShow={handleCartOffCanvasShow}
                        />
                    )}
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse
                        id="basic-navbar-nav">
                        <Nav
                            className="me-auto"
                            activeKey={pathname}
                        >
                            <Nav.Link as={Link} eventKey="/" to="/">Home</Nav.Link>
                            <Nav.Link as={Link} eventKey={currentMenuKey('/games')} to="/games">Games</Nav.Link>
                            <Nav.Link as={Link} eventKey={currentMenuKey('/about')} to="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {windowWidth > 767 && (
                        <CartButton
                            classes="rounded-circle text-white position-relative"
                            cartItemsCount={cartItemsCount}
                            handleCartOffCanvasShow={handleCartOffCanvasShow}
                        />
                    )}
                </Container>
            </Navbar>
        </header>
    )
})

export default Header