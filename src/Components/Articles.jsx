import { getArticleByTopic, getArticles } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArticlesContainer from "./ArticlesContainer";

export default function Articles() {
  const { topic } = useParams();
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    if (topic) {
      getArticleByTopic(topic).then((data) => {
        setArticlesData(data);
      });
    } else {
      getArticles().then((data) => {
        setArticlesData(data);
      });
    }
  }, [topic]);

  return (
    <>
      {topic ? (
        <>
          <header id="topic-header-container">
            <h1 id="topic-header">{topic} articles</h1>
          </header>
          <div className="articles-container-topic">
            <ArticlesContainer
              articles={articlesData}
              setArticlesData={setArticlesData}
              className="articles-container-topic"
            />
          </div>
        </>
      ) : (
        <ArticlesContainer
          articles={articlesData}
          setArticlesData={setArticlesData}
        />
      )}
    </>
  );
}
