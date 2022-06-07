import { Formik } from 'formik'
import { Button, ButtonGroup, Form } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { selectGamesFilters } from '../../../redux/selectors/games-selectors'
import {
    resetFilters,
    setAgeLimit,
    setGamePlatforms,
    setGenres, setSortCriteria,
    setSortType
} from '../../../redux/reducers/games-reducer'
import { createCheckbox, createSelectField } from '../../../helpers/CustomField'
import { AgesLimit, GamesGenres, GamesPlatforms, GamesSortCriteria, SortTypes } from '../../../types/game-card-types'

const ageLimitOptions = [
    {
        value: AgesLimit.All,
        label: 'All ages'
    },
    {
        value: AgesLimit.Three,
        label: `Above ${AgesLimit.Three}`
    },
    {
        value: AgesLimit.Six,
        label: `Above ${AgesLimit.Six}`
    },
    {
        value: AgesLimit.Twelve,
        label: `Above ${AgesLimit.Twelve}`
    },
    {
        value: AgesLimit.Sixteen,
        label: `Above ${AgesLimit.Sixteen}`
    },
    {
        value: AgesLimit.Eighteen,
        label: `Above ${AgesLimit.Eighteen}`
    },

]
const gamePlatforms = [
    {
        value: GamesPlatforms.All,
        label: 'All platforms'
    },
    {
        value: GamesPlatforms.Pc,
        label: 'Pc'
    },
    {
        value: GamesPlatforms.Xbox,
        label: 'Xbox'
    },
    {
        value: GamesPlatforms.Playstation,
        label: 'Playstation'
    },
]
const sortCriteria = [
    {
        value: undefined,
        label: 'Select sort criteria',
    },
    {
        value: GamesSortCriteria.Name,
        label: 'Name'
    },
    {
        value: GamesSortCriteria.Rating,
        label: 'Rating'
    },
    /*    {
            value: GamesSortCriteria.Price,
            label: 'Price'
        },*/
]
const sortTypes = [
    {
        value: SortTypes.Ascending,
        label: 'Ascending'
    },
    {
        value: SortTypes.Descending,
        label: 'Descending'
    },
]

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
        {({ handleSubmit, resetForm, values, handleChange }) => (
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <label className="d-block">
                        <p>Sort Type</p>
                        {createSelectField(undefined, 'sortType', sortTypes, {
                            value: values.sortType,
                            onChange: handleChange
                        })}
                    </label>
                </Form.Group>
                <Form.Group className="mb-3">
                    <label className="d-block">
                        <p>Platform</p>
                        {createSelectField(undefined, 'gamePlatforms', gamePlatforms, {
                            value: values.gamePlatforms,
                            onChange: handleChange
                        })}
                    </label>
                </Form.Group>
                <Form.Group className="mb-3">
                    <label className="d-block">
                        <p>Sort Criteria</p>
                        {createSelectField(undefined, 'sortCriteria', sortCriteria, {
                            value: values.sortCriteria,
                            onChange: handleChange
                        })}
                    </label>
                </Form.Group>
                <Form.Group className="mb-3">
                    <label className="d-block">
                        <p>Age</p>
                        {createSelectField(undefined, 'ageLimit', ageLimitOptions, {
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
                            checked: values.genres.includes(GamesGenres.RPG),
                            onChange: handleChange
                        })}
                        <p className="ms-2">{GamesGenres.RPG}</p>
                    </label>
                    <label className="d-flex mt-2">
                        {createCheckbox('genres', {
                            onChange: handleChange,
                            checked: values.genres.includes(GamesGenres.Action),
                            value: GamesGenres.Action
                        })}
                        <p className="ms-2">{GamesGenres.Action}</p>
                    </label>
                    <label className="d-flex mt-2">
                        {createCheckbox('genres', {
                            onChange: handleChange,
                            checked: values.genres.includes(GamesGenres.Simulator),
                            value: GamesGenres.Simulator
                        })}
                        <p className="ms-2">{GamesGenres.Simulator}</p>
                    </label>
                    <label className="d-flex mt-2">
                        {createCheckbox('genres', {
                            onChange: handleChange,
                            checked: values.genres.includes(GamesGenres.Shooter),
                            value: GamesGenres.Shooter
                        })}
                        <p className="ms-2">{GamesGenres.Shooter}</p>
                    </label>
                    <label className="d-flex mt-2">
                        {createCheckbox('genres', {
                            onChange: handleChange,
                            checked: values.genres.includes(GamesGenres.Sandbox),
                            value: GamesGenres.Sandbox
                        })}
                        <p className="ms-2">{GamesGenres.Sandbox}</p>
                    </label>
                </Form.Group>
                <ButtonGroup>
                    <Button
                        variant="outline-primary"
                        type="submit"
                    >Apply filters</Button>
                    <Button
                        variant="outline-danger"
                        onClick={() => {
                            dispatch(resetFilters())
                            resetForm()
                        }}
                    >Reset filters</Button>
                </ButtonGroup>
            </Form>
        )}
    </Formik>
}


export default FilterGamesForm