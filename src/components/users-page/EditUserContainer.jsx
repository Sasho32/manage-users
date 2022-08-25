import { useContext } from 'react';
import { ActiveEditContainer } from './UsersList';
import edit from '../../imgs/edit.png';

function EditUserContainer({
    userId,
    isEditing,
    setIsEditing,
    newName,
    setInputCurrentName,
}) {
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
                return;
            }

            // при Edit
            setIsEditing(true);
            setInputCurrentName();
        } catch (e) {
            alert('to add error page');
        }
    }

    async function handleDeleteButton() {
        try {
            await fetch(`http://localhost:3001/users/${userId}`, {
                method: 'DELETE',
            });
        } catch (e) {
            alert('to add error page');
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
