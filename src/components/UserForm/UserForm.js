import InputItem from "./InputItem";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./UserForm.module.css";
import React, { useRef } from "react";

function UserForm(props) {
  //Instead of Ref, why do not use State?
  //In this case, we only want to get input's values then pass then to App.js.
  //this action is read-only and doesn't relate to re-rendering, so we use Ref instead of state.
  const refInputUsername = useRef();
  const refInputAge = useRef();

  const submitHandler = function (e) {
    e.preventDefault();
    const enteredUsername = refInputUsername.current.value;
    const enteredAge = +refInputAge.current.value;

    if (enteredUsername.trim().length && enteredAge > 0) {
      const userData = {
        username: enteredUsername,
        age: enteredAge,
        id: Math.random(),
      };
      props.onGetFormData(userData);
      refInputUsername.current.value = "";
      refInputAge.current.value = "";
      refInputUsername.current.focus();
      return;
    }

    submitErrorChecker(enteredUsername, enteredAge);
  };

  const submitErrorChecker = function (username, age) {
    let errorMessage = "";

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
        {/* In general, ref cannot be used in Customized Component, in order to make it work, we must apply "forwardRef" on the component ref attatched. */}
        <InputItem
          labelName="Username"
          id="username"
          inputType="text"
          tabIndex={props.tabIndex}
          ref={refInputUsername}
        />
        <InputItem
          labelName="Age (Years)"
          id="age"
          inputType="number"
          tabIndex={props.tabIndex}
          ref={refInputAge}
        />
        <Button btnText="Add User" type="submit" tabIndex={props.tabIndex} />
      </form>
    </Card>
  );
}

export default UserForm;
