import { useState } from 'react';
import { useEffect } from 'react';
import { FadeLoader } from 'react-spinners';
import AddUserForm from '../components/add-user-page/AddUserForm';
import RegisteredUsersHeading from '../components/add-user-page/RegisteredUsersHeading';
import Nav from '../layouts/Nav';

function AddUserPage() {
    document.title = 'Add user';

    const [usersCount, setUsersCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/users/count')
            .then(res => res.json())
            .then(({ count }) => {
                setUsersCount(count);
                setLoading(false);
            })
            .catch(e => console.log('To add error page'));
    }, []);

    return loading ? (
        <FadeLoader />
    ) : (
        <>
            <Nav />
            <AddUserForm />
            <RegisteredUsersHeading usersCount={usersCount} />
        </>
    );
}

export default AddUserPage;
