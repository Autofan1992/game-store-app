import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap'

import { useAppContext } from '../../context/appContext'
import { useAuthContext } from '../../context/authContext'
import { useMeForAppQuery } from '../../graphql/queries/meForApp.generated'
import { UserRole } from '../../graphql-generated/types'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { selectCartItemsCount } from '../../redux/selectors/cartSelectors'
import { setShowCanvas } from '../../redux/slices/cartSlice'
import CartIcon from '../Icons/CartIcon'

import styles from './Header.module.scss'

type CartButtonProps = {
    handleCartOffCanvasShow: () => void
    cartItemsCount: number
    classes: string
}

const CartButton: FC<CartButtonProps> = ({ handleCartOffCanvasShow, cartItemsCount, classes }) => (
    <Button
        className={classes}
        size='sm'
        variant='outline-primary'
        onClick={handleCartOffCanvasShow}
    >
        <CartIcon size={20} />
        <Badge bg='danger' className={`rounded-circle ${styles.cartBadge}`}>
            {cartItemsCount}
        </Badge>
    </Button>
)

const Header: FC = () => {
    const { pathname } = useRouter()
    const dispatch = useAppDispatch()
    const { appWindowWidth: windowWidth } = useAppContext()
    const cartItemsCount = useAppSelector(selectCartItemsCount)

    const { context } = useAuthContext()
    const { data, loading } = useMeForAppQuery({ skip: !context, context })

    if (loading) return <p>Loading...</p>

    const handleCartOffCanvasShow = () => dispatch(setShowCanvas(true))
    const currentMenuKey = (key: string) => (pathname.search(key) >= 0 ? pathname : key)
    
    const user = data?.me
    return (
        <header className={styles.header}>
            <Navbar bg='dark' expand='md' variant='dark'>
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
                        <Nav activeKey={ pathname } className='me-auto'>
                            <Nav.Link as={ Link } eventKey='/' href='/'>
                                Home
                            </Nav.Link>
                            <Nav.Link as={ Link } eventKey={ currentMenuKey('/games') } href='/games'>
                                Games
                            </Nav.Link>
                            <Nav.Link as={ Link } eventKey={ currentMenuKey('/about') } href='/about'>
                                About
                            </Nav.Link>
                            <Nav.Link as={ Link } eventKey={ currentMenuKey('/games/create') } href='/games/create'>
                                Create game
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
                        { user && user.role === UserRole.Admin && (
                            <div
                                className='flex items-center justify-center mr-5 capitalize bg-blue-500 py-1 px-3 rounded-md text-white'>
                                <Link href='/admin'>+ Create</Link>
                            </div>
                        ) }
                        { user ? (
                            <div className='flex items-center space-x-5'>
                                <Link
                                    className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'
                                    href='/api/auth/logout'
                                    onClick={ () => sessionStorage.clear() }
                                >
                                    Logout
                                </Link>
                                <Image
                                    alt='profile'
                                    className='rounded-full w-12 h-12'
                                    src={user.avatar ?? ''}
                                />
                            </div>
                        ) : (
                            <Link
                                className='inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'
                                href='/api/auth/login'
                            >
                                Login
                            </Link>
                        ) }
                    </nav>

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
