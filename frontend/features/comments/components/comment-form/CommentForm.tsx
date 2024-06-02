import { Formik } from 'formik'
import { Button, Card, Form, Spinner } from 'react-bootstrap'

import { createTextField } from '../../../../utils/CustomField'
import { useCreateCommentForGamePageMutation } from '../../graphql/mutations/CreateCommentForGamePage.generated'

interface ICommentFormProps {
    gameId: string
}

export default function CommentForm({ gameId }: ICommentFormProps) {
    const [createComment, { loading }] = useCreateCommentForGamePageMutation({
        update: (cache, { data }) => {
            if (!data) return

            cache.evict({
                fieldName: 'commentConnection'
            })
        }
    })

    return (
        <Card className='mt-3'>
            <Formik
                initialValues={ {
                    text: '',
                } }
                onSubmit={ async (values, formikHelpers) => {
                    await createComment({
                        variables: {
                            input: {
                                text: values.text,
                                gameId,
                            },
                        },
                    })
                    formikHelpers.resetForm()
                } }
            >
                { ({ handleSubmit, values, handleChange, dirty }) => (
                    <Form onSubmit={ handleSubmit }>
                        <Card.Header>
                            <h4>Add new comment</h4>
                        </Card.Header>
                        <Card.Body className='d-flex'>
                            <Form.Group className='me-3 position-relative w-100 flex-grow-1'>
                                <label className='d-block'>
                                    { createTextField('Type your comment...', 'text', 'text', {
                                        value: values.text,
                                        onChange: handleChange,
                                    }) }
                                </label>
                            </Form.Group>
                            { loading ?
                                <Spinner/> : <Button className='ms-auto d-bloc' disabled={ !dirty || loading }
                                    type='submit' variant='primary'>
                                    Add
                                </Button> }
                        </Card.Body>
                    </Form>
                ) }
            </Formik>
        </Card>
    )
}
