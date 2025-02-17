import "./App.css";
import Articles from "./Components/Articles";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";

import IndividualArticle from "./Components/IndividualArticle";

function App() {
  return (
    <>
      <main>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Articles />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route
            path="/articles/:article_id"
            element={<IndividualArticle />}
          ></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
