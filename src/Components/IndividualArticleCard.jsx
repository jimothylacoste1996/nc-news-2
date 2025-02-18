import { useState } from "react";
import { getCommentsById } from "../api";
import CommentCard from "./CommentCard";

export default function IndividualArticleCard({ article }) {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const commentClickHandler = (article_id) => {
    if (!showComments) {
      setIsLoading(true);
      getCommentsById(article_id).then((comments) => {
        console.log(comments);
        setCommentsList(comments);
        setIsLoading(false);
      });
    }
    setShowComments(!showComments);
  };

  const closeCommentHandler = () => {
    console.log("clicked");
    setShowComments(false);
  };

  return (
    <div className="individual-article-card">
      <h2>{article.title}</h2>
      <img src={article.article_img_url}></img>
      <p>Author: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p className="body-text">{article.body}</p>

      <p>Comments: {article.comment_count}</p>
      <div className="votes-container">
        <button id="upvote">↑</button>
        <button id="downvote">↓</button>
        <div id="votes-counter">{article.votes}</div>
      </div>

      {!showComments && (
        <button
          id="view-comments"
          onClick={() => commentClickHandler(article.article_id)}
        >
          Click to view comments
        </button>
      )}
      {showComments && (
        <button
          id="close-comments"
          onClick={() => {
            closeCommentHandler();
          }}
        >
          Close Comments
        </button>
      )}

      {isLoading && <p>Loading comments...</p>}
      {showComments && (
        <>
          <div className="comments-container">
            <section>
              {commentsList.length === 0 ? (
                <p>No comments available.</p>
              ) : (
                commentsList.map((comment) => {
                  return (
                    <CommentCard
                      key={comment.comment_id}
                      comment={comment}
                    ></CommentCard>
                  );
                })
              )}
            </section>
          </div>
        </>
      )}
    </div>
  );
}
/* <button
        id="view-comments"
        onClick={() => commentClickHandler(article.article_id)}
      >
        Click to view comments
      </button> */
