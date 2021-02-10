import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../redux/actions/comments";


export const Post = ({userId, title, body}) => {
    const dispatch = useDispatch();

    const handleDetails = (userId) => {
        dispatch(fetchComments(userId))
    }



    return (
        <tr>
            <td>{userId}</td>
            <td>{title}</td>
            <td>{body}</td>
            <td>
                <Link onClick={() => handleDetails(userId)} to={`/details-post/${userId}`}>
                    Details
                </Link>
            </td>
        </tr>
    )
}