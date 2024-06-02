import { Image } from 'react-bootstrap'

import { getUserInitials } from '../../utils/userInitials.utils'

import styles from './Avatar.module.scss'

interface IAvatarProps {
    fullName?: string
    src?: string | null
}

export default function Avatar({ fullName, src }: IAvatarProps) {
    if (!src) {
        return (
            <div className={`${styles.avatar} ${styles.withBg}`}>{fullName ? getUserInitials(fullName) : 'N/A'}</div>
        )
    }
    return <Image alt='author avatar' className={styles.avatar} src={src} />
}
