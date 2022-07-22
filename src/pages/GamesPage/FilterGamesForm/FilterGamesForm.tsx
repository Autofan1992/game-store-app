import { Formik } from 'formik'
import { Button, ButtonGroup, Form } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks'
import { selectGamesFilters } from '../../../redux/selectors/gamesSelectors'
import {
    resetFilters,
    setAgeLimit,
    setGamePlatforms,
    setGenres,
    setSortCriteria,
    setSortType
} from '../../../redux/slices/gamesSlice'
import { createCheckbox, createSelectField } from '../../../components/forms/CustomField'
import { GamesGenres } from '../../../types/gameCardTypes'
import { ageLimitOptions, gamePlatformsOptions, sortCriteriaOptions, sortTypesOptions } from './filterGamesFormOptions'

const FilterGamesForm = () => {
    const dispatch = useAppDispatch()
    const filters = useAppSelector(selectGamesFilters)

    return <Formik
        initialValues={filters}
        onSubmit={({ ageLimit, genres, sortCriteria, sortType, gamePlatforms }) => {
            if (ageLimit) dispatch(setAgeLimit(+ageLimit))
            if (genres) dispatch(setGenres(genres))
            if (gamePlatforms) dispatch(setGamePlatforms(gamePlatforms))
            if (sortType) dispatch(setSortType(sortType))
            if (sortCriteria) dispatch(setSortCriteria(sortCriteria))
        }}
    >
        {({ handleSubmit, resetForm, values, handleChange }) => {
            const isChecked = (genre: GamesGenres) => values.genres.includes(genre)

            return (
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <label className="d-block">
                            <p>Sort Type</p>
                            {createSelectField(
                                undefined,
                                'sortType',
                                sortTypesOptions,
                                {
                                    value: values.sortType,
                                    onChange: handleChange
                                })}
                        </label>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <label className="d-block">
                            <p>Platform</p>
                            {createSelectField(
                                undefined,
                                'gamePlatforms',
                                gamePlatformsOptions,
                                {
                                    value: values.gamePlatforms,
                                    onChange: handleChange
                                })}
                        </label>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <label className="d-block">
                            <p>Sort Criteria</p>
                            {createSelectField(
                                undefined,
                                'sortCriteria',
                                sortCriteriaOptions,
                                {
                                    value: values.sortCriteria,
                                    onChange: handleChange
                                })}
                        </label>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <label className="d-block">
                            <p>Age</p>
                            {createSelectField(
                                undefined,
                                'ageLimit',
                                ageLimitOptions,
                                {
                                    value: values.ageLimit,
                                    onChange: handleChange
                                })}
                        </label>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <p>Genres</p>
                        <label className="d-flex">
                            {createCheckbox('genres', {
                                value: GamesGenres.RPG,
                                checked: isChecked(GamesGenres.RPG),
                                onChange: handleChange
                            })}
                            <p className="ms-2">{GamesGenres.RPG}</p>
                        </label>
                        <label className="d-flex mt-2">
                            {createCheckbox('genres', {
                                onChange: handleChange,
                                checked: isChecked(GamesGenres.Action),
                                value: GamesGenres.Action
                            })}
                            <p className="ms-2">{GamesGenres.Action}</p>
                        </label>
                        <label className="d-flex mt-2">
                            {createCheckbox('genres', {
                                onChange: handleChange,
                                checked: isChecked(GamesGenres.Simulator),
                                value: GamesGenres.Simulator
                            })}
                            <p className="ms-2">{GamesGenres.Simulator}</p>
                        </label>
                        <label className="d-flex mt-2">
                            {createCheckbox('genres', {
                                onChange: handleChange,
                                checked: isChecked(GamesGenres.Shooter),
                                value: GamesGenres.Shooter
                            })}
                            <p className="ms-2">{GamesGenres.Shooter}</p>
                        </label>
                        <label className="d-flex mt-2">
                            {createCheckbox('genres', {
                                onChange: handleChange,
                                checked: isChecked(GamesGenres.Sandbox),
                                value: GamesGenres.Sandbox
                            })}
                            <p className="ms-2">{GamesGenres.Sandbox}</p>
                        </label>
                    </Form.Group>
                    <ButtonGroup className="d-flex">
                        <Button
                            className="w-100"
                            variant="outline-primary"
                            type="submit"
                        >Apply filters</Button>
                        <Button
                            className="w-100"
                            variant="outline-danger"
                            onClick={() => {
                                dispatch(resetFilters())
                                resetForm()
                            }}
                        >Reset filters</Button>
                    </ButtonGroup>
                </Form>
            )
        }}
    </Formik>
}


export default FilterGamesForm