import "../App.css";
import { Link } from "react-router-dom";

const handleArticleButtonClick = (article) => {
  return article;
};

export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <img src={article.article_img_url}></img>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
      <Link to={`/articles/${article.article_id}`}>
        <button
          id="view-article"
          value={article.article_id}
          onClick={() => handleArticleButtonClick(article)}
        >
          {" "}
          View Article
        </button>
      </Link>
    </div>
  );
}
