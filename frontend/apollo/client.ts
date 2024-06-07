import {
    ApolloClient, ApolloLink, InMemoryCache, Operation,
    FetchResult,
    Observable, split,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { getMainDefinition } from '@apollo/client/utilities'
import { createUploadLink } from 'apollo-upload-client'
import { print } from 'graphql'
import { createClient, ClientOptions, Client } from 'graphql-sse'

class SSELink extends ApolloLink {
    private client: Client

    constructor(options: ClientOptions) {
        super()
        this.client = createClient(options)
    }

    public request(operation: Operation): Observable<FetchResult> {
        return new Observable((sink) => {
            return this.client.subscribe<FetchResult>(
                { ...operation, query: print(operation.query) },
                {
                    next: sink.next.bind(sink),
                    complete: sink.complete.bind(sink),
                    error: sink.error.bind(sink),
                },
            )
        })
    }
}

const sseLink = new SSELink({
    url: 'http://localhost:4000/graphql',
})

const uploadLink = createUploadLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
}) as unknown as ApolloLink

const getAuthLink = setContext(async (_, { headers }) => {
    const response = await fetch('/auth/token')
    const { accessToken } = await response.json()

    return {
        headers: {
            ...headers,
            ...(accessToken && { Authorization: `Bearer ${ accessToken }` }),
        },
    }
})

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query)
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        )
    },
    sseLink,
    uploadLink
)

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([getAuthLink , splitLink]),
})

export default apolloClient
