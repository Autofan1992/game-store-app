import ConnectionResponse from '../../types/connectionResponse'
import { Game } from '@prisma/client'
import builder from '../../../lib/builder'
import GameRef from './Game'

const GameConnectionResponseRef = builder.objectType(ConnectionResponse<Game>, {
    name: 'GameConnectionResponse',
    fields: (t) => ({
        nodes: t.expose('nodes', { type: [GameRef] }),
        hasMore: t.exposeBoolean('hasMore'),
        totalCount: t.exposeInt('totalCount')
    })
})

export default GameConnectionResponseRef
