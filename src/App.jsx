import "./App.css";
import Articles from "./Components/Articles";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <main>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/articles" element={<Articles />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
