import builder from './builder'

import { lexicographicSortSchema, printSchema } from 'graphql'
import { writeFileSync } from 'fs'

// refs
import '../src/refs'

// queries
import '../src/queries'

// mutations
import '../src/mutations'

// subscriptions
import '../src/subscriptions'

const schema = builder.toSchema({})

export default schema

const schemaAsString = printSchema(lexicographicSortSchema(schema))

writeFileSync('./schema.graphql', schemaAsString)
