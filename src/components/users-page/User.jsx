import EditUserContainer from './EditUserContainer';

function User({ user }) {
    return (
        <div className="user-wrapper">
            <div className={`user-container ${user.gender}`} title={user.email}>
                <div className="user-id">{user.id}</div>
                <h1 className="username-heading">{user.username}</h1>
                <EditUserContainer userId={user.id} />
            </div>
        </div>
    );
}

export default User;
