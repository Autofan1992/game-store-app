import { FC, memo, useEffect, useState } from 'react'
import { Button, Collapse, Container } from 'react-bootstrap'
import GameItem from '../../components/ui/GameItem/GameItem'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks'
import { selectVisibleGames, selectVisibleGamesCount } from '../../redux/selectors/gamesSelectors'
import FilterGamesForm from './FilterGamesForm/FilterGamesForm'
import SearchGamesForm from './SearchGamesForm/SearchGamesForm'
import { useAppContext } from '../../context/appContext'
import { setVisibleGamesCount } from '../../redux/slices/gamesSlice'

const GamesPage: FC = memo(() => {
    const dispatch = useAppDispatch()
    const gamesCount = useAppSelector(selectVisibleGamesCount)
    const games = useAppSelector(selectVisibleGames)
    const { appWindowWidth } = useAppContext()
    const [open, setOpen] = useState(true)

    useEffect(() => {
        if (appWindowWidth > 991) setOpen(true)
        if (appWindowWidth < 992) setOpen(false)
    }, [appWindowWidth])

    const showMoreHandle = () => dispatch(setVisibleGamesCount(10))

    return (
        <Container className="py-5">
            <h1 className="text-center mb-5">Games</h1>
            <SearchGamesForm/>
            <div className="row justify-content-center">
                <div className="col-lg-3 mb-3 mb-lg-0">
                    <div className="filter-form rounded-styled-block">
                        <div className="form-title">
                            {appWindowWidth < 992 && (
                                <Button
                                    onClick={() => setOpen(!open)}
                                    aria-expanded={open}
                                    className="w-100 mb-3"
                                >
                                    Show games filters
                                </Button>
                            )}
                            <Collapse in={open}>
                                <div>
                                    <h3>Filter Games</h3>
                                    <hr/>
                                    <FilterGamesForm/>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="cards-row rounded-styled-block h-100">
                        {games.length > 0
                            ? (
                                <div className="row g-3">
                                    {games
                                        .filter((_, idx) => idx < gamesCount)
                                        .map(game => {
                                            const shortDescription = `${game.description.substring(0, 100)}...`

                                            return <div
                                                key={game.id}
                                                className="col-md-6 col-xl-4 text-black"
                                            ><GameItem {...game} description={shortDescription} isGamesPage/>
                                            </div>
                                        })}
                                </div>
                            )
                            : (
                                <div className="h-100 d-flex justify-content-center align-items-center">
                                    <h2 className="fw-bold">Nothing found. Try change search criteria</h2>
                                </div>
                            )
                        }
                        {gamesCount < games.length && (
                            <div className="mt-3 text-center">
                                <Button variant="outline-primary" onClick={showMoreHandle}>Show more</Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Container>
    )
})

export default GamesPage