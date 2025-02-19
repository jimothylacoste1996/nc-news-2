import "../App.css";
import ArticleCard from "./ArticleCard";
import SortBar from "./SortBar";

export default function ArticlesContainer({ articles, setArticlesData }) {
  return (
    <>
      <SortBar setArticlesData={setArticlesData}></SortBar>
      <div className="articles-container">
        {articles.map((article) => {
          return (
            <>
              <ArticleCard key={article.article_id} article={article}>
                HELLO
              </ArticleCard>
            </>
          );
        })}
      </div>
    </>
  );
}
