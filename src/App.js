import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";
import Modal from "./components/Modal/Modal";
import ModalMessage from "./components/Modal/ModalMessage";
import "./App.css";
import { useState } from "react";

const users = [];

function App() {
  const [usersData, setUsersData] = useState(users);
  const [isModalShowed, setIsModalShowed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getFormDataHandler = function (userData) {
    setUsersData((prevState) => [...prevState, userData]);
  };

  const getModalMessageHandler = function (message) {
    setIsModalShowed(true);
    setErrorMessage(message);
  };

  const closeModalHandler = function (e) {
    if (isModalShowed && (e.code === "Escape" || e.type === "click")) {
      setIsModalShowed(false);
      return;
    }
  };

  return (
    <div onKeyDown={closeModalHandler}>
      {isModalShowed && (
        <Modal onClick={closeModalHandler}>
          <ModalMessage
            errorMessage={errorMessage}
            onCloseModal={closeModalHandler}
          />
        </Modal>
      )}
      <UserForm
        tabIndex={isModalShowed ? -1 : ""}
        onGetFormData={getFormDataHandler}
        onGetModalMessage={getModalMessageHandler}
      />
      {usersData.length > 0 && <UserList users={usersData} />}
    </div>
  );
}

export default App;
