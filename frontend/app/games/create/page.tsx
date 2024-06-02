'use client'
import React from 'react'

import { Formik, FormikHelpers } from 'formik'
import { Button, Card, Container, Form, Spinner } from 'react-bootstrap'
import * as Yup from 'yup'

import ErrorState from '../../../components/ErrorState/ErrorState'
import CreateGameFormFields from '../../../features/games/components/CreateGameFormFields/CreateGameFormFields'
import { useCreateGameMutation } from '../../../features/games/graphql/mutations/CreateGame.generated'
import { EGameGenre } from '../../../features/games/models/games.enums'
import { useUploadResourceMutation } from '../../../graphql/mutations/uploadResource.generated'
import { GamePlatform } from '../../../graphql-generated/types'

const validationSchema = Yup.object().shape({
    name: Yup.string().required('No title provided'),
    ageLimit: Yup.number().min(1).max(100).required('No age limit provided').nullable(),
    price: Yup.number().min(1).required('No price provided'),
    amount: Yup.number().min(1).required('No amount provided'),
    genre: Yup.mixed<EGameGenre>().oneOf(Object.values(EGameGenre)).required('No genre provided'),
    image: Yup.mixed<FileList>().required().test('fileSize', 'The file is too large', (value) => {
        return value[0].size <= 2000000
    }),
    description: Yup.string().required('No description provided'),
    platform: Yup.array<GamePlatform[]>().min(1).required('No platform provided'),
})

const initialValues = {
    name: 'test',
    ageLimit: 8,
    price: 19.99,
    amount: 1,
    genre: EGameGenre.ACTION,
    image: null as unknown as FileList,
    description: 'description',
    platform: [GamePlatform.Pc],
}

export type TCreateGameFormValues = typeof initialValues

export default function CreateGamePage() {
    const [uploadResource, {
        loading: isUploadResourceLoading,
        error: uploadResourceError,
    }] = useUploadResourceMutation()
    const [createGame, { loading: isCreateGameLoading, error: createGameError }] = useCreateGameMutation()

    const onSubmit = async ({
        image,
        ...values
    }: TCreateGameFormValues, actions: FormikHelpers<TCreateGameFormValues>) => {
        const { data } = await uploadResource({
            variables: {
                input: {
                    resource: image[0]
                },
            },
        })

        const imageId = data?.uploadResource?.id

        if (!imageId) {
            throw new Error('Failed to upload image')
        }

        await createGame({
            variables: {
                input: {
                    ...values,
                    imageId
                },
            },
        })

        actions.resetForm()
    }

    return (
        <Container className='min-vh-100 d-flex flex-column align-items-center justify-content-center py-3'>
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
                            width: '100%',
                        } }
                        onSubmit={ handleSubmit }
                    >
                        <Card.Header>
                            <h1>Create game</h1>
                        </Card.Header>
                        <Card.Body className='mt-4'>
                            <CreateGameFormFields { ...{ handleSubmit, dirty, ...rest } } />

                            { uploadResourceError && <ErrorState error={ uploadResourceError }/> }
                            { createGameError && <ErrorState error={ createGameError }/> }

                            { isCreateGameLoading || isUploadResourceLoading && <Spinner/> }

                            <Button
                                className='w-100'
                                disabled={ !dirty || isCreateGameLoading || isUploadResourceLoading }
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
