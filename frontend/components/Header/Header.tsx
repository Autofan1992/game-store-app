import { FC } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap'

import { useAppContext } from '../../context/appContext'
import { UserRole } from '../../graphql-generated/types'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { selectCartItemsCount } from '../../redux/selectors/cartSelectors'
import { setShowCanvas } from '../../redux/slices/cartSlice'
import CartIcon from '../Icons/CartIcon'

import useGetUser from './api-hooks/useGetUser'
import styles from './Header.module.scss'
import UserInfo from './UserInfo'

type CartButtonProps = {
    handleCartOffCanvasShow: () => void
    cartItemsCount: number
    classes: string
}

const CartButton: FC<CartButtonProps> = ({ handleCartOffCanvasShow, cartItemsCount, classes }) => (
    <Button
        className={ classes }
        size='sm'
        variant='outline-primary'
        onClick={ handleCartOffCanvasShow }
    >
        <CartIcon size={ 20 } />
        <Badge bg='danger' className={ `rounded-circle ${ styles.cartBadge }` }>
            { cartItemsCount }
        </Badge>
    </Button>
)

const Header: FC = () => {
    const pathname = usePathname()
    const dispatch = useAppDispatch()
    const { appWindowWidth: windowWidth } = useAppContext()
    const cartItemsCount = useAppSelector(selectCartItemsCount)
    const { data } = useGetUser()
    const user = data?.me

    const handleCartOffCanvasShow = () => dispatch(setShowCanvas(true))
    const currentMenuKey = (key: string) => (pathname.search(key) >= 0 ? pathname : key)

    return (
        <header className={ styles.header }>
            <Navbar bg='dark' className={styles.navbar} expand='md' variant='dark'>
                <Container>
                    <Navbar.Brand as={ Link } href='/'>
                        Games Store
                    </Navbar.Brand>
                    { windowWidth < 768 && (
                        <CartButton
                            cartItemsCount={ cartItemsCount }
                            classes='rounded-circle text-white position-relative ms-auto me-4'
                            handleCartOffCanvasShow={ handleCartOffCanvasShow }
                        />
                    ) }
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav activeKey={ pathname } className='flex-grow-1 align-items-center'>
                            <Nav.Link as={ Link } eventKey='/' href='/'>
                                Home
                            </Nav.Link>
                            <Nav.Link as={ Link } eventKey={ currentMenuKey('/games') } href='/games'>
                                Games
                            </Nav.Link>
                            <Nav.Link as={ Link } eventKey={ currentMenuKey('/about') } href='/about'>
                                About
                            </Nav.Link>
                            { user && user.role === UserRole.Admin && (
                                <Nav.Link
                                    as={ Link }
                                    eventKey={ currentMenuKey('/games/create') }
                                    href='/games/create'
                                >
                                    Create game
                                </Nav.Link>
                            ) }
                            <UserInfo />
                        </Nav>
                    </Navbar.Collapse>

                    { windowWidth > 767 && (
                        <CartButton
                            cartItemsCount={ cartItemsCount }
                            classes='rounded-circle text-white position-relative'
                            handleCartOffCanvasShow={ handleCartOffCanvasShow }
                        />
                    ) }
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
