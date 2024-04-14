import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { createUploadLink } from 'apollo-upload-client'

const getAuthLink = setContext(async (_, { headers }) => {
    const response = await fetch('http://localhost:3000/api/auth/token')
    const { accessToken } = await response.json()

    return {
        headers: {
            ...headers,
            ...(accessToken && { Authorization: `Bearer ${ accessToken }` }),
        },
    }
})

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([getAuthLink, createUploadLink({
        uri: process.env.NEXT_PUBLIC_API_URL,
    }) as unknown as ApolloLink]),
    ssrMode: true,
})

export default apolloClient
