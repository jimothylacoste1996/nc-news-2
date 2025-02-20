import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../Contexts/Login";
import { getUsers } from "../api";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import { Box } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";

export default function LoginButton(props) {
  const { loggedInUser, setLoggedInUser } = useContext(LoginContext);
  const [usersList, setUsersList] = useState([]);
  const [anchorElement, setAnchorElement] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLoginClick = (event) => {
    setAnchorElement(event.currentTarget);
    setMenuOpen(true);
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
          <Button
            variant="contained"
            id="my-custom-btn"
            className={props.instructions}
            onClick={handleLoginClick}
            sx={{
              fontSize: "1rem",
              padding: "6px 12px",
              minWidth: "100px",
              backgroundColor: "white",
              color: "red",
            }}
          >
            <PersonIcon></PersonIcon>
            Login
          </Button>
          <Menu
            anchorElement={anchorElement}
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          >
            {usersList.map((user) => (
              <MenuItem
                key={user}
                onClick={() => {
                  setLoggedInUser(user);
                  setMenuOpen(false);
                  setAnchorElement(null);
                }}
              >
                {user}
              </MenuItem>
            ))}
          </Menu>
        </>
      ) : (
        <>
          <Button
            sx={{
              fontSize: "0.5rem",
              padding: "6px 12px",
              minWidth: "100px",
              backgroundColor: "white",
              color: "red",
            }}
            variant="contained"
            onClick={() => setLoggedInUser(null)}
          >
            {" "}
            Logged in as {loggedInUser}, click again to log out
          </Button>
        </>
      )}
    </div>
  );
}
