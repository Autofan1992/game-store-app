import React from 'react'

import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import { Button } from 'react-bootstrap'

export default function BackButton() {
    const { back } = useRouter()

    return (
        <Button onClick={back}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </Button>
    )
}
