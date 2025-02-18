import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import { useEffect, useState } from "react";
import IndividualArticleCard from "./IndividualArticleCard";

export default function IndividualArticle({ params }) {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading article...</p>;
  }

  return (
    <article className="article-container">
      <IndividualArticleCard article={article}></IndividualArticleCard>
    </article>
  );
}
