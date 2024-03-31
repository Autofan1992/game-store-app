import { Card } from 'react-bootstrap'

import Avatar from '../../../../components/Avatar/Avatar'
import { IComment } from '../../../../types/gameCardTypes'

export default function CommentItem({ author, text, createdAt }: IComment) {
    const { fullName, avatar } = author
    return (
        <Card>
            <Card.Header className='d-flex align-items-center gap-2'>
                <Avatar fullName={fullName} src={avatar} />
                <div>{fullName}</div>
                <div className='ms-auto'>{createdAt}</div>
            </Card.Header>
            <Card.Body>{text}</Card.Body>
        </Card>
    )
}
