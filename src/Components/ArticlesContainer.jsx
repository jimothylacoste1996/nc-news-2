import "../App.css";
import ArticleCard from "./ArticleCard";

export default function ArticlesContainer({ articles, setRefreshArticles }) {
  return (
    <>
      <div className="articles-container">
        {articles.map((article) => {
          return (
            <ArticleCard
              setRefreshArticles={setRefreshArticles}
              key={article.article_id}
              article={article}
            >
              HELLO
            </ArticleCard>
          );
        })}
      </div>
    </>
  );
}
