import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { FC } from 'react'
import CartIcon from '../common/Icons/CartIcon'
import styles from './Header.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { selectCartItemsCount } from '../../redux/selectors/cart-selectors'
import { setShowCanvas } from '../../redux/slices/cart-slice'

const Header: FC = () => {
    const { pathname } = useLocation()
    const dispatch = useAppDispatch()
    const cartItemsCount = useAppSelector(selectCartItemsCount)

    const handleCartOffCanvasShow = () => dispatch(setShowCanvas(true))

    return (
        <header className={styles.header}>
            <Navbar bg="dark" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand href="/">Games Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse
                        id="basic-navbar-nav">
                        <Nav
                            className="me-auto"
                            activeKey={pathname}
                        >
                            <Nav.Link as="div" eventKey="/">
                                <Link className="text-reset" to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link as="div" eventKey="/games">
                                <Link className="text-reset" to="games">Games</Link>
                            </Nav.Link>
                            <Nav.Link as="div" eventKey="/about">
                                <Link className="text-reset" to="about">About</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button
                        className="rounded-circle text-white position-relative"
                        size="sm"
                        variant="outline-primary"
                        onClick={handleCartOffCanvasShow}>
                        <CartIcon size={20}/>
                        <Badge bg="danger" className={`rounded-circle ${styles.cartBadge}`}>{cartItemsCount}</Badge>
                    </Button>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header