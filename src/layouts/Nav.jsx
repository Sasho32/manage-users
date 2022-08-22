import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const linkTo = useLocation().pathname === '/' ? '/users' : '/';

    return (
        <nav id="nav-bar">
            <h1>USERS LIST</h1>
            <Link to={linkTo}>{linkTo === '/' ? 'Add user' : 'Users'}</Link>
        </nav>
    );
}

export default Nav;
