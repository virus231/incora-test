import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/posts";


export const User = ({ id, name, email }) => {
    const dispatch = useDispatch();

    const PostUser = (id) => {
        dispatch(fetchPosts(id))
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                <Link onClick={() => PostUser(id)} className="link-posts" to={`posts/${id}`}>
                    Posts
                </Link>
            </td>
        </tr>
    )
}