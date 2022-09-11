import styles from "./InputItem.module.css";

function InputItem(props) {
  return (
    <div className={styles["input-item"]}>
      <label className={styles["input-item__label"]} htmlFor={props.id}>
        {props.labelName}
      </label>
      <input
        id={props.id}
        className={styles["input-item__input"]}
        type={props.inputType}
        value={props.value}
        onChange={props.onGetInput}
        tabIndex={props.tabIndex}
      />
    </div>
  );
}

export default InputItem;
