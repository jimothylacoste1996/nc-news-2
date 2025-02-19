import moment from "moment";
import { useContext } from "react";
import { LoginContext } from "../Contexts/Login";
import { deleteComment } from "../api";

export default function CommentCard({ comment, setRefreshTrigger }) {
  const { loggedInUser } = useContext(LoginContext);
  const formattedDate = moment(comment.created_at).format(
    "MMMM Do YYYY, h:mm:ss a"
  );
  const deleteClickHandler = (comment_id) => {
    deleteComment(comment_id).then(() => {
      setRefreshTrigger((prev) => prev + 1);
    });

    return <p>comment deleted</p>;
  };

  return (
    <div className="comment-card">
      <p id="comment-author"> Author: {comment.author} </p>
      <p> {comment.body} </p>
      <p>Posted at: {formattedDate}</p>

      <div className="comment-votes-container">
        <button id="comment-upvote">↑</button>
        <button id="comment-downvote">↓</button>
        <div id="votes-counter">{comment.votes}</div>
      </div>
      <div id="remove-comment-container">
        {loggedInUser === comment.author && (
          <button
            id="delete-comment-button"
            onClick={() => deleteClickHandler(comment.comment_id)}
          >
            Delete your comment
          </button>
        )}
      </div>
    </div>
  );
}
