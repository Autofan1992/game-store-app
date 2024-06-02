import { Formik } from 'formik'
import { Button, Col, Form, Row } from 'react-bootstrap'

import useSearchParams, { ESearchParam } from '../../../../hooks/useSearchParams'
import { createTextField } from '../../../../utils/CustomField'

const SearchGamesForm = () => {
    const [{ search = '' }, setParams] = useSearchParams()

    return (
        <Formik
            initialValues={ {
                name: search,
            } }
            onSubmit={ ({ name }) => {
                setParams({ [ESearchParam.Search]: name })
            } }
        >
            { ({ handleSubmit, values, handleChange, resetForm }) => (
                <Form onSubmit={ handleSubmit }>
                    <Row className='justify-content-center mb-4'>
                        <Col lg={ 6 }>
                            <div className='d-md-flex'>
                                <Form.Group className='me-3 position-relative w-100 flex-grow-1'>
                                    <label className='d-block'>
                                        { createTextField('Type game name', 'name', 'text', {
                                            value: values.name,
                                            onChange: handleChange,
                                        }) }

                                        { values.name && <Button
                                            className='position-absolute top-0 end-0'
                                            onClick={ () => {
                                                setParams({ [ESearchParam.Search]: undefined })
                                                resetForm()
                                            } }
                                        >
                                            &times;
                                        </Button> }
                                    </label>
                                </Form.Group>
                                <Button
                                    className='w-100 mt-2 mt-md-0'
                                    type='submit'
                                    variant='primary'
                                >
                                    Search games
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            ) }
        </Formik>
    )
}

export default SearchGamesForm
