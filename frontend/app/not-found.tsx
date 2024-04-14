import { FC } from 'react'

import Link from 'next/link'

import styles from './NotFoundPage.module.scss'

const NotFound: FC = () => {
    return (
        <div
            className={`${styles.notFound} d-flex flex-column justify-content-center align-items-center`}
        >
            <h1 className='mb-5'>There&rsquo;s nothing here!</h1>
            <Link href={'/'}>Back to home page</Link>
        </div>
    )
}

export default NotFound
