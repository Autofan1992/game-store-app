import builder from '../../../lib/builder'
import { UserRole } from '@prisma/client'

const CommentRef = builder.prismaObject('Comment', {
    fields: (t) => ({
        id: t.exposeID('id'),
        createdAt: t.field({
            type: 'String',
            resolve: async ({ createdAt }) => {
                return createdAt.toISOString()
            }
        }),
        updatedAt: t.field({
            type: 'String',
            resolve: async ({ updatedAt }) => {
                return updatedAt.toISOString()
            }
        }),
        text: t.exposeString('text'),
        game: t.relation('game'),
        user: t.relation('user'),
        isEditable: t.boolean({
            resolve: async ({ userId }, _, ctx) => {
                const user = (await ctx).user

                return user ? userId === user.id || user.role === UserRole.Admin : false
            }
        }),
        isEdited: t.boolean({
            resolve: async ({ updatedAt, createdAt }) => {
                return updatedAt.getTime() !== createdAt.getTime()
            }
        })
    })
})

export default CommentRef
