import User from './User';

function UsersList({ usersList }) {
    return usersList.length ? (
        <div id="wrapper">
            {usersList.map(user => (
                <User key={user.id} user={user} />
            ))}
        </div>
    ) : (
        <h1 id="no-users-heading">No users presented... :/</h1>
    );
}

export default UsersList;
