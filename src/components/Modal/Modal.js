import styles from "./Modal.module.css";

function Modal(props) {
  return (
    <div className={styles["modal-container"]} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default Modal;
