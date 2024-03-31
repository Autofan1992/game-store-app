import React from 'react'

import { Formik } from 'formik'
import { Button, Card, Container, Form, Spinner } from 'react-bootstrap'
import * as Yup from 'yup'

import ErrorState from '../../components/ErrorState/ErrorState'
import CreateGameFormFields from '../../features/games/components/CreateGameFormFields/CreateGameFormFields'
import { EGameGenre, EGamePlatform } from '../../features/games/models/games.enums'

const validationSchema = Yup.object().shape({
    name: Yup.string().required('No first name provided'),
    ageLimit: Yup.number().min(1).max(100).required('No age limit provided').nullable(),
    price: Yup.number().min(1).nullable(),
    amount: Yup.number().min(1).nullable(),
    genre: Yup.mixed<EGameGenre>().oneOf(Object.values(EGameGenre)).required('No genre provided'),
    imageUrl: Yup.string().required('No image url provided'),
    description: Yup.string().required('No description provided'),
    platform: Yup.mixed<EGamePlatform>().oneOf(Object.values(EGamePlatform)).required('No platform provided')
})

const initialValues = {
    name: '',
    ageLimit: null,
    price: null,
    amount: null,
    genre: EGameGenre.ACTION,
    imageUrl: '',
    description: '',
    platform: EGamePlatform.PC
}

export type TCreateGameFormValues = typeof initialValues

export default function CreateGamePage() {
    // const { callApi, error, isLoading } = useGetCreateGame()

    const onSubmit = async (values, actions) => {
        // await callApi(values)
        actions.resetForm()
    }

    return (
        <Container className='min-vh-100 d-flex flex-column align-items-center justify-content-center'>
            <Formik
                initialValues={ initialValues }
                validateOnChange={ false }
                validationSchema={ validationSchema }
                onSubmit={ onSubmit }
            >
                { ({ handleSubmit, dirty, ...rest }) => (
                    <Form
                        style={ {
                            maxWidth: '500px',
                            width: '100%'
                        } }
                        onSubmit={ handleSubmit }
                    >
                        <Card.Header>
                            <h1>Create game</h1>
                        </Card.Header>
                        <Card.Body className='mt-5'>
                            <CreateGameFormFields { ...{ handleSubmit, dirty, ...rest } } />

                            { error && (
                                <ErrorState error={ error } />) }

                            { isLoading && <Spinner /> }

                            <Button
                                className='w-100'
                                disabled={ !dirty }
                                type='submit'
                                variant='primary'
                            >
                Create
                            </Button>
                        </Card.Body>
                    </Form>
                ) }
            </Formik>
        </Container>
    )
}
