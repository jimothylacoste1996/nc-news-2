import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../Contexts/Login";
import { getUsers } from "../api";

export default function LoginButton(props) {
  const { loggedInUser, setLoggedInUser } = useContext(LoginContext);
  const [usersList, setUsersList] = useState([]);

  const handleLoginClick = () => {
    getUsers().then((res) => {
      setUsersList(res);
    });
  };

  const selectUser = (user) => {
    setLoggedInUser(user);
  };

  return (
    <div>
      {!loggedInUser ? (
        <>
          <div className="dropdown">
            <button
              id="my-custom-btn"
              className={props.instructions}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={handleLoginClick}
            >
              Login
            </button>
            <ul className="dropdown-menu">
              {usersList.map((user) => (
                <li key={user} onClick={() => selectUser(user)}>
                  <a className="dropdown-item" href="#">
                    {user}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <p id="logged-in-text">Welcome, {loggedInUser}!</p>
          <button id="logout-button" onClick={() => setLoggedInUser(null)}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}
