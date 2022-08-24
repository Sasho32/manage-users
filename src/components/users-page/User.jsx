function User({ user }) {
    return (
        <div className="user-wrapper">
            <div className={`user-container ${user.gender}`} title={user.email}>
                <div className="user-id">{user.id}</div>
                <h1 className="username-heading">{user.username}</h1>
            </div>
        </div>
    );
}

export default User;
