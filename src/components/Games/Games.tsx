import { FC } from 'react'
import { Container } from 'react-bootstrap'
import GameItem from './GameItem/GameItem'
import { useAppSelector } from '../../redux/hooks'
import { getVisibleGames } from '../../redux/selectors/games-selectors'
import FilterGamesForm from './FilterGamesForm/FilterGamesForm'
import SearchGamesForm from './SearchGamesForm/SearchGamesForm'

const Games: FC = () => {
    const games = useAppSelector(getVisibleGames)

    return <Container className="py-5">
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
                <div className="cards-row rounded-styled-block">
                    <div className="row-title text-white">
                        <h3>New Games</h3>
                        <hr/>
                    </div>
                    <div className="row g-4">
                        {games.map(game => <GameItem
                            key={game.id}
                            {...game}
                        />)}
                    </div>
                </div>
            </div>
        </div>
    </Container>
}

export default Games