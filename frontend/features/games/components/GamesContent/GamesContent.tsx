'use client'
import { useEffect, useState } from 'react'

import { Button, Collapse, Container } from 'react-bootstrap'

import Preloader from '../../../../components/Preloader/Preloader'
import { useAppContext } from '../../../../context/appContext'
import useGetGamesForGamesPage from '../../api-hooks/useGetGamesForGamesPage'
import FilterGamesForm from '../FilterGamesForm/FilterGamesForm'
import GameItem from '../GameItem/GameItem'
import SearchGamesForm from '../SearchGamesForm/SearchGamesForm'

export default function GamesContent() {
    const { games, loading, fetchMore, hasMore  } = useGetGamesForGamesPage()
    const { appWindowWidth } = useAppContext()
    const [open, setOpen] = useState(true)

    useEffect(() => {
        if (appWindowWidth > 991) setOpen(true)
        if (appWindowWidth < 992) setOpen(false)
    }, [appWindowWidth])

    return (
        <Container className='py-5'>
            <h1 className='text-center mb-5'>Games</h1>
            <SearchGamesForm/>
            <div className='row justify-content-center'>
                <div className='col-lg-3 mb-3 mb-lg-0'>
                    <div className='filter-form rounded-styled-block'>
                        <div className='form-title'>
                            { appWindowWidth < 992 && (
                                <Button
                                    aria-expanded={ open }
                                    className='w-100 mb-3'
                                    onClick={ () => setOpen(!open) }
                                >
                                    Show games filters
                                </Button>
                            ) }
                            <Collapse in={ open }>
                                <div>
                                    <h3>Filter Games</h3>
                                    <hr/>
                                    <FilterGamesForm/>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>
                <div className='col-lg-9'>
                    <div className='cards-row rounded-styled-block h-100'>
                        { games.length > 0 ? (
                            <div className='row g-3'>
                                { games
                                    .map((game) => {
                                        const shortDescription = `${ game.description.substring(
                                            0,
                                            100,
                                        ) }...`

                                        return (
                                            <div
                                                className='col-md-6 col-xl-4 text-black'
                                                key={ game.id }
                                            >
                                                <GameItem
                                                    { ...game }
                                                    description={ shortDescription }
                                                    isGamesPage
                                                />
                                            </div>
                                        )
                                    }) }
                            </div>
                        ) : (
                            <div className='h-100 d-flex justify-content-center align-items-center position-relative'>
                                { loading ? <Preloader/> : <h2 className='fw-bold'>
                                    Nothing found. Try change search criteria
                                </h2> }
                            </div>
                        ) }
                        { hasMore && (
                            <div className='mt-3 text-center'>
                                <Button variant='outline-primary' onClick={ fetchMore }>
                                    Show more
                                </Button>
                            </div>
                        ) }
                    </div>
                </div>
            </div>
        </Container>
    )
}
