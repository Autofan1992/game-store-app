import { PropsWithChildren, useState } from 'react'

import { DefaultContext } from '@apollo/client'

import { AuthContext } from '../../context/authContext'

const AuthContextProvider = ({ children }: PropsWithChildren) => {
    const [context, setContext] = useState<DefaultContext | undefined>()

    return (
        <AuthContext.Provider
            value={{
                context,
                setContext
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
