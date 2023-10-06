import classes from './Modal.module.css';

function Modal({children, onClose}) {
console.log(children);

    return (
        <>
            <div className={classes.backdrop} onClick={onClose}/>
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );
}

export default Modal;