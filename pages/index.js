import React, { useEffect, useState } from "react";
import MainLayout from "../src/components/layouts/mainLayout";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Image from "next/image";

// asset imports
import image from "../src/assets/seeqApp.png";
import image2 from "../src/assets/aastuPartner.png";
import image3 from "../src/assets/number.png";
import image4 from "../src/assets/number1.png";
import image5 from "../src/assets/number2.png";
import image6 from "../src/assets/number3.png";
import image7 from "../src/assets/playstore.png";
import image8 from "../src/assets/AppStore.png";

// component imports
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import {
  Typography,
  Card,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  Button,
  Box,
  Stack,
} from "@mui/material";
import useStyles from "../styles/styles";
import Movie from "../src/components/Cards/movieCard";
import Showcase from "../src/components/showCase";
import Event from "../src/components/Cards/eventCard";
import { Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const partners = [1, 2, 3, 4];

const Home = () => {
  const classes = useStyles();
  const API_URL = "http://www.omdbapi.com?apikey=c15ef40d";
  const menus = ["Action", "Tragedy", "Romance", "Comedy", "Erotic"];
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("spiderman");
  const [num, setNum] = useState(4);
  const [num2, setNum2] = useState(4);
  const sliced = movies?.slice(0, num);
  const sliced2 = cards?.slice(0, num2);
  const title = "spider man";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  const loadMore = () => {
    setNum(num + num);
  };
  const loadMore2 = () => {
    setNum2(num2 + num2);
  };

  useEffect(() => {
    searchMovies(title);
  }, []);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <MainLayout>
      <Box sx={{ flexGrow: 1, backgroundColor: "#faffff" }}>
        <CssBaseline />
        <Showcase />
        <Container maxWidth={false}>
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item>
              <Typography
                sx={{
                  ml: 5,
                  mt: 3,
                  mb: 2,
                  fontFamily: "poppins",
                  fontSize: 50,
                }}
              >
                Movies in Town
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                disabled="true"
                style={{
                  color: "#000000",
                  fontFamily: "poppins1",
                  fontSize: 18,
                }}
                sx={{ mr: 2, mt: 4 }}
              >
                Genre :
              </Button>
              <Button
                ref={anchorRef}
                variant="outlined"
                style={{
                  color: "#000000",
                  fontFamily: "poppins1",
                  fontSize: 18,
                }}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ mr: 7, mt: 4 }}
                onClick={handleToggle}
              >
                All
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          {menus.map((menu) => (
                            <MenuItem onClick={handleClose}>{menu}</MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Grid>
          </Grid>
        </Container>
        <Divider />
        <Container maxWidth={false}>
          <Button
            style={{
              color: "#000000",
              fontSize: 18,
              fontFamily: "poppins1",
              textTransform: "none",
            }}
            sx={{ m: 3 }}
            component="button"
            variant="text"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            All
          </Button>
          <Button
            style={{
              color: "#000000",
              fontSize: 18,
              fontFamily: "poppins1",
              textTransform: "none",
            }}
            sx={{ m: 3 }}
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            English
          </Button>
          <Button
            style={{
              color: "#000000",
              fontSize: 18,
              fontFamily: "poppins1",
              textTransform: "none",
            }}
            sx={{ m: 3 }}
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Amharic
          </Button>
        </Container>
        <Container
          maxWidth={false}
          style={{ paddingLeft: "3.5%", paddingRight: "3.5%" }}
        >
          <Grid
            container
            spacing={3}
            alignItems="center"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            {sliced?.length > 0 ? (
              <>
                {sliced.map((movie, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <Link href="/movie_description">
                      <Movie movie={movie} />
                    </Link>
                  </Grid>
                ))}
              </>
            ) : (
              <Box alignItems="center" display="flex" justifyContent="center">
                <Typography
                  variant="h3"
                  textAlign="center"
                  sx={{ ml: "40%", mt: 3, fontFamily: "poppins1" }}
                >
                  No Movies Found :(
                </Typography>
              </Box>
            )}
          </Grid>
          {movies?.length > 4 && (
            <>
              <Box
                display="flex"
                justifyContent="center"
                style={{ marginBottom: 40, marginTop: 40 }}
              >
                <Button
                  variant="outlined"
                  endIcon={<KeyboardArrowDownIcon sx={{ pb: 0.25 }} />}
                  style={{
                    color: "#d63302",
                    fontSize: 18,
                    fontFamily: "poppins1",
                  }}
                  onClick={() => loadMore()}
                >
                  SEE MORE
                </Button>
              </Box>
              <Divider />
            </>
          )}
        </Container>
        <Box sx={{ mb: 5 }}></Box>
        <Container maxWidth={false}>
          <Grid container>
            <Grid item>
              <Typography
                sx={{ ml: 5, mt: 3, fontFamily: "poppins", fontSize: 50 }}
              >
                Events in Town
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth={false}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Button
                style={{
                  color: "#000000",
                  fontSize: 18,
                  fontFamily: "poppins1",
                  textTransform: "none",
                }}
                sx={{ m: 3 }}
                component="button"
                variant="text"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                All
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{
                  color: "#000000",
                  fontSize: 18,
                  fontFamily: "poppins1",
                  textTransform: "none",
                }}
                sx={{ m: 3 }}
                component="button"
                variant="text"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Health and Wellbeing
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{
                  color: "#000000",
                  fontSize: 18,
                  fontFamily: "poppins1",
                  textTransform: "none",
                }}
                sx={{ m: 3 }}
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Sport and Fitness
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{
                  color: "#000000",
                  fontSize: 18,
                  fontFamily: "poppins1",
                  textTransform: "none",
                }}
                sx={{ m: 3 }}
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Concert
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{
                  color: "#000000",
                  fontSize: 18,
                  fontFamily: "poppins1",
                  textTransform: "none",
                }}
                sx={{ m: 3 }}
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Exhibition
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{
                  color: "#000000",
                  fontSize: 18,
                  fontFamily: "poppins1",
                  textTransform: "none",
                }}
                sx={{ m: 3 }}
                component="button"
                variant="body2"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Entertainment
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Container
          maxWidth={false}
          style={{ paddingLeft: "3.5%", paddingRight: "3.5%" }}
        >
          <Grid container alignItems="center" spacing={3}>
            {sliced2.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Event />
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box
          display="flex"
          justifyContent="center"
          style={{ marginBottom: 40, marginTop: 40 }}
        >
          <Button
            variant="outlined"
            endIcon={<KeyboardArrowDownIcon sx={{ pb: 0.25 }} />}
            style={{ color: "#d63302", fontSize: 18 }}
            onClick={() => loadMore2()}
          >
            SEE MORE
          </Button>
        </Box>
        <Typography
          variant="h2"
          align="center"
          sx={{ flexGrow: 1, my: 7, fontFamily: "poppins1" }}
        >
          HOW IT WORKS - IN JUST 4 STEPS
        </Typography>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item md={6} align="center">
              <Image
                src={image}
                alt="Seeq Mobile App"
                height={600}
                width={300}
                // layout="responsive"
                sx={{ objectFit: "contain" }}
              />
            </Grid>
            <Grid item md={6}>
              <Stack direction="row" alignItems="center" gap={3}>
                <Image src={image3} alt={1} height={80} width={80} />
                <Typography sx={{ fontSize: 24, mb: 3, mt: 1 }}>
                  Signing up for free on Seeq Events gives you access to our
                  powerful event management and ticketing platform.
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={3}>
                <Box>
                  <Image src={image4} alt={2} height={120} width={120} />
                </Box>
                <Typography sx={{ fontSize: 24, mb: 3 }}>
                  Choose your event type , online or venue event, fill in the
                  details, set your ticket options, and publish! It is very
                  simple, but there are tons of ways to customize.
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={3}>
                <Image src={image5} alt={3} height={85} width={85} />
                <Typography sx={{ fontSize: 24, mb: 3 }}>
                  Signing up for free on Seeq Events gives you access to our
                  powerful event management and ticketing platform.
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={3}>
                <Image src={image6} alt={4} height={120} width={120} />
                <Typography sx={{ fontSize: 24, mb: 3 }}>
                  Choose your event type , online or venue event, fill in the
                  details, set your ticket options, and publish! It is very
                  simple, but there are tons of ways to customize.
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={4}>
                <Button>
                  <Image src={image7} alt="play store" />
                </Button>
                <Button>
                  <Image src={image8} alt="app store" />
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Typography
          variant="h2"
          align="center"
          sx={{ flexGrow: 1, my: 8, fontFamily: "poppins1" }}
        >
          Our Partners
        </Typography>
        <Container sx={{ mb: 5 }} className={classes.cardGrid} maxWidth="xl">
          <Grid container spacing={4}>
            {partners.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image2}
                    title="Image Title"
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Home;
