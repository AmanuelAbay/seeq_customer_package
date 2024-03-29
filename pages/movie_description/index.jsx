import React from "react";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import PopUp from "../../src/components/Movies/Booking/PopUp";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Typography,
  CssBaseline,
  Grid,
  Container,
  Button,
  Box,
  Stack,
} from "@mui/material";
// import useStyles from "./styles";
import useStyles from "../../styles/styles";
import Event from "../../src/components/Cards/eventCard";
import Carousel from "../../src/components/views/carousel";
import Movie from "../../src/components/Cards/movieCard";
import { Divider } from "@mui/material";
import { useState, useEffect } from "react";
import MainLayout from "../../src/components/layouts/mainLayout";
import axios from "axios";

const cards = [1, 2, 3, 4];

const Description = () => {
  const API_URL = "http://www.omdbapi.com?apikey=c15ef40d";
  const title = "spider man";
  const [movies, setMovies] = useState([]);
  const [moviesDescription, setMovieDescription] = useState({});
  const theme = useTheme();
  const [movie, setMovie] = useState();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const setSearch = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    const id = 705861;
    await axios
      .get(`http://localhost:3000/seeq/api/movie/` + id)
      .then((res) => {
        setMovie(res.data.movie);
        setMovieDescription(res.data.movieInfo);
      });
    setMovies(data.Search);
  };
  useEffect(() => {
    setSearch(title);
  }, []);

  return (
    <MainLayout>
      <Box sx={{ flexGrow: 1, backgroundColor: "#faffff" }}>
        <CssBaseline />
        <Container
          maxWidth={false}
          style={{ paddingLeft: "12%", paddingRight: "8%", paddingTop: 70 }}
        >
          <Grid container sx={{ my: 5 }}>
            <Grid item md="5">
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: 43,
                  mb: 4,
                  color: "#333333",
                }}
              >
                Spider-Man : No Way Home
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="center">
                {movies?.length > 0 ? (
                  // <Movie movie={movies[0].Poster} sx={{ pr: 5 }} />
                  <img
                    src={
                      movies[0]?.Poster !== "N/A"
                        ? movies[0]?.Poster
                        : "poster not available"
                    }
                    alt={movies[0]?.Title}
                    style={{
                      height: "38rem",
                      width: "34rem",
                      borderRadius: "5px",
                      marginLeft: "7rem",
                    }}
                  />
                ) : (
                  <Typography>Poster not available</Typography>
                )}
                <Box width="50%"></Box>
              </Box>
              {/* <Typography>Hello</Typography> */}
            </Grid>
            <Grid item md="6" sx={{ mt: 6 }}>
              <Typography
                sx={{
                  fontFamily: "poppins",
                  fontSize: 38,
                  my: 4,
                  color: "#333333",
                }}
              >
                About This Movie
              </Typography>
              <Grid container alignItems="start" spacing={2} sx={{ mb: 2 }}>
                <Grid item md="3">
                  <Typography sx={{ fontFamily: "poppins", fontSize: 25 }}>
                    Actors :
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: 20, fontFamily: "poppins" }}>
                    Tom Holland, Zendaya, Benedict Cumberbatch
                  </Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="start" spacing={2} sx={{ mb: 2 }}>
                <Grid item md="3">
                  <Typography sx={{ fontFamily: "poppins", fontSize: 25 }}>
                    Director :
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: 20, fontFamily: "poppins" }}>
                    Jon Watts
                  </Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="start" spacing={2} sx={{ mb: 2 }}>
                <Grid item md="3">
                  <Typography sx={{ fontFamily: "poppins", fontSize: 25 }}>
                    Writer :
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: 20, fontFamily: "poppins" }}>
                    Chris McKenna, Erik Sommers, Stan Lee
                  </Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="start" spacing={2} sx={{ mb: 2 }}>
                <Grid item md="3">
                  <Typography sx={{ fontFamily: "poppins", fontSize: 25 }}>
                    Plot :
                  </Typography>
                </Grid>
                <Grid item md="9">
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontFamily: "poppins",
                      lineHeight: 1.7,
                    }}
                  >
                    With Spider-Mans identity now revealed, Peter asks Doctor
                    Strange for help. When a spell goes wrong, dangerous foes
                    from other worlds start to appear, forcing Peter to discover
                    what it truly means to be Spider-Man.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container alignItems="center" spacing={2} sx={{ mb: 5 }}>
                <Grid item md="3">
                  <Typography sx={{ fontFamily: "poppins", fontSize: 25 }}>
                    Released :
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: 23, fontFamily: "poppins" }}>
                    17 Dec 2021
                  </Typography>
                </Grid>
              </Grid>
              <Stack
                direction="row"
                alignItems="center"
                spacing={5}
                sx={{ mb: 2 }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <AccessTimeOutlinedIcon style={{ color: "#FF5722" }} />
                  <Typography sx={{ fontWeight: "bold", fontSize: 21 }}>
                    Length
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <ThumbUpOutlinedIcon style={{ color: "#FF5722" }} />
                  <Typography sx={{ fontWeight: "bold", fontSize: 21 }}>
                    Likes
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <StarOutlinedIcon style={{ color: "#FF5722" }} />
                  <Typography sx={{ fontWeight: "bold", fontSize: 21 }}>
                    Rating
                  </Typography>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <StarOutlinedIcon style={{ color: "#FF5722" }} />
                  <Typography sx={{ fontWeight: "bold", fontSize: 21 }}>
                    View
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Grid container sx={{ mb: 10 }} alignItems="center">
            <Grid item md={2} xs={2} sx={{ pl: !isMobile && 5, pt: 3 }}>
              <Stack alignItems="center">
                <Typography
                  sx={{ fontSize: isMobile ? 18 : 25, fontFamily: "poppins" }}
                >
                  Select Date
                </Typography>
                <CalendarMonthOutlinedIcon
                  sx={{
                    color: "#454545",
                    fontSize: isMobile ? 28 : 40,
                  }}
                />
              </Stack>
            </Grid>

            <Grid item md={10} xs={10} sx={{ mt: 3, pt: 5 }}>
              <Carousel />
            </Grid>

            {/* <Grid item md={10} sx={{ mt: 3, pt: 5 }}> */}
            {/* <Carousel /> */}
          </Grid>

          <PopUp />
          <Divider sx={{ my: 5 }} />
          <Grid container justifyContent="space-between" sx={{ my: 2 }}>
            <Grid item>
              <Button
                variant="text"
                style={{ color: "black", textTransform: "none" }}
                sx={{ fontSize: 24, fontFamily: "poppins" }}
              >
                More Movies
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                style={{ color: "black", textTransform: "none" }}
                sx={{ mr: 3 }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography sx={{ fontSize: 24, fontFamily: "poppins" }}>
                    Browse all
                  </Typography>
                  <ArrowDownwardOutlinedIcon />
                </Stack>
              </Button>
            </Grid>
          </Grid>
          <Container
            maxWidth={false}
            sx={{ my: 10 }}
            style={{
              paddingLeft: "2%",
              paddingRight: "5%",
            }}
          >
            <Grid
              container
              spacing={3}
              alignItems="center"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={3}>
                  {/* <Movie /> */}
                  {/* <Typography>jello</Typography> */}
                  <Movie movie={movies[0]} sx={{ m: 4 }} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
      </Box>
    </MainLayout>
  );
};
export default Description;
