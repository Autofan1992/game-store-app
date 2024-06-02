import { Formik } from 'formik'
import { Button, ButtonGroup, Form } from 'react-bootstrap'

import useSearchParams, { ESearchParam } from '../../../../hooks/useSearchParams'
import { GamesGenres } from '../../../../types/gameCardTypes'
import { createCheckbox, createSelectField } from '../../../../utils/CustomField'

import {
    ageLimitOptions,
    gamePlatformsOptions,
    sortCriteriaOptions,
    sortTypesOptions,
} from './filterGamesFormOptions'

const FilterGamesForm = () => {
    const [{ gamePlatforms = '', ageLimit = '', genres = '', sortCriteria = '', sortType = '' }, setParams] = useSearchParams()

    return (
        <Formik
            initialValues={ {
                ageLimit,
                genres: genres.split(','),
                gamePlatforms :gamePlatforms.split(','),
                sortCriteria,
                sortType,
            } }
            onSubmit={ ({ ageLimit, genres, sortCriteria, sortType, gamePlatforms }) => {
                setParams({
                    [ESearchParam.AgeLimit]: ageLimit,
                    [ESearchParam.Genres]: genres?.join(','),
                    [ESearchParam.GamePlatforms]: gamePlatforms?.join(','),
                    [ESearchParam.SortType]: sortType,
                    [ESearchParam.SortCriteria]: sortCriteria
                })
            } }
        >
            { ({ handleSubmit, resetForm, values, handleChange }) => {
                const isChecked = (genre: GamesGenres) => values.genres?.includes(genre)

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
                            <label className='d-flex'>
                                { createCheckbox('genres', {
                                    value: GamesGenres.RPG,
                                    checked: isChecked(GamesGenres.RPG),
                                    onChange: handleChange,
                                }) }
                                <p className='ms-2'>{ GamesGenres.RPG }</p>
                            </label>
                            <label className='d-flex mt-2'>
                                { createCheckbox('genres', {
                                    onChange: handleChange,
                                    checked: isChecked(GamesGenres.Action),
                                    value: GamesGenres.Action,
                                }) }
                                <p className='ms-2'>{ GamesGenres.Action }</p>
                            </label>
                            <label className='d-flex mt-2'>
                                { createCheckbox('genres', {
                                    onChange: handleChange,
                                    checked: isChecked(GamesGenres.Simulator),
                                    value: GamesGenres.Simulator,
                                }) }
                                <p className='ms-2'>{ GamesGenres.Simulator }</p>
                            </label>
                            <label className='d-flex mt-2'>
                                { createCheckbox('genres', {
                                    onChange: handleChange,
                                    checked: isChecked(GamesGenres.Shooter),
                                    value: GamesGenres.Shooter,
                                }) }
                                <p className='ms-2'>{ GamesGenres.Shooter }</p>
                            </label>
                            <label className='d-flex mt-2'>
                                { createCheckbox('genres', {
                                    onChange: handleChange,
                                    checked: isChecked(GamesGenres.Sandbox),
                                    value: GamesGenres.Sandbox,
                                }) }
                                <p className='ms-2'>{ GamesGenres.Sandbox }</p>
                            </label>
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
