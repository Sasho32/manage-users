import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUserPage from './pages/AddUserPage';
import UsersPage from './pages/UsersPage';
import ErrorPage from './pages/ErrorPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AddUserPage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route
                    path="error"
                    element={
                        <ErrorPage error="OOOPS! Something went wrong..." />
                    }
                />
                <Route
                    path="*"
                    element={<ErrorPage error="404 page not found" />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
