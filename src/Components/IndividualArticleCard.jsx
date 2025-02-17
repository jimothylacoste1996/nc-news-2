export default function IndividualArticleCard({ article }) {
  return (
    <div className="individual-article-card">
      <h2>{article.title}</h2>
      <img src={article.article_img_url}></img>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p className="body-text">{article.body}</p>

      <p>Comments: {article.comment_count}</p>
      <button id="upvote">↑</button>
      <button id="downvote">↓</button>
      <div id="votes-container">{article.votes}</div>
      <button id="view-comments">Click to view comments</button>
    </div>
  );
}
