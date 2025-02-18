import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://james-nc-news.onrender.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsById = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const incrementArticleVote = (article_id) => {
  return newsApi
    .patch(`articles/${article_id}`, {
      inc_votes: 1,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const decrementArticleVote = (article_id) => {
  return newsApi
    .patch(`articles/${article_id}`, {
      inc_votes: -1,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postCommentToDatebase = (article_id, commentData) => {
  console.log(commentData);
  return newsApi
    .post(`articles/${article_id}/comments`, commentData)
    .then((res) => {
      console.log("successful");
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
