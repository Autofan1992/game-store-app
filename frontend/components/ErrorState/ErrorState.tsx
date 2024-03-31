import React from 'react'

import { Row } from 'react-bootstrap'
import Feedback from 'react-bootstrap/Feedback'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ErrorState({ error }: any) {
    return (
        <>
            { Array.isArray(error) ? (
                <Row>
                    { error.map(({ property, message }) => (
                        <Feedback className='d-block' key={ property } type='invalid'>
                            <>{ message }</>
                        </Feedback>
                    )) }
                </Row>
            ) : (
                <Feedback className='d-block' type='invalid'>
                    <>{ error }</>
                </Feedback>
            ) }
        </>

    )
}

export default ErrorState