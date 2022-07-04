import { FC } from 'react'
import { Container } from 'react-bootstrap'
import GameItem from '../../components/Games/GameItem/GameItem'
import { useAppSelector } from '../../redux/hooks'
import { selectVisibleGames } from '../../redux/selectors/games-selectors'
import FilterGamesForm from '../../components/Games/FilterGamesForm/FilterGamesForm'
import SearchGamesForm from '../../components/Games/SearchGamesForm/SearchGamesForm'

const Games: FC = () => {
    const games = useAppSelector(selectVisibleGames)

    return (
        <Container className="py-5">
            <h1 className="text-center mb-5">Games</h1>
            <SearchGamesForm/>
            <div className="row justify-content-center">
                <div className="col-lg-3">
                    <div className="filter-form rounded-styled-block">
                        <div className="form-title">
                            <h3>Filter Games</h3>
                            <hr/>
                            <FilterGamesForm/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="cards-row rounded-styled-block h-100">
                        {games.length > 0
                            ? <div className="row g-4">
                                {games.map(game => {
                                    const shortDescription = `${game.description.substring(0, 100)}...`

                                    return <div
                                        key={game.id}
                                        className="col-lg-4 text-black"
                                    ><GameItem {...game} description={shortDescription} isGamesPage/>
                                    </div>
                                })}
                            </div>
                            : <div className="h-100 d-flex justify-content-center align-items-center">
                                <h2 className="fw-bold">Nothing found. Try change search criteria</h2>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Games