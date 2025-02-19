import "../App.css";
import { Link } from "react-router-dom";
import moment from "moment";

const handleArticleButtonClick = (article) => {
  setRefreshArticles((prev) => prev + 1);
  return article;
};

export default function ArticleCard({ article, setRefreshArticles }) {
  const formattedDate = moment(article.created_at).format(
    "MMMM Do YYYY, h:mm:ss a"
  );
  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <img src={article.article_img_url}></img>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Posted: {formattedDate} </p>
      <Link to={`/articles/focus/${article.article_id}`}>
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
