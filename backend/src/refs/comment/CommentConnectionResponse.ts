import ConnectionResponse from '../../types/connectionResponse'
import { Comment } from '@prisma/client'
import builder from '../../../lib/builder'
import CommentRef from './Comment'

const CommentConnectionResponseRef = builder.objectType(ConnectionResponse<Comment>, {
    name: 'CommentConnectionResponse',
    fields: (t) => ({
        nodes: t.expose('nodes', { type: [CommentRef] }),
        hasMore: t.exposeBoolean('hasMore'),
        totalCount: t.exposeInt('totalCount')
    })
})

export default CommentConnectionResponseRef
