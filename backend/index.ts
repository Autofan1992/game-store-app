import { createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import schema from './lib/schema'
import { createContext } from './src/context/context'
import { readFile } from 'fs'

const yoga = createYoga({
    schema: schema,
    context: createContext,
    graphqlEndpoint: '/graphql'
})

const server = createServer((req, res) => {
    const startsWith = (value: string) => req.url?.startsWith(value)

    switch (true) {
        case startsWith('/graphql'):
            return yoga(req, res)

        case startsWith('/about'): {
            return readFile('./about.html', (err, data) => {
                if (err) {
                    res.writeHead(500, err.message)
                } else if (data) {
                    res.write(data)
                }

                res.end()
            })
        }

        default:
            return yoga(req, res)
    }
})

const port = process.env.API_PORT ?? 4000

server.listen(port, () => {
    console.info(`Server is running on http://localhost:${port}`)
})
