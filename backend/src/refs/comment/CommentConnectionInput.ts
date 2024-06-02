import ConnectionPaginationRef from '../common/ConnectionPagination'
import OrderByRef, { OrderBy } from '../common/OrderBy'
import builder from '../../../lib/builder'

const CommentConnectionInputRef = builder.inputType('CommentConnectionInput', {
    fields: (t) => ({
        pagination: t.field({ type: ConnectionPaginationRef }),
        where: t.field({ type: CommentConnectionInputWhereRef })
    })
})

const CommentConnectionInputWhereRef = builder.inputType(
    'CommentConnectionInputWhere',
    {
        fields: (t) => ({
            orderBy: t.field({ type: OrderByRef, defaultValue: OrderBy.Asc }),
            sortCriteria: t.field({ type: CommentSortCriteriaRef }),
            gameId: t.string({ required: true }),
        })
    }
)

export enum CommentSortCriteria {
    Name = 'name',
    CreatedAt = 'createdAt',
    UpdatedAt = 'updatedAt'
}

const CommentSortCriteriaRef = builder.enumType('CommentSortCriteria', {
    values: Object.values(CommentSortCriteria)
})

export default CommentConnectionInputRef
