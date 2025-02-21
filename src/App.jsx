import "./App.css";
import Articles from "./Components/Articles";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Topics from "./Components/Topics";
import NavBar from "./Components/NavBar";
import ErrorPage from "./Components/ErrorPage";

import IndividualArticle from "./Components/IndividualArticle";

function App() {
  return (
    <>
      <main>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Articles />}></Route>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/articles/:topic" element={<Articles />}></Route>
          <Route
            path="/articles/focus/:article_id"
            element={<IndividualArticle />}
          ></Route>
          <Route path="/topics" element={<Topics />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
