import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react'
import { CustomToast } from '../components/ui/CustomToast/CustomToast'
import CartOffCanvas from '../components/ui/CartOffCanvas/CartOffCanvas'

type AppContextType = {
    appWindowWidth: number
    toastShowHandle: (message: string) => void
}

const AppContext = createContext({} as AppContextType)

export const useAppContext = () => useContext(AppContext)

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [appWindowWidth, setAppWindowWidth] = useState(window.innerWidth)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState<string | null>(null)

    useEffect(() => {
        const handleResize = () => setAppWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toastShowHandle = (message: string) => {
        setShowToast(true)
        setToastMessage(message)
    }

    const toastCloseHandle = () => {
        setShowToast(false)
        setTimeout(() => setToastMessage(null), 500)
    }

    return (
        <AppContext.Provider
            value={{
                toastShowHandle,
                appWindowWidth
            }}
        >
            {children}
            <CartOffCanvas/>
            <CustomToast show={showToast} setShow={toastCloseHandle} message={toastMessage}/>
        </AppContext.Provider>

    )
}