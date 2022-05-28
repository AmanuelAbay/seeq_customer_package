import React from "react";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Paper,
  Link,
  Box,
} from "@mui/material";

const Movie = ({ movie }) => {
  return (
    <Paper elevation={0} sx={{ cursor: "pointer" }}>
      <Link href="/movie_description">
        <Box sx={{ display: "flex", justifyContent: "center", px: 4 }}>
          <img
            src={
              movie?.Poster !== "N/A" ? movie?.Poster : "poster not available"
            }
            alt={movie?.Title}
            style={{
              height: "30rem",
              width: "20rem",
              borderRadius: "5px",
              textAlign: "center",
            }}
          />
        </Box>
      </Link>
    </Paper>
  );
};
export default Movie;
