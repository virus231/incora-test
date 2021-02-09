import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <div className="mb-5 mt-2">
            <Link to="/users">
                Users
            </Link>
        </div>
    )
}