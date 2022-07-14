import { FC, Suspense } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Preloader from '../Preloader/Preloader'
import NotFoundPage from '../../../pages/404/NotFoundPage'
import HomePage from '../../../pages/HomePage/HomePage'
import GamesPage from '../../../pages/GamesPage/GamesPage'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AboutPage from '../../../pages/AboutPage/AboutPage'
import CartOffCanvas from '../CartOffCanvas/CartOffCanvas'
import GamePage from '../../../pages/GamePage/GamePage'

const App: FC = () => {
    return (
        <>
            <div className="app-wrapper text-white full-screen">
                <Header/>
                <main className="app-content">
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/" element={<HomePage/>}/>
                            <Route path="games" element={<GamesPage/>}/>
                            <Route path="games/:id" element={<GamePage/>}/>
                            <Route path="about" element={<AboutPage/>}/>
                            <Route path="*" element={<NotFoundPage/>}/>
                        </Routes>
                    </Suspense>
                </main>
                <Footer/>
            </div>
            <CartOffCanvas/>
        </>
    )
}

export default App
