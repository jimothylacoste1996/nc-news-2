import moment from "moment";

export default function CommentCard({ comment }) {
  const formattedDate = moment(comment.created_at).format(
    "MMMM Do YYYY, h:mm:ss a"
  );
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
    </div>
  );
}
