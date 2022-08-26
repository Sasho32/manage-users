import { Link } from 'react-router-dom';

function ErrorPage({ error }) {
    document.title = 'Error';

    return (
        <div className="error-container">
            <h1>{error}</h1>
            <Link to="/">Try again...</Link>
        </div>
    );
}

export default ErrorPage;
