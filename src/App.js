import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUserPage from './pages/AddUserPage';
import UsersPage from './pages/UsersPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AddUserPage />} />
                <Route path="/users" element={<UsersPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
