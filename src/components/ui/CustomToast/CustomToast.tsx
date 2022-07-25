import React from 'react'
import Toast from 'react-bootstrap/Toast'
import ReactDOM from 'react-dom'
import { ToastContainer, ToastHeader } from 'react-bootstrap'

type PropsType = {
    show: boolean
    setShow: (val: boolean) => void
    message: string | null
}

export function CustomToast({ setShow, show, message }: PropsType) {
    return ReactDOM.createPortal(
        <ToastContainer
            position="top-center"
            style={{
                zIndex: 2000
            }}
        >
            <Toast onClose={() => setShow(false)} show={show}>
                <ToastHeader className="justify-content-end"/>
                <Toast.Body className="fw-bold">{message}</Toast.Body>
            </Toast>
        </ToastContainer>,
        document.getElementById('toast-root') as Element
    )
}