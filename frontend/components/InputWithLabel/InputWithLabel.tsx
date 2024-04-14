import React, { PropsWithChildren } from 'react'

import { FormikErrors } from 'formik'
import { Row } from 'react-bootstrap'
import Feedback from 'react-bootstrap/Feedback'

type TInputWithLabelProps<T> = PropsWithChildren & {
    error?: string | string[] | FormikErrors<T> | FormikErrors<T>[]
}

function InputWithLabel<T>({ error, children }: TInputWithLabelProps<T>) {
    return (
        <label className='d-block'>
            {children}
            {error &&
                (Array.isArray(error) ? (
                    <Row>
                        <>
                            {error.map((error, idx) => (
                                <Feedback className='d-block' key={idx} type='invalid'>
                                    <>{error}</>
                                </Feedback>
                            ))}
                        </>
                    </Row>
                ) : (
                    <Feedback className='d-block' type='invalid'>
                        <>{error}</>
                    </Feedback>
                ))}
        </label>
    )
}

export default InputWithLabel
