import { use, useEffect, useState } from "react";
import {
  getCommentsById,
  incrementArticleVote,
  decrementArticleVote,
} from "../api";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";

export default function IndividualArticleCard({ article }) {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [voteClicked, setVoteClicked] = useState(false);
  const [articleVotes, setArticleVotes] = useState(article.votes);
  const [vote, setVote] = useState(null);
  const [error, setError] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // const commentClickHandler = (article_id) => {
  //   if (!showComments) {
  //     setIsLoading(true);
  //     getCommentsById(article_id).then((comments) => {
  //       setCommentsList(comments);
  //       setIsLoading(false);
  //     });
  //   }
  //   setShowComments(!showComments);
  // };

  useEffect(() => {
    if (showComments) {
      setIsLoading(true);
      getCommentsById(article.article_id).then((comments) => {
        setCommentsList(comments);
        setIsLoading(false);
      });
    }
  }, [showComments, refreshTrigger]);

  const commentClickHandler = (article_id) => {
    setIsLoading(true);
    getCommentsById(article_id).then((comments) => {
      setCommentsList(comments);
      setIsLoading(false);
      setShowComments(true);
    });
  };

  const closeCommentHandler = () => {
    setShowComments(false);
  };

  const voteClickHandler = (direction) => {
    if (voteClicked) {
      return;
    }
    setVoteClicked(true);
    if (direction === "upvote") {
      setArticleVotes(articleVotes + 1);
      setError(null);
      incrementArticleVote(article.article_id).catch((err) => {
        setArticleVotes(articleVotes - 1);
        setError("Your vote was not successful. Please try again!");
      });
      setVote("upvote");
    } else if (direction === "downvote") {
      setArticleVotes(articleVotes - 1);
      setError(null);
      decrementArticleVote(article.article_id).catch((err) => {
        setArticleVotes(articleVotes + 1);
        setError("Your vote was not successful. Please try again!");
      });
      setVote("downvote");
    }
  };

  const undoVoteClickHandler = (vote) => {
    if (vote === "upvote") {
      decrementArticleVote(article.article_id);
      setArticleVotes(articleVotes - 1);
      setVoteClicked(false);
    } else if (vote === "downvote") {
      incrementArticleVote(article.article_id);
      setArticleVotes(articleVotes + 1);
      setVoteClicked(false);
    }
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
        <button
          id="upvote"
          onClick={() => {
            voteClickHandler("upvote");
          }}
          disabled={voteClicked}
        >
          ↑
        </button>
        {error ? <p>{error}</p> : null}
        <button
          id="downvote"
          onClick={() => {
            voteClickHandler("downvote");
          }}
          disabled={voteClicked}
        >
          ↓
        </button>
        {error ? <p>{error}</p> : null}
        <div id="votes-counter">{articleVotes}</div>
        {voteClicked && (
          <button
            id="undo-article-vote-button"
            onClick={() => undoVoteClickHandler(vote)}
          >
            Undo vote
          </button>
        )}
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
        <>
          <PostComment
            article={article}
            setRefreshTrigger={setRefreshTrigger}
          />

          <button
            id="close-comments"
            onClick={() => {
              closeCommentHandler();
            }}
          >
            Close Comments
          </button>
        </>
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
