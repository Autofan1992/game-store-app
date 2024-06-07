'use client'

import { useEffect } from 'react'

import { useUser } from '@auth0/nextjs-auth0/client'
import { Col, Container, Row, Spinner } from 'react-bootstrap'

import BackButton from '../../../components/BackButton/BackButton'
import Preloader from '../../../components/Preloader/Preloader'
import useGetCommentsForGamePage from '../../../features/comments/api-hooks/useGetCommentsForGamesPage'
import CommentForm from '../../../features/comments/components/comment-form/CommentForm'
import Comments from '../../../features/comments/components/comments/Comments'
import {
    OnCommentAddedDocument,
    OnCommentAddedSubscription
} from '../../../features/comments/graphql/subscriptions/OnCommentAdded.generated'
import useGetGameForGamePage from '../../../features/games/api-hooks/useGetGameForGamePage'
import GameItem from '../../../features/games/components/GameItem/GameItem'

export default function GamePage({ params: { id } }: { params: { id: string } }) {
    const { user } = useUser()

    const [game, { loading: isGameLoading }] = useGetGameForGamePage(id)
    const { comments, loading: areCommentsLoading, subscribeToMore } = useGetCommentsForGamePage(id)

    useEffect(() => subscribeToMore<OnCommentAddedSubscription>({
        document: OnCommentAddedDocument,
        updateQuery: (prev, { subscriptionData }) => {
            if (!subscriptionData.data) return prev

            return {
                ...prev,
                commentConnection: {
                    ...prev.commentConnection,
                    nodes: [subscriptionData.data.commentAdded, ...prev.commentConnection.nodes],
                }
            }
        }
    }), [subscribeToMore])

    if (isGameLoading) return <Preloader/>

    if (!game) return <h1 className='text-center'>Game not found...</h1>

    return (
        <Container className='py-5'>
            <div className='d-flex align-items-center gap-2 mb-5 justify-content-center'>
                <BackButton/>
                <h1 className='text-center'>Game page</h1>
            </div>
            <Row className='justify-content-center text-black'>
                <Col lg={ 9 } md={ 10 } xl={ 7 } xxl={ 6 }>
                    <GameItem { ...game } />

                    { !!user && <CommentForm gameId={ id }/> }

                    { areCommentsLoading ? <Spinner/> : <Comments comments={ comments }/> }
                </Col>
            </Row>
        </Container>
    )
}
