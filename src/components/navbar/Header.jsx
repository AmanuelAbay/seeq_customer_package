import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import InputBase from "@mui/material/InputBase";
import { TextField, Typography, Grid } from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";

import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

// import { useEffect, useState } from "react";

export default function MenuAppBar() {
  // const API_URL = "http://www.omdbapi.com?apikey=c15ef40d";
  // const [movies, setMovies] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  // const searchMovies = async (title) => {
  //   const response = await fetch(`${API_URL}&s=${title}`);
  //   const data = await response.json();
  //   setMovies(data.Search);
  // };

  // useEffect(() => {
  //   searchMovies("");
  // }, []);
  const [open, setOpen] = React.useState(false);
  const menus = [
    {
      city: "Addis Ababa",
      lat: "9.0272",
      lng: "38.7369",
      country: "Ethiopia",
      iso2: "ET",
      admin_name: "Ādīs Ābeba",
      capital: "primary",
      population: "3041002",
      population_proper: "3041002",
    },
    {
      city: "Nazrēt",
      lat: "8.5500",
      lng: "39.2700",
      country: "Ethiopia",
      iso2: "ET",
      admin_name: "Oromīya",
      capital: "",
      population: "476892",
      population_proper: "213995",
    },
    {
      city: "Gonder",
      lat: "12.6000",
      lng: "37.4667",
      country: "Ethiopia",
      iso2: "ET",
      admin_name: "Āmara",
      capital: "",
      population: "323900",
      population_proper: "323900",
    },
    {
      city: "Mekele",
      lat: "13.4969",
      lng: "39.4769",
      country: "Ethiopia",
      iso2: "ET",
      admin_name: "Tigray",
      capital: "admin",
      population: "323700",
      population_proper: "323700",
    },
    {
      city: "Āwasa",
      lat: "7.0500",
      lng: "38.4667",
      country: "Ethiopia",
      iso2: "ET",
      admin_name: "YeDebub Bihēroch Bihēreseboch na Hizboch",
      capital: "admin",
      population: "300100",
      population_proper: "300100",
    },
    {
      city: "Dire Dawa",
      lat: "9.5833",
      lng: "41.8667",
      country: "Ethiopia",
      iso2: "ET",
      admin_name: "Dirē Dawa",
      capital: "admin",
      population: "277000",
      population_proper: "277000",
    },
    {
      city: "Bahir Dar",
      lat: "11.5850",
      lng: "37.3900",
      country: "Ethiopia",
      iso2: "ET",
      admin_name: "Āmara",
      capital: "admin",
      population: "243300",
      population_proper: "243300",
    },
    {
      city: "Harar",
      lat: "9.3200",
      lng: "42.1500",
      country: "Ethiopia",
      iso2: "ET",
      admin_name: "Hārerī Hizb",
      capital: "admin",
      population: "174994",
      population_proper: "147306",
    },
    {
      city: "Jijiga",
      lat: "9.3500",
      lng: "42.8000",
      country: "Ethiopia",
      iso2: "ET",
      admin_name: "Sumalē",
      capital: "admin",
      population: "159300",
      population_proper: "159300",
    },
    {
      city: "Āsosa",
      lat: "10.0670",
      lng: "34.5333",
      country: "Ethiopia",
      iso2: "ET",
      admin_name: "Bīnshangul Gumuz",
      capital: "admin",
      population: "30512",
      population_proper: "17872",
    },
    {
      city: "Gambēla",
      lat: "8.2500",
      lng: "34.5833",
      country: "Ethiopia",
      iso2: "ET",
      admin_name: "Gambēla Hizboch",
      capital: "admin",
      population: "",
      population_proper: "",
    },
    {
      city: "Semera",
      lat: "11.7956",
      lng: "41.0086",
      country: "Ethiopia",
      iso2: "ET",
      admin_name: "Āfar",
      capital: "admin",
      population: "",
      population_proper: "",
    },
  ];
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "#393E46" }}>
        <Toolbar>
          <Link href="/" style={{ textDecoration: "none" }}>
            <IconButton
              size="large"
              edge="start"
              aria-label="logo"
              sx={{ mr: 5, color: "white" }}
            >
              {/* <img src={seeqLogo} alt="seeq logo" /> */}
              <Typography variant="h3">Seeq</Typography>
            </IconButton>
          </Link>
          <Grid container justifyContent="space-between">
            <Grid item md={4}>
              <Paper>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item md={11}>
                    <InputBase
                      fullWidth={true}
                      sx={{
                        ml: 1,
                        py: 1.5,
                        px: 4,
                        "& input::placeholder": {
                          fontSize: 20,
                          fontFamily: "poppins1",
                        },
                      }}
                      placeholder="Search Movies or Events or anything you want"
                      inputProps={{ "aria-label": "Search movies or events" }}
                      // onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <IconButton
                      type="submit"
                      sx={{ py: "3px", pr: "7px" }}
                      aria-label="search"
                      // onClick={() => searchMovies(searchTerm)}
                    >
                      <SearchIcon fontSize="large" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                }}
                sx={{
                  mr: 3,
                  color: "#FFFFFF",
                  "&:hover": { color: "#fd7348" },
                }}
              >
                Events
              </Button>
              <Button
                variant="text"
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                }}
                sx={{
                  mr: 3,
                  color: "#FFFFFF",
                  "&:hover": { color: "#fd7348" },
                }}
              >
                Movies
              </Button>
              <Button
                ref={anchorRef}
                variant="text"
                style={{ color: "#ffffff", fontSize: 18 }}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{ mr: 7 }}
                onClick={handleToggle}
              >
                City
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
                            <MenuItem onClick={handleClose}>
                              {menu.city}
                            </MenuItem>
                          ))}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FF702a",
                  fontWeight: "bold",
                  fontSize: 18,
                  "&:hover": { backgroundColor: "#ff5119" },
                  mr: 3,
                }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}