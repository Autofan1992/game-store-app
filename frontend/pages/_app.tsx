import { AppProps } from 'next/app'

import './index.scss'
import Layout from '../components/Layout/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
