import { useState, useContext } from "react";
import { IconButton, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchDataContext } from "../Contexts/SearchData";

export default function SearchBar() {
  const { searchData, setSearchData } = useContext(SearchDataContext);
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleSearchOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchData(searchText);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton
        onClick={toggleSearchOpen}
        sx={{
          width: "50px",
          height: "50px",
          color: "white",
          backgroundColor: "rgb(204, 3, 3)",
          borderRadius: "15%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SearchIcon />
      </IconButton>

      {isOpen && (
        <>
          <IconButton
            onClick={toggleSearchOpen}
            sx={{
              position: "fixed",

              width: "50px",
              height: "50px",
              color: "white",
              backgroundColor: "rgb(204, 3, 3)",
              borderRadius: "15%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SearchIcon />
          </IconButton>
          <form onSubmit={handleSearchSubmit}>
            <InputBase
              placeholder="Search by article title..."
              onChange={handleSearchChange}
              value={searchText}
              sx={{
                position: "fixed",
                marginLeft: 6,
                top: "0",
                left: "5",
                backgroundColor: "rgb(250, 218, 218)",
                borderRadius: 1,
                padding: "4px 8px",
                width: "200px",
              }}
            ></InputBase>
          </form>
        </>
      )}
    </Box>
  );
}
