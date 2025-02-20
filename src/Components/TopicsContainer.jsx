import TopicCard from "./TopicCard";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function TopicsContainer({ topics }) {
  return (
    <>
      <div className="topics-container">
        {topics.map((topic) => {
          return (
            <Box
              sx={{
                paddingTop: "100%",
                top: "50%",
                left: "50%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingY: "20px",
                paddingBottom: "150px",
              }}
            >
              <Link to={`/articles/${topic}`}>
                <TopicCard key={topic.slug} topic={topic}></TopicCard>
              </Link>
            </Box>
          );
        })}
      </div>
    </>
  );
}
