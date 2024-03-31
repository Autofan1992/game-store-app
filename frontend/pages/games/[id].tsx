import { useRouter } from 'next/router'
import { Col, Container, Row } from 'react-bootstrap'

import CommentForm from '../../features/comments/components/comment-form/CommentForm'
import Comments from '../../features/comments/components/comments/Comments'

import BackButton from 'components/BackButton/BackButton'
import GameItem from 'features/games/components/GameItem/GameItem'
import { useSelectGame } from 'redux/selectors/gamesSelectors'

export default function GamePage() {
    const router = useRouter()
    const {
        query: { id },
    } = router

    const game = useSelectGame(+id)

    if (!game) return <h1>Game not found...</h1>

    return (
        <Container className='py-5'>
            <div className='d-flex align-items-center gap-2 mb-5 justify-content-center'>
                <BackButton />
                <h1 className='text-center'>Game page</h1>
            </div>
            <Row className='justify-content-center text-black'>
                <Col lg={9} md={10} xl={7} xxl={6}>
                    <GameItem {...game} />
                    <CommentForm />
                    <Comments comments={game.comments} />
                </Col>
            </Row>
        </Container>
    )
}
