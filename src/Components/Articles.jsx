import { getArticleByTopic, getArticles } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <section>
        {topic ? (
          <>
            <div id="topic-articles-container">
              <header id="topic-header-container">
                <h1 id="topic-header">{topic} articles</h1>
              </header>
              <div id="articles-when-topic-selected">
                <ArticlesContainer
                  articles={articlesData}
                  setRefreshArticles={setRefreshArticles}
                />
              </div>
            </div>
          </>
        ) : (
          <ArticlesContainer
            articles={articlesData}
            setRefreshArticles={setRefreshArticles}
          />
        )}
      </section>
    </>
  );
}
