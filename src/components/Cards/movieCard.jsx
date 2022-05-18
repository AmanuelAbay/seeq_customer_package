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
} from "@mui/material";

const Movie = ({ movie }) => {
  return (
    <Grid item xl={2} md={3} sm={6} xs={12}>
      {/* <Zoom in={true} timeout={5000}> */}
      <Paper elevation={0} sx={{ cursor: "pointer" }}>
        {" "}
        {/* <Link href="./movieDescription.jsx"> */}
        <Link href="/movie_description">
          <img
            src={
              movie?.Poster !== "N/A" ? movie?.Poster : "poster not available"
            }
            alt={movie?.Title}
            style={{
              height: "30rem",
              width: "20rem",
              borderRadius: "5px",
            }}
          />
        </Link>
        {/* </Link> */}
      </Paper>
      {/* </Zoom> */}
    </Grid>
    // <Card>
    //   <CardMedia
    //     className={classes.cardMedia}
    //     image="https://source.unsplash.com/random"
    //     title="Image Title"
    //   />
    //   <CardContent className={classes.cardContent}>
    //     <Typography variant="h5" gutterBottom>
    //       Heading
    //     </Typography>
    //     <Typography>
    //       This is a media card. You can use this section to describe the
    //       content.
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small" color="primary">
    //       VIEW
    //     </Button>
    //     <Button size="small" color="primary">
    //       EDIT
    //     </Button>
    //   </CardActions>
    // </Card>
  );
};
export default Movie;
