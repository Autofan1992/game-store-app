import { Card } from 'react-bootstrap'

import { IComment } from '../../../../types/gameCardTypes'
import CommentItem from '../comment-item/CommentItem'

interface ICommentsProps {
    comments?: IComment[]
}

export default function Comments({ comments }: ICommentsProps) {
    return (
        <Card className='mt-3'>
            <Card.Header>
                <h4>Comments</h4>
            </Card.Header>
            <Card.Body>
                <div className='gap-1 d-grid'>
                    {comments.map((comment) => (
                        <CommentItem key={comment.id} {...comment} />
                    ))}
                </div>
            </Card.Body>
        </Card>
    )
}
