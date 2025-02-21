import { useEffect, useState } from "react";
import { getTopics } from "../api";
import TopicsContainer from "./TopicsContainer";
import { Typography } from "@mui/material";

export default function Topics() {
  const [topicsData, setTopicsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTopics()
      .then((topics) => {
        setTopicsData(topics);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  return (
    <>
      <Typography
        sx={{
          justifyContent: "center",
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        Choose from the following topics...
      </Typography>
      <section>
        <TopicsContainer topics={topicsData} />
      </section>
    </>
  );
}
