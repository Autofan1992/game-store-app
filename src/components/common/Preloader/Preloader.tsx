import styles from './Preloader.module.scss'
import { Spinner } from 'react-bootstrap'

const Preloader = () => {
    return <div className={styles.preloader}>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
}

export default Preloader

