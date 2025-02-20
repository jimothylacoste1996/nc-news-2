import "../App.css";
import ArticleCard from "./ArticleCard";
import SortBar from "./SortBar";
import { Box } from "@mui/material";

export default function ArticlesContainer({
  articles,
  setArticlesData,
  setRefreshArticles,
}) {
  return (
    <>
      <SortBar setArticlesData={setArticlesData}></SortBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "95%",
          gap: 2,
          paddingBottom: "150px",
        }}
      >
        <div className="articles-container">
          {articles.map((article) => {
            return (
              <>
                <ArticleCard
                  key={article.article_id}
                  article={article}
                  setRefreshArticles={setRefreshArticles}
                ></ArticleCard>
              </>
            );
          })}
        </div>
      </Box>
    </>
  );
}
