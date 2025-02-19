import TopicCard from "./TopicCard";
import { Link } from "react-router-dom";

export default function TopicsContainer({ topics }) {
  return (
    <>
      <div className="topics-container">
        {topics.map((topic) => {
          return (
            <Link to={`/articles/${topic}`}>
              <TopicCard key={topic.slug} topic={topic}></TopicCard>
            </Link>
          );
        })}
      </div>
    </>
  );
}
