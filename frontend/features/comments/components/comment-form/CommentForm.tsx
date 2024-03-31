import { Formik } from 'formik'
import { Button, Card, Form } from 'react-bootstrap'

import { createTextField } from '../../../../utils/CustomField'

export default function CommentForm() {
    return (
        <Card className='mt-3'>
            <Formik
                initialValues={{
                    text: '',
                }}
                onSubmit={() => {}}
            >
                {({ handleSubmit, values, handleChange }) => (
                    <Form onSubmit={handleSubmit}>
                        <Card.Header>
                            <h4>Add new comment</h4>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group className='me-3 position-relative w-100 flex-grow-1'>
                                <label className='d-block'>
                                    {createTextField('Type your comment...', 'text', 'text', {
                                        value: values.text,
                                        onChange: handleChange,
                                    })}
                                </label>
                            </Form.Group>
                            <Button className='ms-auto mt-1 d-bloc' type='submit' variant='primary'>
                                Save
                            </Button>
                        </Card.Body>
                    </Form>
                )}
            </Formik>
        </Card>
    )
}
