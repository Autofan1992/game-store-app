import builder from '../../../lib/builder'
import { getConnectionPagination } from '../../utils/connection.utils'
import prisma from '../../../lib/prisma'
import {  Prisma } from '@prisma/client'
import CommentConnectionResponseRef from '../../refs/comment/CommentConnectionResponse'
import CommentConnectionInputRef, { CommentSortCriteria } from '../../refs/comment/CommentConnectionInput'

builder.queryField('commentConnection', (t) =>
    t.field({
        type: CommentConnectionResponseRef,
        args: {
            input: t.arg({ type: CommentConnectionInputRef })
        },
        resolve: async (query, { input }) => {
            const { where, pagination } = input || {}
            const { skip, take } = getConnectionPagination(pagination)
            const inputWhere: Prisma.CommentFindManyArgs['where'] =  {
                gameId: where?.gameId
            }

            const totalCount = await prisma.comment.count({
                ...query,
                where: inputWhere
            })
            const nodes = await prisma.comment.findMany({
                ...query,
                orderBy: {
                    [where?.sortCriteria || CommentSortCriteria.CreatedAt]: where?.orderBy
                },
                where: inputWhere,
                skip,
                take,
            })
            const hasMore = totalCount > skip + take

            return {
                nodes,
                totalCount,
                hasMore
            }
        }
    })
)
