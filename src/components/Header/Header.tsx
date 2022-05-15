import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { FC } from 'react'

const Header: FC = () => {
    const { pathname } = useLocation()

    return <header className="header">
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand href="#home">Games Store</Navbar.Brand>
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
                            <Link className="text-reset" to="/games">Games</Link>
                        </Nav.Link>
                        <Nav.Link as="div" eventKey="/about">
                            <Link className="text-reset" to="/about">About</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
}

export default Header