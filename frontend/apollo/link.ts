import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: createUploadLink({
        uri: process.env.NEXT_PUBLIC_API_URL,
    }) as unknown as ApolloLink,
    ssrMode: true
})

export default apolloClient
