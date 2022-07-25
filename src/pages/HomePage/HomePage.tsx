import { Container } from 'react-bootstrap'
import { FC, useEffect } from 'react'
import { useAppSelector } from '../../redux/hooks/hooks'
import { selectNewestGames } from '../../redux/selectors/gamesSelectors'
import GameItem from '../../components/ui/GameItem/GameItem'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'

const HomePage: FC = () => {
    const visibleGames = useAppSelector(selectNewestGames)
    const { toastShowHandle } = useAppContext()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (searchParams) {
            const isPaymentSuccess = searchParams.get('success')
            const isPaymentCanceled = searchParams.get('canceled')

            if (isPaymentSuccess === 'true') navigate('/thanks')
            if (isPaymentCanceled === 'true') {
                searchParams.set('canceled', 'false')
                toastShowHandle('The payment was cancelled')
            }
        }
    }, [navigate, searchParams, toastShowHandle])

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
                        <div className="row justify-content-center g-3">
                            {visibleGames.map(game => {
                                    const shortDescription = `${game.description.substring(0, 100)}...`

                                    return (
                                        <div
                                            key={game.id}
                                            className="col-md-6 col-lg-4 text-black"
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

export default HomePage