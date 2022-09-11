import InputItem from "./InputItem";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./UserForm.module.css";
import { useState } from "react";

function UserForm(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState();

  const getUserHandler = function (e) {
    setEnteredUsername(e.target.value);
  };
  const getAgeHandler = function (e) {
    setEnteredAge(+e.target.value);
  };

  const submitHandler = function (e) {
    e.preventDefault();

    if (enteredUsername.trim().length && enteredAge > 0) {
      const userData = {
        username: enteredUsername,
        age: +enteredAge,
        id: Math.random(),
      };
      props.onGetFormData(userData);
      setEnteredUsername("");
      setEnteredAge("");
      return;
    }

    submitErrorChecker(enteredUsername, enteredAge);
  };

  const submitErrorChecker = function (username, age) {
    let errorMessage = "";
    console.log(age);

    if (!username.trim().length || !age) {
      errorMessage = `Please enter valid username and age (non-empty values required)`;
    } else if (typeof age !== "number" || age < 0) {
      errorMessage = `Please enter valid age (age > 0)`;
    }
    props.onGetModalMessage(errorMessage);
  };

  return (
    <Card className="margin-buttom-m">
      <form
        className={`${styles["user-form"]} ${props.className}`}
        onSubmit={submitHandler}
      >
        <InputItem
          labelName="Username"
          id="username"
          inputType="text"
          value={enteredUsername}
          onGetInput={getUserHandler}
          tabIndex={props.tabIndex}
        />
        <InputItem
          labelName="Age (Years)"
          id="age"
          inputType="number"
          value={enteredAge}
          onGetInput={getAgeHandler}
          tabIndex={props.tabIndex}
        />
        <Button btnText="Add User" type="submit" tabIndex={props.tabIndex} />
      </form>
    </Card>
  );
}

export default UserForm;
