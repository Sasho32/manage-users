import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUserPage from './pages/AddUserPage';
import UsersPage from './pages/UsersPage';
import ErrorPage from './pages/ErrorPage';
import { createContext } from 'react';
import { useState } from 'react';
import Modal from './components/Modal';

export const ModalContext = createContext();

function App() {
    const [openedModal, setOpenedModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    return (
        <>
            <ModalContext.Provider
                value={{
                    openedModal,
                    modalMessage,
                    openModalWithMessage: message => {
                        setModalMessage(message);
                        setOpenedModal(true);
                    },
                }}
            >
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
            </ModalContext.Provider>

            {openedModal && (
                <Modal
                    modalMessage={modalMessage}
                    closeModal={() => {
                        setModalMessage('');
                        setOpenedModal(false);
                    }}
                />
            )}
        </>
    );
}

export default App;
