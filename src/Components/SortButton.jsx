import { use, useState } from "react";
import {
  Button,
  Box,
  Menu,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { getOrderedArticles } from "../api";

export default function SortButton({ setArticlesData }) {
  const [selectedSort, setSelectedSort] = useState(null);
  const [isAscending, setIsAscending] = useState("false");
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setMenuOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setMenuOpen(false);
    setAnchorEl(null);
  };

  const fetchSortedArticles = (sortBy, order) => {
    getOrderedArticles(sortBy, order).then((articles) => {
      setArticlesData(articles);
    });
  };

  const handleSortClick = (sortBy) => {
    setSelectedSort(sortBy);

    fetchSortedArticles(sortBy, isAscending ? "asc" : "desc");
    handleClose();
  };

  const toggleSort = () => {
    const newOrder = !isAscending;
    setIsAscending((prevState) => !prevState);
    fetchSortedArticles(selectedSort, newOrder ? "asc" : "desc");
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 2,
        }}
      >
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{ backgroundColor: "rgb(204, 3, 3)" }}
        >
          {selectedSort ? `Sorting by ${selectedSort}` : "Sort by"}
        </Button>
        <Menu anchorEl={anchorEl} open={menuOpen} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              handleSortClick("votes");
            }}
          >
            votes
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleSortClick("created_at");
            }}
          >
            created_at
          </MenuItem>
        </Menu>
        <ToggleButtonGroup>
          <Button
            variant="contained"
            value="asc"
            sx={{ backgroundColor: "rgb(204, 3, 3)" }}
            onClick={() => {
              toggleSort(true);
              fetchSortedArticles;
            }}
          >
            {isAscending ? "asc" : `desc`}
          </Button>
        </ToggleButtonGroup>
      </Box>
    </>
  );
}
