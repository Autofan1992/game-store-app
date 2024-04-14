import SchemaBuilder from '@pothos/core'
import { DateResolver } from 'graphql-scalars'
import PrismaPlugin from '@pothos/plugin-prisma'
import type PrismaTypes from '@pothos/plugin-prisma/generated'
import prisma from './prisma'
import { createContext } from '../src/context/context'

export const builder = new SchemaBuilder<{
    Scalars: {
        Date: { Input: Date; Output: Date }
        File: {
            Input: File
            Output: never
        }
    }
    Context: ReturnType<typeof createContext>
    PrismaTypes: PrismaTypes
}>({ plugins: [PrismaPlugin], prisma: { client: prisma } })

builder.queryType({})
builder.mutationType({})

builder.addScalarType('Date', DateResolver)
builder.scalarType('File', {
    serialize: (value) => value
})

export default builder
