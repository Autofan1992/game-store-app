import builder from '../../../lib/builder'
import { UserRole } from '@prisma/client'

builder.prismaObject('User', {
    fields: (t) => ({
        id: t.exposeID('id'),
        createdAt: t.expose('createdAt', {
            type: 'Date'
        }),
        updatedAt: t.expose('updatedAt', {
            type: 'Date'
        }),
        avatar: t.exposeString('avatar', { nullable: true }),
        email: t.exposeString('email'),
        role: t.expose('role', {
            type: UserRoleRef
        })
    })
})

const UserRoleRef = builder.enumType('UserRole', {
    values: Object.values(UserRole)
})
