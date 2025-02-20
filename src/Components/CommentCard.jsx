import moment from "moment";
import { useContext } from "react";
import { LoginContext } from "../Contexts/Login";
import { deleteComment } from "../api";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";

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
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6" id="comment-author">
          Author: {comment.author}
        </Typography>
        <Typography variant="body2" paragraph>
          {comment.body}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Posted at: {formattedDate}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Button
            variant="outlined"
            sx={{
              marginRight: 1,
              borderColor: "rgb(204, 3, 3)",
              color: "rgb(204, 3, 3)",
            }}
            onClick={() => console.log("Upvote clicked")}
          >
            ↑ {comment.votes}
          </Button>
          <Button
            variant="outlined"
            sx={{
              marginLeft: 1,
              borderColor: "rgb(204, 3, 3)",
              color: "rgb(204, 3, 3)",
            }}
            onClick={() => console.log("Downvote clicked")}
          >
            ↓
          </Button>
        </div>

        {loggedInUser === comment.author && (
          <Button
            sx={{
              padding: "1%",
              backgroundColor: "rgb(204, 3, 3)",
              fontSize: "0.8rem",
            }}
            variant="contained"
            onClick={() => deleteClickHandler(comment.comment_id)}
          >
            Delete your comment
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

//   return (
//     <div className="comment-card">
//       <p id="comment-author"> Author: {comment.author} </p>
//       <p> {comment.body} </p>
//       <p>Posted at: {formattedDate}</p>

//       <div className="comment-votes-container">
//         <button id="comment-upvote">↑</button>
//         <button id="comment-downvote">↓</button>
//         <div id="votes-counter">{comment.votes}</div>
//       </div>
//       <div id="remove-comment-container">
//         {loggedInUser === comment.author && (
//           <button
//             id="delete-comment-button"
//             onClick={() => deleteClickHandler(comment.comment_id)}
//           >
//             Delete your comment
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
