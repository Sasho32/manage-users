import { useContext } from 'react';
import { ActiveEditContainer } from './UsersList';
import edit from '../../imgs/edit.png';

function EditUserContainer({ userId }) {
    const { activeEditContainer, setActiveEditContainer } =
        useContext(ActiveEditContainer);

    function handleEditImgClick() {
        // при затваряне на edit контейнъра
        if (activeEditContainer === userId) {
            setActiveEditContainer(-1);
            return;
        }

        // при отваряне на edit контейнъра
        setActiveEditContainer(userId);
    }

    return (
        <div
            className={`edit-container ${
                activeEditContainer === userId ? 'active' : ''
            }`}
        >
            <img onClick={handleEditImgClick} src={edit} alt="More" />
            <div className="edit-button">Edit</div>
            <div className="delete-button">Delete</div>
        </div>
    );
}

export default EditUserContainer;
