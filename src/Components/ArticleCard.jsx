import { Link } from "react-router-dom";
import moment from "moment";
import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";

import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import { Button } from "@mui/material";

export default function ArticleCard({ article }) {
  const formattedDate = moment(article.created_at).format(
    "MMMM Do YYYY, h:mm:ss a"
  );

  return (
    <Card sx={{ position: "relative", width: "100%", maxWidth: 600 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500], fontSize: "0.5rem" }}>
            {article.author}
          </Avatar>
        }
        title={article.title}
        subheader={formattedDate}
      />
      <CardMedia
        component="img"
        height="250"
        image={article.article_img_url}
        alt="article image"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Topic: {article.topic}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Comments: {article.comment_count}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Votes: {article.votes}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/articles/focus/${article.article_id}`}>
          <Button
            variant="outlined"
            sx={{
              position: "absolute",
              bottom: "50px",
              right: 0,
              padding: "5px",
              borderColor: "rgb(204, 3, 3)",
              color: "rgb(204, 3, 3)",
            }}
          >
            View Article
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
