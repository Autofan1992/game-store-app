import { PropsWithChildren } from 'react'

import { ApolloProvider } from '@apollo/client'
import { Provider } from 'react-redux'

import apolloClient from '../../apollo/link'
import { AppContextProvider } from '../../context/appContext'
import store from '../../redux/store'
import AuthContextProvider from '../AuthContextProvider/AuthContextProvider'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Layout({ children }: PropsWithChildren) {
    return (
        <ApolloProvider client={apolloClient}>
            <Provider store={store}>
                <AuthContextProvider>
                    <AppContextProvider>
                        <div className='app-wrapper text-white full-screen'>
                            <Header />
                            <main className='app-content'>{children}</main>
                            <Footer />
                        </div>
                    </AppContextProvider>
                </AuthContextProvider>
            </Provider>
        </ApolloProvider>
    )
}
