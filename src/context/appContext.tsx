import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react'

type AppContextType = {
    appWindowWidth: number
}

const AppContext = createContext({} as AppContextType)

export const useAppContext = () => useContext(AppContext)

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [appWindowWidth, setAppWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setAppWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <AppContext.Provider
            value={{
                appWindowWidth
            }}
        >
            {children}
        </AppContext.Provider>

    )
}