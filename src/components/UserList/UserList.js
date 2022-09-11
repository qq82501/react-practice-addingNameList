import Card from "../UI/Card";
import UserItem from "./UserItem";
import styles from "./UserList.module.css";

function UserList(props) {
  const { users } = props;
  return (
    <Card>
      <ul className={styles["user-list"]}>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <UserItem username={user.username} age={user.age} />
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default UserList;
