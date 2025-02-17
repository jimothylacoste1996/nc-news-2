import { getArticles } from "../api";
import { useEffect, useState } from "react";
import "../App.css";
import ArticlesContainer from "./ArticlesContainer";

export default function Articles() {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      console.log(data);
      setArticlesData(data);
    });
  }, []);
  return (
    <>
      <section>
        <ArticlesContainer articles={articlesData} />
      </section>
    </>
  );
}
