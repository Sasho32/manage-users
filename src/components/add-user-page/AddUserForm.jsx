import { useState } from 'react';

function AddUserForm() {
    const [user, setUser] = useState({
        email: '',
        username: '',
        password: '',
        gender: null,
    });

    async function handleForm(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: user.email,
                    userName: user.username,
                    password: user.password,
                    gender: user.gender,
                }),
            });

            if (response.status === 400) {
                let { err } = await response.json();
                if (err.includes('Duplicate entry')) {
                    err = err.replace(`Duplicate entry '`, '');
                    err = err.replace(
                        `' for key 'registered_users.username'`,
                        ''
                    );
                    if (err.includes('@')) {
                        alert(
                            `User with email ${user.email} is already registered!`
                        );
                        return;
                    }

                    alert(
                        `User with username ${user.username} is already registered!`
                    );
                    return;
                }

                alert(err);
                return;
            }

            setUser({
                email: '',
                username: '',
                password: '',
                gender: null,
            });

            alert(`User ${user.username} was successfully created!`);
        } catch (e) {
            alert('To add error page');
        }
    }

    return (
        <div id="add-container">
            <h1 id="add-user-heading">Add user</h1>
            <form autoComplete="off" onSubmit={handleForm}>
                <div className="email-field">
                    <input
                        onChange={e =>
                            setUser(prev => ({
                                ...prev,
                                email: e.target.value,
                            }))
                        }
                        type="email"
                        name="email"
                        id="emailField"
                        value={user.email}
                        required
                    />
                    <label>Email</label>
                    <span className="border-span"></span>
                </div>
                <div className="username-field">
                    <input
                        onChange={e =>
                            setUser(prev => ({
                                ...prev,
                                username: e.target.value,
                            }))
                        }
                        type="text"
                        name="username"
                        id="usernameField"
                        value={user.username}
                        required
                    />
                    <label>Username</label>
                    <span className="border-span"></span>
                </div>
                <div className="password-field">
                    <input
                        onChange={e =>
                            setUser(prev => ({
                                ...prev,
                                password: e.target.value,
                            }))
                        }
                        type="password"
                        name="password"
                        id="passwordField"
                        value={user.password}
                        required
                    />
                    <label>Password</label>
                    <span className="border-span"></span>
                </div>
                <div className="gender">
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        required
                        onChange={e =>
                            setUser(prev => ({
                                ...prev,
                                gender: e.target.value,
                            }))
                        }
                        checked={user.gender === 'male'}
                    />
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        required
                        onChange={e =>
                            setUser(prev => ({
                                ...prev,
                                gender: e.target.value,
                            }))
                        }
                        checked={user.gender === 'female'}
                    />
                    Female
                </div>
                <button id="add-btn">Create</button>
            </form>
        </div>
    );
}

export default AddUserForm;
