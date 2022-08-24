import { useState, useEffect } from 'react';
import { FadeLoader } from 'react-spinners';
import Nav from '../layouts/Nav';
import UsersList from '../components/users-page/UsersList';

function UsersPage() {
    document.title = 'Users';

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/users/')
            .then(res => res.json())
            .then(({ userList }) => {
                setUsers(userList);
                setLoading(false);
            })
            .catch(e => alert('to add error page'));
    }, []);

    return loading ? (
        <FadeLoader />
    ) : (
        <>
            <Nav />
            <UsersList usersList={users} />
        </>
    );
}

export default UsersPage;
