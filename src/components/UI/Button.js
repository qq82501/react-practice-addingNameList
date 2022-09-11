import styles from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={`${styles.btn} ${props.className}`}
      type={props.type}
      onClick={props.onClick}
      tabIndex={props.tabIndex}
    >
      {props.btnText}
    </button>
  );
}

export default Button;
