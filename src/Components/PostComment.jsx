import { useForm } from "react-hook-form";
import { postCommentToDatebase } from "../api";
import { useContext, useState } from "react";
import { LoginContext } from "../Contexts/Login";
import { Box } from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

export default function PostComment({ article, setRefreshTrigger }) {
  const articleId = article.article_id;
  const { register, handleSubmit } = useForm();
  const { loggedInUser } = useContext(LoginContext);
  const [showPopup, setShowPopup] = useState(false);

  const confirmComment = (data) => {
    if (!loggedInUser) {
      setShowPopup(true);

      return;
    }
    const commentData = {
      username: loggedInUser,
      body: data.body,
    };

    postCommentToDatebase(articleId, commentData)
      .then((res) => {
        setRefreshTrigger((prev) => prev + 1);
      })
      .catch((err) => {});
  };

  return (
    <div id="comment-form-container">
      Post a comment here...
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <>
            <form
              id="comment-form"
              onSubmit={handleSubmit((data) => confirmComment(data))}
            >
              <input
                id="comment-input"
                {...register("body", { required: true })}
                placeholder="comment"
              />
              <Button
                id="comment-submit-button"
                type="submit"
                variant="contained"
                sx={{
                  padding: "1%",
                  backgroundColor: "rgb(204, 3, 3)",
                  fontSize: "0.8rem",
                }}
              >
                Submit
              </Button>
            </form>

            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              open={showPopup}
              onClose={() => setShowPopup(false)}
            >
              <Typography sx={{ p: 2 }}>
                You need to be logged in to post a comment.
              </Typography>
            </Popover>
          </>
        )}
      </PopupState>
    </div>
  );
}
