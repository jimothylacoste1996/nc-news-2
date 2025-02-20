import { use, useState } from "react";

import { getOrderedArticles } from "../api";

export default function SortButton({ setArticlesData }) {
  const [selectedSort, setSelectedSort] = useState(null);
  const [isAscending, setIsAscending] = useState("false");

  const fetchSortedArticles = (sortBy, order) => {
    getOrderedArticles(sortBy, order).then((articles) => {
      setArticlesData(articles);
    });
  };

  const handleSortClick = (sortBy) => {
    setSelectedSort(sortBy);

    fetchSortedArticles(sortBy, isAscending ? "asc" : "desc");
  };

  const toggleSort = () => {
    const newOrder = !isAscending;
    setIsAscending((prevState) => !prevState);
    fetchSortedArticles(selectedSort, newOrder ? "asc" : "desc");
  };

  return (
    <>
      <div className="dropdown">
        <button
          id="sort-button"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          className="btn btn-secondary dropdown-toggle"
        >
          {selectedSort ? selectedSort : "Sort by"}
        </button>

        <ul className="dropdown-menu">
          <li key="votes" onClick={() => handleSortClick("votes")}>
            <a className="dropdown-item">Votes</a>
          </li>
          <li key="date" onClick={() => handleSortClick("created_at")}>
            <a className="dropdown-item">Date</a>
          </li>
        </ul>
      </div>
      <button
        className="btn btn-secondary "
        onClick={() => {
          toggleSort();
          fetchSortedArticles;
        }}
      >
        {isAscending ? "Ascending" : "Descending"}
      </button>
    </>
  );
}
