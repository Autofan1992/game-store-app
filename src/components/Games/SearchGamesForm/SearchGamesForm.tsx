import { Formik } from 'formik'
import { Button, Col, Form, Row, Stack } from 'react-bootstrap'
import { useAppDispatch } from '../../../redux/hooks'
import { setGamesSearchName } from '../../../redux/slices/games-slice'
import { createTextField } from '../../../helpers/CustomField'

const SearchGamesForm = () => {
    const dispatch = useAppDispatch()

    return <Formik
        initialValues={{
            name: ''
        }}
        onSubmit={({ name }) => {
            dispatch(setGamesSearchName(name))
        }}
    >
        {({ handleSubmit, values, handleChange }) => (
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-center mb-4">
                    <Col md={6}>
                        <Stack direction="horizontal" className="align-items-start">
                            <Form.Group className="me-3 position-relative flex-grow-1">
                                <label className="d-block">
                                    {createTextField('Type in game name', 'name', 'text', {
                                        value: values.name,
                                        onChange: handleChange
                                    })}
                                </label>
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                            >
                                Search games
                            </Button>
                        </Stack>
                    </Col>
                </Row>
            </Form>
        )}
    </Formik>
}


export default SearchGamesForm