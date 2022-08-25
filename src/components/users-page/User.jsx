import { useState, useContext } from 'react';
import { ActiveEditContainer } from './UsersList';
import EditUserContainer from './EditUserContainer';

function User({ user }) {
    const { activeEditContainer } = useContext(ActiveEditContainer);

    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(user.username);

    return (
        <div className="user-wrapper">
            <div className={`user-container ${user.gender}`} title={user.email}>
                <div className="user-id">{user.id}</div>
                {activeEditContainer === user.id && isEditing ? (
                    <input
                        onChange={e => {
                            return setNewName(e.target.value);
                        }}
                        type="text"
                        value={newName}
                    />
                ) : (
                    <h1 className="username-heading">{user.username}</h1>
                )}
                <EditUserContainer
                    userId={user.id}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    newName={newName}
                    setInputCurrentName={() => setNewName(user.username)}
                />
            </div>
        </div>
    );
}

export default User;
