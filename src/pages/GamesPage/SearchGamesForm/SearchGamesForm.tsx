import { Formik } from 'formik'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useAppDispatch } from '../../../redux/hooks/hooks'
import { setGamesSearchName } from '../../../redux/slices/gamesSlice'
import { createTextField } from '../../../components/forms/CustomField'

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
                    <Col lg={6}>
                        <div className="d-md-flex">
                            <Form.Group className="me-3 position-relative w-100 flex-grow-1">
                                <label className="d-block">
                                    {createTextField('Type game name', 'name', 'text', {
                                        value: values.name,
                                        onChange: handleChange
                                    })}
                                </label>
                            </Form.Group>
                            <Button
                                className="w-100 mt-2 mt-md-0"
                                variant="primary"
                                type="submit"
                            >
                                Search games
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        )}
    </Formik>
}


export default SearchGamesForm