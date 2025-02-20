import { useEffect, useState } from "react";

import {
  getCommentsById,
  incrementArticleVote,
  decrementArticleVote,
} from "../api";
import CommentCard from "./CommentCard";
import PostComment from "./PostComment";
import { Button, Typography, Card, CardContent, Box } from "@mui/material";

export default function IndividualArticleCard({ article }) {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [voteClicked, setVoteClicked] = useState(false);
  const [articleVotes, setArticleVotes] = useState(article.votes);
  const [vote, setVote] = useState(null);
  const [error, setError] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

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
    <Card
      sx={{
        maxWidth: 800,
        margin: "0 auto",
        padding: 2,
        paddingTop: "20px",
      }}
    >
      <CardContent sx={{ marginBottom: 3, padding: 2 }}>
        <Typography variant="h4">{article.title}</Typography>
        <img
          src={article.article_img_url}
          alt="article-img"
          style={{
            width: "100%",
            marginTop: 16,
            maxHeight: "300px",
            objectFit: "cover",
          }}
        />
        <Typography variant="body1" mb={1}>
          Author: {article.author}
        </Typography>
        <Typography variant="body1" mb={1}>
          Topic: {article.topic}
        </Typography>
        <Typography variant="body2" mb={1}>
          {article.body}
        </Typography>

        <Typography variant="body1" mb={1}>
          Comments: {article.comment_count}
        </Typography>

        <Box
          className="votes-container"
          sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
        >
          <Button
            variant="contained"
            onClick={() => voteClickHandler("upvote")}
            disabled={voteClicked}
            sx={{
              minWidth: "50px",
              minHeight: "50px",
              borderRadius: "15%",
              backgroundColor: "rgb(204, 3, 3)",
            }}
          >
            ↑
          </Button>
          {error && <Typography color="error">{error}</Typography>}
          <Button
            variant="contained"
            color="primary"
            onClick={() => voteClickHandler("downvote")}
            disabled={voteClicked}
            sx={{
              minWidth: "50px",
              minHeight: "50px",
              borderRadius: "15%",
              backgroundColor: "rgb(204, 3, 3)",
            }}
          >
            ↓
          </Button>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "8px 16px",
              borderRadius: "8px",
              backgroundColor: "#6B7280",
              color: "white",
              fontWeight: "bold",
              minWidth: "50px",
              textAlign: "center",
            }}
          >
            {articleVotes}
          </Box>

          {voteClicked && (
            <Button
              variant="contained"
              onClick={() => undoVoteClickHandler(vote)}
              sx={{ marginTop: 1 }}
            >
              Undo vote
            </Button>
          )}
        </Box>

        {!showComments && (
          <Button
            variant="outlined"
            sx={{
              marginTop: 2,
              color: "rgb(204, 3, 3)",
              borderColor: "rgb(204, 3, 3)",
            }}
            onClick={() => commentClickHandler(article.article_id)}
          >
            Click to view comments
          </Button>
        )}

        {showComments && (
          <>
            <PostComment
              article={article}
              setRefreshTrigger={setRefreshTrigger}
            />
            <Button
              variant="contained"
              sx={{ marginTop: 2, backgroundColor: "rgb(204, 3, 3)" }}
              onClick={closeCommentHandler}
            >
              Close Comments
            </Button>
          </>
        )}

        {isLoading && <p>Loading..</p>}
      </CardContent>

      {showComments && (
        <div className="comments-container" style={{ marginTop: 2 }}>
          {commentsList.length === 0 ? (
            <Typography>No comments available.</Typography>
          ) : (
            commentsList.map((comment) => (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                setRefreshTrigger={setRefreshTrigger}
              />
            ))
          )}
        </div>
      )}
    </Card>
  );
}
