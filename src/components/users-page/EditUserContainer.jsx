import { useContext } from 'react';
import { ActiveEditContainer } from './UsersList';
import edit from '../../imgs/edit.png';
import { UpdateUsersContext } from '../../pages/UsersPage';
import { useNavigate } from 'react-router-dom';

function EditUserContainer({
    userId,
    isEditing,
    setIsEditing,
    newName,
    setInputCurrentName,
}) {
    const navigate = useNavigate();

    const { setUpdateUsers } = useContext(UpdateUsersContext);

    const { activeEditContainer, setActiveEditContainer } =
        useContext(ActiveEditContainer);

    function handleEditImgClick() {
        // при затваряне на edit контейнъра
        if (activeEditContainer === userId) {
            setActiveEditContainer(-1);
            return;
        }

        // при отваряне на edit контейнъра
        setIsEditing(false);
        setActiveEditContainer(userId);
    }

    async function handleEditButton() {
        try {
            //при Confirm
            if (isEditing) {
                const response = await fetch(
                    `http://localhost:3001/users/${userId}`,
                    {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ newUserName: newName }),
                    }
                );

                if (response.status === 400) {
                    const { err } = await response.json();
                    alert(err);
                    return;
                }

                setIsEditing(false);
                setUpdateUsers(prev => ++prev);
                return;
            }

            // при Edit
            setIsEditing(true);
            setInputCurrentName();
        } catch (e) {
            navigate('/error');
        }
    }

    async function handleDeleteButton() {
        try {
            await fetch(`http://localhost:3001/users/${userId}`, {
                method: 'DELETE',
            });

            setUpdateUsers(prev => ++prev);
        } catch (e) {
            navigate('/error');
        }
    }

    return (
        <div
            className={`edit-container ${
                activeEditContainer === userId ? 'active' : ''
            }`}
        >
            <img onClick={handleEditImgClick} src={edit} alt="More" />
            <div onClick={handleEditButton} className="edit-button">
                {activeEditContainer === userId && isEditing
                    ? 'Confirm'
                    : 'Edit'}
            </div>
            <div onClick={handleDeleteButton} className="delete-button">
                Delete
            </div>
        </div>
    );
}

export default EditUserContainer;
