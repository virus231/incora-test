import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../components/User";
import { fetchUsers } from "../redux/actions/users";
import Table from 'react-bootstrap/Table'
import Spinner from 'react-bootstrap/Spinner'

export const Users = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ users }) => users.users);
    const isLoaded = useSelector(({ users }) => users.isLoaded);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div>
            <h3>Users</h3>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((obj) => <User key={obj.id} {...obj} />)
                    }
                </tbody>
                
            </Table>
            
        </div>
    );
};
