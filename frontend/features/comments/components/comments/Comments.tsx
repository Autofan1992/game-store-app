import { Card } from 'react-bootstrap'

import { CommentFragment } from '../../graphql/fragments/Comment.generated'
import CommentItem from '../comment-item/CommentItem'

interface ICommentsProps {
    comments?: CommentFragment[]
}

export default function Comments({ comments }: ICommentsProps) {
    if (!comments?.length) return null

    return (
        <Card className='mt-3'>
            <Card.Header>
                <h4>Comments</h4>
            </Card.Header>
            <Card.Body>
                <div className='gap-1 d-grid'>
                    {comments?.map((comment) => (
                        <CommentItem key={comment.id} {...comment} />
                    ))}
                </div>
            </Card.Body>
        </Card>
    )
}
