import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { useEffect, useState } from "react";
import IndividualArticleCard from "./IndividualArticleCard";
import ErrorComponent from "./ErrorComponent";

export default function IndividualArticle({ params }) {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("IndividualArticle error");
        setError(err);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading article...</p>;
  }
  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  return (
    <article className="article-container">
      <IndividualArticleCard article={article}></IndividualArticleCard>
    </article>
  );
}
