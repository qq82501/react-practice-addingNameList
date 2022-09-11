import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./ModalMessage.module.css";

function ModalMessage(props) {
  return (
    <Card className={styles.card__modal}>
      <div className={styles["modal-message__title"]}>Invalid Input</div>
      <div className={styles["modal-message__content"]}>
        {props.errorMessage}
      </div>
      <Button
        className={styles.btn__modal}
        btnText="Okay"
        type="button"
        onClick={props.onCloseModal}
      />
    </Card>
  );
}

export default ModalMessage;
