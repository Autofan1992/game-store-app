'use client'
import './index.scss'
import { PropsWithChildren } from 'react'

import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { Provider } from 'react-redux'

import apolloClient from '../apollo/client'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { AppContextProvider } from '../context/appContext'
import store from '../redux/store'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <html lang='en'>
            <body suppressHydrationWarning={true}>
                <ApolloProvider client={ apolloClient }>
                    <Provider store={ store }>
                        <AppContextProvider>
                            <UserProvider>
                                <div className='app-wrapper text-white full-screen'>
                                    <Header />
                                    <main className='app-content'>{ children }</main>
                                    <Footer />
                                </div>
                            </UserProvider>
                        </AppContextProvider>
                    </Provider>
                </ApolloProvider>
            </body>
        </html>
    )
}
