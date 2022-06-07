import { FC, Suspense } from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Preloader from '../common/Preloader/Preloader'
import NotFound from '../common/404/NotFound'
import Home from '../../pages/Home/Home'
import Games from '../../pages/Games/Games'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import About from '../../pages/About/About'

const App: FC = () => {
    return (
        <div className="app-wrapper text-white full-screen">
            <Header/>
            <main className="app-content">
                <Suspense fallback={<Preloader/>}>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/games" element={<Games/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </Suspense>
            </main>
            <Footer/>
        </div>
    )
}

export default App
