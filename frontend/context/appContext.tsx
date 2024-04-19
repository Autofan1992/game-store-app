import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react'

import { CustomToast } from '../components/CustomToast/CustomToast'
import CartOffCanvas from '../features/cart/components/CartOffCanvas/CartOffCanvas'

type AppContextType = {
    appWindowWidth: number
    toastShowHandle: (message: string) => void
}

const AppContext = createContext<AppContextType | null>(null)

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error('something went wrong with App Context')
    }

    return context
}

export const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [appWindowWidth, setAppWindowWidth] = useState(0)
    const [showToast, setShowToast] = useState(false)
    const [toastMessage, setToastMessage] = useState<string | null>(null)

    useEffect(() => {
        const handleResize = () => setAppWindowWidth(window?.innerWidth)

        handleResize()

        window?.addEventListener('resize', handleResize)
        return () => window?.removeEventListener('resize', handleResize)
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
                appWindowWidth,
            }}
        >
            {children}
            <CartOffCanvas />
            <CustomToast message={toastMessage} setShow={toastCloseHandle} show={showToast} />
        </AppContext.Provider>
    )
}
