import styles from "./InputItem.module.css";
import React from "react";

//To use ref passed from it's parent component, we should use "React.forwardRef"

const InputItem = React.forwardRef((props, ref) => {
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
        ref={ref}
      />
    </div>
  );
});

// function InputItem(props) {
//   return (
//     <div className={styles["input-item"]}>
//       <label className={styles["input-item__label"]} htmlFor={props.id}>
//         {props.labelName}
//       </label>
//       <input
//         id={props.id}
//         className={styles["input-item__input"]}
//         type={props.inputType}
//         value={props.value}
//         onChange={props.onGetInput}
//         tabIndex={props.tabIndex}
//       />
//     </div>
//   );
// }

export default InputItem;
