import { Link } from "react-router-dom";

export default function TopicCard({ topic }) {
  return (
    <div className="topic-card">
      <button className="topic-button">{topic}</button>
    </div>
  );
}
