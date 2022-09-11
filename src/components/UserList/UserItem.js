import styles from "./UserItem.module.css";

function UserItem(props) {
  console.log(props);
  return (
    <div className={styles["user-item"]}>
      <span>{props.username}</span>
      <span>{`(${props.age} years old)`}</span>
    </div>
  );
}

export default UserItem;
