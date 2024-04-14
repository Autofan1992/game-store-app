import { createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import schema from './lib/schema'
import { createContext } from './src/context/context'

const yoga = createYoga({
    schema: schema,
    context: createContext,
    graphqlEndpoint: '/graphql',
    graphiql: {
        headers: JSON.stringify({ Authorization: 'Bearer ' })
    }
})

const server = createServer(yoga)

server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
})
