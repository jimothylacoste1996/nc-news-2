import { useForm } from "react-hook-form";
import { postCommentToDatebase } from "../api";

export default function PostComment({ article, setRefreshTrigger }) {
  const articleId = article.article_id;
  const { register, handleSubmit } = useForm();

  const confirmComment = (data) => {
    const commentData = {
      username: data.username,
      body: data.body,
    };
    postCommentToDatebase(articleId, commentData)
      .then((res) => {
        console.log("Comment made:", res);
        setRefreshTrigger((prev) => prev + 1);
      })
      .catch((err) => {
        console.error("Error posting comment:", err);
      });
  };

  return (
    <div id="comment-form-container">
      Post a comment here...
      <form id="comment-form" onSubmit={handleSubmit(confirmComment)}>
        <input
          id="username-input"
          {...register("username", { required: true })}
          placeholder="username"
        />

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
