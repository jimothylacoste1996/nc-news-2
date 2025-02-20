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

export const getArticleByTopic = (topic) => {
  return newsApi.get(`/articles/?topic=${topic}`).then((res) => {
    return res.data.articles;
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
    .then((res) => {})
    .catch((err) => {});
};

export const postCommentToDatebase = (article_id, commentData) => {
  return newsApi
    .post(`articles/${article_id}/comments`, commentData)
    .then((res) => {
      return res;
    })
    .catch((err) => {});
};

export const getUsers = () => {
  return newsApi.get("/users").then((res) => {
    const usersData = res.data.users;
    const userNames = usersData.map((user) => {
      return user.username;
    });

    return userNames;
  });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    const topicsData = res.data.topics;
    const topicsArray = topicsData.map((topic) => {
      return topic.slug;
    });

    return topicsArray;
  });
};

export const getOrderedArticles = (sortBy = "date", order = "desc") => {
  console.log(order, sortBy);
  return newsApi
    .get(`/articles?sort_by=${sortBy}&order=${order}`)
    .then((res) => {
      return res.data.articles;
    });
};
