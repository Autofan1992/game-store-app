import React from 'react'

import { ToastContainer, ToastHeader } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast'

type PropsType = {
    show: boolean
    setShow: (val: boolean) => void
    message: string | null
}

export function CustomToast({ setShow, show, message }: PropsType) {
    return (
        <ToastContainer
            position='top-center'
            style={{
                zIndex: 2000,
            }}
        >
            <Toast show={show} onClose={() => setShow(false)}>
                <ToastHeader className='justify-content-end' />
                <Toast.Body className='fw-bold'>{message}</Toast.Body>
            </Toast>
        </ToastContainer>
    )
}
