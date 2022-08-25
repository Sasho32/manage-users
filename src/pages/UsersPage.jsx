import UsersList from '../components/users-page/UsersList';
import { useState, useEffect } from 'react';
import { FadeLoader } from 'react-spinners';
import Nav from '../layouts/Nav';
import { createContext } from 'react';

export const UpdateUsersContext = createContext();

function UsersPage() {
    document.title = 'Users';

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const [updateUsers, setUpdateUsers] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3001/users/')
            .then(res => res.json())
            .then(({ userList }) => {
                setUsers(userList);
                setLoading(false);
            })
            .catch(e => alert('to add error page'));
    }, [updateUsers]);

    return loading ? (
        <FadeLoader />
    ) : (
        <>
            <Nav />
            <UpdateUsersContext.Provider
                value={{
                    setUpdateUsers,
                }}
            >
                <UsersList usersList={users} />
            </UpdateUsersContext.Provider>
        </>
    );
}

export default UsersPage;
