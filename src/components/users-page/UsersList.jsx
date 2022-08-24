import { createContext, useState } from 'react';
import User from './User';

export const ActiveEditContainer = createContext();

function UsersList({ usersList }) {
    const [activeEditContainer, setActiveEditContainer] = useState(-1);

    return usersList.length ? (
        <ActiveEditContainer.Provider
            value={{
                activeEditContainer,
                setActiveEditContainer,
            }}
        >
            <div id="wrapper">
                {usersList.map(user => (
                    <User key={user.id} user={user} />
                ))}
            </div>
        </ActiveEditContainer.Provider>
    ) : (
        <h1 id="no-users-heading">No users presented... :/</h1>
    );
}

export default UsersList;
