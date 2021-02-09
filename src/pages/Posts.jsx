import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/posts";
import Table from 'react-bootstrap/Table'
import {Post} from '../components/Post'
import Spinner from 'react-bootstrap/Spinner'

export const Posts = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ posts }) => posts.posts);
    const isLoaded = useSelector(({ posts }) => posts.isLoaded);

    useEffect(() => {
        dispatch(fetchPosts());

    }, []);

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoaded ? items.map((obj) => <Post key={obj.id} {...obj} />) : (
                        <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                        </Spinner>
                    )}
                </tbody>
            </Table>
        </div>
    )
}