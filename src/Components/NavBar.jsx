import NavButton from "./NavButton";
import LoginButton from "./Login-Button";
import { Link } from "react-router";
import "../App.css";
import logo from "../assets/images/nc-news-logo.png";

export default function NavBar() {
  return (
    <section className="NavBar">
      <img src={logo} id="logo" alt="Northcoders news logo"></img>
      {/* <Link to="/">
        <NavButton instructions="home">Home</NavButton>
      </Link> */}

      <Link to="/topics">
        <NavButton instructions="topics">Topics</NavButton>
      </Link>

      <Link to="/articles">
        <NavButton instructions="articles">Articles</NavButton>
      </Link>

      <LoginButton instructions="login">Login</LoginButton>
    </section>
  );
}
