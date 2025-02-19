import { useEffect, useState } from "react";
import { getTopics } from "../api";
import TopicsContainer from "./TopicsContainer";

export default function Topics() {
  const [topicsData, setTopicsData] = useState([]);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopicsData(topics);
    });
  }, []);

  return (
    <>
      <section>
        <TopicsContainer topics={topicsData} />
      </section>
    </>
  );
}
