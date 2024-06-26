import { FC } from 'react'

import { Container } from 'react-bootstrap'

const Footer: FC = () => {
    const year = new Date().getFullYear()

    return (
        <footer className='bg-dark text-white position-relative'>
            <Container className='py-3'>
                <div className='d-flex justify-content-between gap-2'>
                    <span>Developed by Mykola Gordiy</span>
                    <span>{year}</span>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
