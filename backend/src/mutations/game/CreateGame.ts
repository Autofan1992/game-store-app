import builder from '../../../lib/builder'
import prisma from '../../../lib/prisma'
import CreateGameInputRef from '../../refs/game/CreateGameInput'
import { GraphQLError } from 'graphql/error'
import { UserRole } from '@prisma/client'

builder.mutationField('createGame', (t) =>
    t.prismaField({
        args: {
            input: t.arg({ type: CreateGameInputRef, required: true })
        },
        type: 'Game',
        resolve: async (query, _, { input: {imageId, ...input} }, ctx) => {
            const { user } = await ctx

            if (!user) throw new GraphQLError('Unauthenticated')
            if (user.role !== UserRole.Admin) throw new GraphQLError('Unauthorized')


            return prisma.game.create({
                ...query,
                data: {
                    ...input,
                    user: {
                        connect: {
                            id: user.id
                        }
                    },
                    image: {
                        connect: {
                            id: imageId
                        }
                    }
                },
            })
        }
    })
)