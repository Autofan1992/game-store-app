import { Image } from 'react-bootstrap'

import { getUserInitials } from '../../utils/userInitials.utils'

import styles from './Avatar.module.scss'

interface IAvatarProps {
    fullName: string
    src?: string
}

export default function Avatar({ fullName, src }: IAvatarProps) {
    if (!src) {
        return (
            <div className={`${styles.avatar} ${styles.withBg}`}>{getUserInitials(fullName)}</div>
        )
    }
    return <Image alt='author avatar' className={styles.avatar} src={src} />
}
