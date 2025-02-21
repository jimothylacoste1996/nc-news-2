import { getArticleByTopic, getArticles } from "../api";
import { SearchDataContext } from "../Contexts/SearchData";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import ArticlesContainer from "./ArticlesContainer";
import { Box } from "@mui/material";

import ErrorComponent from "./ErrorComponent";
import SearchBar from "./SearchBar";

export default function Articles() {
  const { topic } = useParams();
  const [articlesData, setArticlesData] = useState([]);
  const [error, setError] = useState(null);
  const { searchData, setSearchData } = useContext(SearchDataContext);

  useEffect(() => {
    if (topic) {
      getArticleByTopic(topic)
        .then((data) => {
          let filteredData;
          if (searchData) {
            filteredData = data.filter((article) => {
              return article.title
                .toLowerCase()
                .includes(searchData.toLowerCase());
            });
          } else {
            filteredData = data;
          }
          setArticlesData(filteredData);
        })
        .catch((err) => {
          setError(err);
        });
    } else {
      getArticles()
        .then((data) => {
          let filteredData;
          if (searchData) {
            filteredData = data.filter((article) => {
              return article.title
                .toLowerCase()
                .includes(searchData.toLowerCase());
            });
          } else {
            filteredData = data;
          }
          setArticlesData(filteredData);
        })
        .catch((err) => {
          setError(err);
        });
    }
  }, [topic, searchData]);

  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  return (
    <>
      {topic ? (
        <>
          <SearchBar setSearchData={setSearchData}></SearchBar>

          {articlesData.length === 0 && <p>no articles found</p>}
          <header id="topic-header-container">
            <h1 id="topic-header">{topic} articles</h1>
          </header>
          <div className="articles-container-topic">
            <ArticlesContainer
              articles={articlesData}
              setArticlesData={setArticlesData}
              className="articles-container-topic"
            />
          </div>
        </>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "left",
              width: "100%",
              gap: 2,
              paddingBottom: "10px",
            }}
          >
            <SearchBar setSearchData={setSearchData}></SearchBar>
          </Box>
          {articlesData.length === 0 && <p>no articles found</p>}
          <ArticlesContainer
            articles={articlesData}
            setArticlesData={setArticlesData}
          />
        </>
      )}
    </>
  );
}
