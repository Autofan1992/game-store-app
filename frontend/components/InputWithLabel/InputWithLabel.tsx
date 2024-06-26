import React, { PropsWithChildren } from 'react'

import { FormikErrors } from 'formik'
import { Row } from 'react-bootstrap'
import Feedback from 'react-bootstrap/Feedback'

type TInputWithLabelProps<T> = PropsWithChildren & {
    label: string
    error?: string | string[] | FormikErrors<T> | FormikErrors<T>[]
}

function InputWithLabel<T>({ label, error, children }: TInputWithLabelProps<T>) {
    return (
        <label className='d-block'>
            <span className='d-block mb-1'>{label}</span>
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
