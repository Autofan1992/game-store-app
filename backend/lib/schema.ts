import builder from './builder'

import { lexicographicSortSchema, printSchema } from 'graphql'
import { writeFileSync } from 'fs'

// refs
import '../src/refs/user/User'
import '../src/refs/game/Game'
import '../src/refs/comment/Comment'
import '../src/refs/resource/Resource'

// queries
import '../src/queries/user/Me'
import '../src/queries/game/Game'
import '../src/queries/game/GameConnection'

// mutations
import '../src/mutations/game/CreateGame'

const schema = builder.toSchema({})

export default schema

const schemaAsString = printSchema(lexicographicSortSchema(schema))

writeFileSync('./schema.graphql', schemaAsString)