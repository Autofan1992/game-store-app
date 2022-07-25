import { Link } from 'react-router-dom'

export const ThanksPage = () => {
    return (
        <div className="text-center">
            <h1 className="mb-4">
                Thank you!
            </h1>
            <h3>
                <span className="me-2">The payment was successful. Hope to see you soon in our store!</span><br/>
                <Link to={'/'}>Go to home page</Link>
            </h3>
        </div>
    )
}