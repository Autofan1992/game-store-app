import { Formik } from 'formik'
import { Button, ButtonGroup, Form } from 'react-bootstrap'

import { GameGenre } from '../../../../graphql-generated/types'
import useSearchParams, { ESearchParam } from '../../../../hooks/useSearchParams'
import { createCheckbox, createSelectField } from '../../../../utils/CustomField'

import {
    ageLimitOptions,
    gamePlatformsOptions,
    sortCriteriaOptions,
    sortTypesOptions,
} from './filterGamesFormOptions'

const FilterGamesForm = () => {
    const [{
        gamePlatforms = '',
        ageLimit = '',
        genres = '',
        sortCriteria = '',
        sortType = ''
    }, setParams] = useSearchParams()

    return (
        <Formik
            initialValues={ {
                ageLimit,
                genres: genres.split(','),
                gamePlatforms: gamePlatforms.split(','),
                sortCriteria,
                sortType,
            } }
            onSubmit={ ({ ageLimit, genres, sortCriteria, sortType, gamePlatforms }) => {
                const joinedGenres = genres?.filter(Boolean).join(',')
                const joinedPlatforms = gamePlatforms?.filter(Boolean).join(',')

                setParams({
                    [ESearchParam.AgeLimit]: ageLimit,
                    [ESearchParam.Genres]: joinedGenres,
                    [ESearchParam.GamePlatforms]: joinedPlatforms,
                    [ESearchParam.SortType]: sortType,
                    [ESearchParam.SortCriteria]: sortCriteria
                })
            } }
        >
            { ({ handleSubmit, resetForm, values, handleChange }) => {
                const isChecked = (genre: GameGenre) => values.genres?.includes(genre)

                return (
                    <Form onSubmit={ handleSubmit }>
                        <Form.Group className='mb-3'>
                            <label className='d-block'>
                                <p>Sort Type</p>
                                { createSelectField(undefined, 'sortType', sortTypesOptions, {
                                    value: values.sortType,
                                    onChange: handleChange,
                                }) }
                            </label>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <label className='d-block'>
                                <p>Platform</p>
                                { createSelectField(
                                    undefined,
                                    'gamePlatforms',
                                    gamePlatformsOptions,
                                    {
                                        value: values.gamePlatforms,
                                        onChange: handleChange,
                                        multiple: true,
                                    },
                                ) }
                            </label>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <label className='d-block'>
                                <p>Sort Criteria</p>
                                { createSelectField(undefined, 'sortCriteria', sortCriteriaOptions, {
                                    value: values.sortCriteria,
                                    onChange: handleChange,
                                }) }
                            </label>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <label className='d-block'>
                                <p>Age</p>
                                { createSelectField(undefined, 'ageLimit', ageLimitOptions, {
                                    value: values.ageLimit,
                                    onChange: handleChange,
                                }) }
                            </label>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <p>Genres</p>
                            { Object.values(GameGenre).map((value) => (
                                <label className='d-flex mt-2' key={ value }>
                                    { createCheckbox('genres', {
                                        onChange: handleChange,
                                        checked: isChecked(value),
                                        value,
                                    }) }
                                    <p className='ms-2'>{ value }</p>
                                </label>
                            )) }
                        </Form.Group>
                        <ButtonGroup className='d-flex'>
                            <Button className='w-100' type='submit' variant='outline-primary'>
                                Apply filters
                            </Button>
                            <Button
                                className='w-100'
                                variant='outline-danger'
                                onClick={ () => {
                                    setParams({
                                        [ESearchParam.AgeLimit]: undefined,
                                        [ESearchParam.Genres]: undefined,
                                        [ESearchParam.GamePlatforms]: undefined,
                                        [ESearchParam.SortType]: undefined,
                                        [ESearchParam.SortCriteria]: undefined,
                                    })
                                    resetForm()
                                } }
                            >
                                Reset filters
                            </Button>
                        </ButtonGroup>
                    </Form>
                )
            } }
        </Formik>
    )
}

export default FilterGamesForm
