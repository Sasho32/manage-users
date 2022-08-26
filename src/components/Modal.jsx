function Modal({ modalMessage, closeModal }) {
    const params = {
        className: '',
        heading: 'Standards violation',
    };

    // ако е извън функцията при 1 успешно създаване влиза в долния if и после няма кой да ресетне обекта, оставяйки го перманентно зелен с Welcome

    if (modalMessage.includes('was successfully created!')) {
        params.className = 'successful';
        params.heading = 'Welcome!';
    }

    return (
        <div className="modal-background">
            <div className={`modal-container ${params.className}`}>
                <div onClick={closeModal} className="closing-x">
                    &times;
                </div>
                <h1>{params.heading}</h1>
                <p>{modalMessage}</p>
            </div>
        </div>
    );
}

export default Modal;
