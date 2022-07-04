import { FC } from 'react'
import styles from './NotFound.module.scss'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
    return (
        <div className={`${styles.notFound} d-flex flex-column justify-content-center align-items-center`}>
            <h1 className="mb-5">There's nothing here!</h1>
            <Link to={'/'}>Back to home page</Link>
        </div>
    )
}

export default NotFound