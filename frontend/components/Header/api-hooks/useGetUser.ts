import { useUser } from '@auth0/nextjs-auth0/client'

import { useMeForAppQuery } from '../../../graphql/queries/meForApp.generated'

const useGetUser = () => {
    const { user } = useUser()

    return useMeForAppQuery({ skip: !user })
}

export default useGetUser