import { getArticleByTopic, getArticles } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ArticlesContainer from "./ArticlesContainer";
import ErrorPage from "./ErrorPage";
import ErrorComponent from "./ErrorComponent";

export default function Articles() {
  const { topic } = useParams();
  const [articlesData, setArticlesData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (topic) {
      getArticleByTopic(topic).then((data) => {
        setArticlesData(data);
      });
    } else {
      getArticles()
        .then((data) => {
          setArticlesData(data);
        })
        .catch((err) => {
          console.log("articles error");
          setError(err);
        });
    }
  }, [topic]);

  if (error) {
    return <ErrorComponent message={error.message} />;
  }

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
