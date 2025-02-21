import { Button } from "@mui/material";

export default function TopicCard({ topic }) {
  return (
    <div className="topic-card">
      <Button
        variant="contained"
        sx={{
          fontSize: "2.5rem",
          backgroundColor: "rgb(204, 3, 3)",
        }}
      >
        {topic}
      </Button>
    </div>
  );
}
