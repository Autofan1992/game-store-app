import { Container } from 'react-bootstrap'
import { FC } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { selectNewestGames } from '../../redux/selectors/games-selectors'
import GameItem from '../../components/Games/GameItem/GameItem'

const Home: FC = () => {
    const visibleGames = useAppSelector(selectNewestGames)

    return (
        <Container className="py-5">
            <h1 className="text-center mb-5">Home</h1>
            <div className="row justify-content-center">
                <div className="col-lg-9">
                    <div className="cards-row rounded-styled-block">
                        <div className="row-title text-white">
                            <h3>New Games</h3>
                            <hr/>
                        </div>
                        <div className="row">
                            {visibleGames.map(game => {
                                    const shortDescription = `${game.description.substring(0, 100)}...`

                                    return (
                                        <div
                                            key={game.id}
                                            className="col-lg-4 text-black"
                                        ><GameItem {...game} description={shortDescription} isGamesPage/>
                                        </div>
                                    )
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Home