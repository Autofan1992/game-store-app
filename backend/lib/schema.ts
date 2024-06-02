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
import '../src/queries/comment/CommentConnection'

// mutations
import '../src/mutations/game/CreateGame'
import '../src/mutations/game/PatchGame'
import '../src/mutations/comment/CreateComment'
import '../src/mutations/comment/PatchComment'
import '../src/mutations/comment/DeleteComment'
import '../src/mutations/resource/UploadResource'

const schema = builder.toSchema({})

export default schema

const schemaAsString = printSchema(lexicographicSortSchema(schema))

writeFileSync('./schema.graphql', schemaAsString)
