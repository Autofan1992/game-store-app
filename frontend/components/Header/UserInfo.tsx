import Image from 'next/image'
import Link from 'next/link'
import { Spinner } from 'react-bootstrap'

import useGetUser from './api-hooks/useGetUser'

const UserInfo = () => {
    const { data, loading } = useGetUser()
    const user = data?.me

    if (loading) return <Spinner className='ms-auto mx-3' />

    return (
        user ? (
            <div className='flex items-center space-x-5 ms-auto'>
                <div className='mx-3'>
                    <p className='text-white mb-0'>{ user.email }</p>
                    <Link
                        className='inline-flex items-center bg-gray-100 border-0 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0'
                        href='/api/auth/logout'
                        onClick={ () => sessionStorage.clear() }
                    >
                        Logout
                    </Link>
                </div>
                { user.avatar && (
                    <Image
                        alt='profile'
                        className='rounded-full w-12 h-12'
                        src={ user.avatar }
                    />
                ) }
            </div>
        ) : (
            <Link
                className='inline-flex ms-auto items-center bg-gray-100 border-0 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0'
                href='/api/auth/login'
            >
                Login
            </Link>
        )
    )
}

export default UserInfo