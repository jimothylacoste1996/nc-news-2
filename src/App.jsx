import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Articles from "./Components/Articles";

function App() {
  return (
    <>
      <main>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/articles" element={<Articles />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
