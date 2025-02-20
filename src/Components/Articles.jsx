import { getArticleByTopic, getArticles } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SortBar from "./SortBar";

import ArticlesContainer from "./ArticlesContainer";

export default function Articles() {
  const { topic } = useParams();
  const [articlesData, setArticlesData] = useState([]);
  const [refreshArticles, setRefreshArticles] = useState(0);

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
  }, [topic, refreshArticles]);

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
              setRefreshArticles={setRefreshArticles}
              className="articles-container-topic"
            />
          </div>
        </>
      ) : (
        <ArticlesContainer
          articles={articlesData}
          setArticlesData={setArticlesData}
          setRefreshArticles={setRefreshArticles}
        />
      )}
    </>
  );
}
