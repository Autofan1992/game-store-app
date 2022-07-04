import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks'
import { selectGame } from '../../redux/selectors/games-selectors'
import GameItem from '../../components/Games/GameItem/GameItem'
import { Col, Container, Row } from 'react-bootstrap'

const Game: FC = () => {
    const { id = 1 } = useParams()
    const game = useAppSelector(state => selectGame(state, +id))

    if (!game) return <h1>Game not found...</h1>

    return (
        <Container className="py-5">
            <h1 className="text-center mb-5">Game page</h1>
            <Row className="justify-content-center text-black">
                <Col md={10} lg={8} xl={6} xxl={5}>
                    <GameItem {...game}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Game