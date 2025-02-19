import { useForm } from "react-hook-form";
import { postCommentToDatebase } from "../api";
import { useContext } from "react";
import { LoginContext } from "../Contexts/Login";

export default function PostComment({ article, setRefreshTrigger }) {
  const articleId = article.article_id;
  const { register, handleSubmit } = useForm();
  const { loggedInUser } = useContext(LoginContext);

  const confirmComment = (data) => {
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
      <form id="comment-form" onSubmit={handleSubmit(confirmComment)}>
        <input
          id="comment-input"
          {...register("body", { required: true })}
          placeholder="comment"
        />

        <input id="comment-submit-button" type="submit" value="submit" />
      </form>
    </div>
  );
}
