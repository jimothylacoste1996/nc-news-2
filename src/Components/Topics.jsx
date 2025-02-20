import { useEffect, useState } from "react";
import { getTopics } from "../api";
import TopicsContainer from "./TopicsContainer";
import { Typography } from "@mui/material";

export default function Topics() {
  const [topicsData, setTopicsData] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopicsData(topics);
    });
  }, []);

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
