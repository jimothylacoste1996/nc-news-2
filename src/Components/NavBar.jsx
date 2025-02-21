import NavButton from "./NavButton";
import LoginButton from "./Login-Button";
import { Link } from "react-router";
import { Box, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import TopicIcon from "@mui/icons-material/Topic";
import { SearchDataContext } from "../Contexts/SearchData";
import { useContext } from "react";

export default function NavBar() {
  const { searchData, setSearchData } = useContext(SearchDataContext);

  const handleResetSearch = () => {
    setSearchData("");
  };
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        backgroundColor: "rgb(204, 3, 3)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingX: { xs: "8px", sm: "16px", md: "24px" },
        paddingY: "12px",
        zIndex: 1000,
        gap: { xs: "10px", sm: "20px", md: "40px" },
      }}
    >
      <Link to="/topics">
        <NavButton instructions="topics">
          <TopicIcon sx={{ marginRight: 1 }} /> Topics
        </NavButton>
      </Link>

      <Link to="/articles" onClick={handleResetSearch}>
        <NavButton instructions="articles">
          <HomeIcon sx={{ marginRight: 1 }} /> Home
        </NavButton>
      </Link>

      <LoginButton instructions="login">
        <PersonIcon sx={{ marginRight: 1 }} />
        Login
      </LoginButton>
    </Box>
  );
}
