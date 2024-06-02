'use client'
import { useEffect } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'
import { Container, Spinner } from 'react-bootstrap'

import { useAppContext } from '../context/appContext'
import useGetGamesForHomePage from '../features/games/api-hooks/useGetGamesForHomePage'
import GameItem from '../features/games/components/GameItem/GameItem'

export default function Home() {
    const [games, { loading }] = useGetGamesForHomePage()
    const { toastShowHandle } = useAppContext()
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        const isPaymentSuccess = searchParams.get('success')
        const isPaymentCanceled = searchParams.get('canceled')

        if (isPaymentSuccess === 'true') router.push('/thanks')
        if (isPaymentCanceled === 'true') {
            toastShowHandle('The payment was cancelled')
        }
    }, [router, searchParams, toastShowHandle])

    return (
        <Container className='py-5'>
            <h1 className='text-center mb-5'>Home</h1>
            <div className='row justify-content-center'>
                <div className='col-lg-9'>
                    <div className='cards-row rounded-styled-block'>
                        <div className='row-title text-white'>
                            <h3>New Games</h3>
                            <hr/>
                        </div>
                        <div className='row justify-content-center g-3'>
                            { loading ? (
                                <Spinner/>
                            ) : <>{ games.map((game) => {
                                const shortDescription = `${ game.description.substring(0, 100) }...`

                                return (
                                    <div className='col-md-6 col-lg-4 text-black' key={ game.id }>
                                        <GameItem
                                            { ...game }
                                            description={ shortDescription }
                                            isGamesPage
                                        />
                                    </div>
                                )
                            }) }</> }
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
