import React from "react";
import MainLayout from "../../src/components/layouts/mainLayout";
import MyMap from "../../src/components/views/map";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import {
  Typography,
  CssBaseline,
  Grid,
  Container,
  Button,
  Box,
  Stack,
  Paper,
  IconButton,
} from "@mui/material";
import useStyles from "../../styles/styles";
import Event from "../../src/components/Cards/eventCard";
import { Divider } from "@mui/material";
import Link from "@mui/material/Link";

const cards = [1, 2, 3, 4];

const Description = () => {
  const classes = useStyles();
  return (
    <MainLayout>
      <Box sx={{ flexGrow: 1, backgroundColor: "#faffff" }}>
        <CssBaseline />
        <Container
          maxWidth={false}
          style={{
            paddingLeft: "6%",
            paddingRight: "6%",
          }}
        >
          <Grid
            container
            sx={{ pt: 15, mb: 3, alignItems: "center" }}
            spacing={3}
          >
            <Grid item>
              <Stack
                sx={{
                  border: 2,
                  borderColor: "#bfbdbd",
                  alignItems: "center",
                  px: 4,
                  py: 2,
                  mt: 2,
                  mb: 2,
                }}
              >
                <Typography sx={{ fontSize: 23, fontWeight: "bold" }}>
                  30
                </Typography>
                <Typography sx={{ fontSize: 20, fontFamily: "poppins" }}>
                  MAY
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack alignItems="start">
                <Typography sx={{ fontFamily: "poppins", fontSize: 45 }}>
                  The title of the event will be written here
                </Typography>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <FmdGoodOutlinedIcon />
                  <Typography sx={{ fontSize: 24, fontFamily: "poppins" }}>
                    Venue events{" "}
                  </Typography>
                  <FiberManualRecordIcon fontSize="small" />
                  <Typography sx={{ fontSize: 24, fontFamily: "poppins" }}>
                    Starts on monday 12:30
                  </Typography>
                  <FiberManualRecordIcon fontSize="small" />
                  <Typography sx={{ fontSize: 24, fontFamily: "poppins" }}>
                    1H 15M
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Box>
            <img
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469"
              alt="rophnan concert"
              style={{
                width: "100%",
                height: "70vh",
                objectFit: "cover",
              }}
            />
          </Box>
          <Grid
            container
            sx={{ mb: 15 }}
            spacing={8}
            justifyContent="space-between"
          >
            <Grid item md={7} xs={12}>
              <Grid container sx={{ mb: 5, alignItems: "center", mt: 2 }}>
                <Grid item md="3">
                  <img
                    src="https://source.unsplash.com/random"
                    alt="rophnan concert"
                    style={{
                      borderRadius: "14%",
                      maxWidth: "100%",
                      height: 175,
                      objectFit: "cover",
                      padding: 15,
                    }}
                  />
                </Grid>
                <Grid item>
                  <Box alignItems="start">
                    <Typography
                      sx={{
                        // fontWeight: "bold",
                        fontSize: 22,
                        fontFamily: "poppins",
                      }}
                    >
                      Organized by:
                    </Typography>
                    <Typography
                      sx={{
                        // fontWeight: "bold",
                        fontSize: 22,
                        fontFamily: "poppins",
                      }}
                    >
                      Jorka Entertainment
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Link style={{ textDecoration: "none" }}>
                        <Typography
                          sx={{
                            color: "#e84302",
                            fontFamily: "poppins",
                            fontSize: 20,
                          }}
                        >
                          More
                        </Typography>
                      </Link>
                      <Typography
                        sx={{
                          color: "#000000",
                          fontWeight: "bold",
                          fontSize: 20,
                        }}
                      >
                        |
                      </Typography>
                      <Link style={{ textDecoration: "none" }}>
                        <Typography
                          sx={{
                            color: "#e84302",
                            fontFamily: "poppins",
                            fontSize: 20,
                          }}
                        >
                          Contact
                        </Typography>
                      </Link>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
              <Divider />
              <Typography sx={{ fontFamily: "poppins", fontSize: 27, my: 2 }}>
                About this Event
              </Typography>
              <Typography
                sx={{ fontSize: 23, fontFamily: "poppins", lineHeight: 1.7 }}
              >
                Start your Sunday morning amongst nature at a nice slow pace,
                restoring and rejuvenating the body and mind. Join Nicole
                Elliott on the deck in this Yin-Infused Yoga class,starting with
                a slow-flowing movement to get the body warm and the mind
                focused. Infusing some Yin-Style poses, passive stretches held
                for minutes at a time, enjoying the feeling of steadiness; and
                integrating some meditation and breathing practices to calm and
                rejuvenate the body,finishing with a nice long relaxation.
              </Typography>
              <Typography sx={{ fontFamily: "poppins", fontSize: 27, my: 2 }}>
                Location
              </Typography>
              <Stack>
                <MyMap sx={{ pl: 10 }} />
              </Stack>
            </Grid>
            <Grid item md={4} xs={12}>
              <Paper sx={{ mt: 5, px: 3, py: 8 }} elevation={1}>
                <Stack direction="column">
                  <Typography
                    align="center"
                    sx={{ fontFamily: "poppins", fontSize: 24, mb: 3 }}
                  >
                    BOOKING ENDS
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item md="3">
                      <Stack direction="column" alignItems="center" spacing={1}>
                        <Box
                          sx={{
                            borderRadius: "20%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#FF5722",
                            px: 2,
                            py: 1.5,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 20,
                              fontWeight: "bold",
                              color: "white",
                            }}
                          >
                            01
                          </Typography>
                        </Box>
                        <Typography
                          sx={{ fontSize: 20, fontFamily: "poppins" }}
                        >
                          Days
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item md="3">
                      <Stack direction="column" alignItems="center" spacing={1}>
                        <Box
                          sx={{
                            borderRadius: "20%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#FF5722",
                            px: 2,
                            py: 1.5,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 20,
                              fontWeight: "bold",
                              color: "white",
                            }}
                          >
                            07
                          </Typography>
                        </Box>
                        <Typography
                          sx={{ fontSize: 20, fontFamily: "poppins" }}
                        >
                          Hours
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item md="3">
                      <Stack direction="column" alignItems="center" spacing={1}>
                        <Box
                          sx={{
                            borderRadius: "20%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#FF5722",
                            px: 2,
                            py: 1.5,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 20,
                              fontWeight: "bold",
                              color: "white",
                            }}
                          >
                            45
                          </Typography>
                        </Box>
                        <Typography
                          sx={{ fontSize: 20, fontFamily: "poppins" }}
                        >
                          Minutes
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item md="3">
                      <Stack direction="column" alignItems="center" spacing={1}>
                        <Box
                          sx={{
                            borderRadius: "20%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#FF5722",
                            px: 2,
                            py: 1.5,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 20,
                              fontWeight: "bold",
                              color: "white",
                            }}
                          >
                            26
                          </Typography>
                        </Box>
                        <Typography
                          sx={{ fontSize: 20, fontFamily: "poppins" }}
                        >
                          Seconds
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 3 }} />
                  <Typography
                    sx={{ fontSize: 20, fontFamily: "poppins", mb: 1.5 }}
                  >
                    Sun, May 30, 2021 2:00 AM
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: 2 }}
                  >
                    <CalendarTodayOutlinedIcon style={{ color: "#3DB9B8" }} />
                    <Typography
                      sx={{
                        fontSize: 22,
                        fontFamily: "poppins",
                        color: "#3DB9B8",
                      }}
                    >
                      Add to calendar
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{ fontSize: 20, fontFamily: "poppins", mb: 1.5 }}
                  >
                    Tumbling waters holiday park
                  </Typography>
                  <Typography
                    sx={{ fontSize: 20, fontFamily: "poppins", mb: 1.5 }}
                  >
                    Peninsula rd, Berry Springs, Northern
                  </Typography>
                  <Typography
                    sx={{ fontSize: 20, fontFamily: "poppins", mb: 3 }}
                  >
                    Territory 838, Australia
                  </Typography>
                  <Typography
                    sx={{ fontSize: 20, fontFamily: "poppins", mb: 1.5 }}
                  >
                    Select tickets
                  </Typography>
                  <Divider sx={{ mb: 3 }} />
                  <Typography
                    sx={{ fontSize: 20, fontFamily: "poppins", mb: 2 }}
                  >
                    Yin infused Yoga
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mb: 3 }}
                  >
                    <Stack direction="row" spacing={1}>
                      <Typography sx={{ fontSize: 24, fontFamily: "poppins" }}>
                        ETB
                      </Typography>
                      <Typography sx={{ fontSize: 24, fontFamily: "poppins" }}>
                        15.00
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <IconButton>
                        <RemoveCircleOutlineOutlinedIcon fontSize="large" />
                      </IconButton>
                      <Typography sx={{ fontSize: 20 }}>0</Typography>
                      <IconButton>
                        <AddCircleOutlineOutlinedIcon fontSize="large" />
                      </IconButton>
                    </Stack>
                  </Stack>
                  <Divider />
                  <Stack direction="row" spacing={1} sx={{ my: 3 }}>
                    <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
                      ETB
                    </Typography>
                    <Typography sx={{ fontSize: 24, fontWeight: "bold" }}>
                      15.00
                    </Typography>
                  </Stack>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#ff602d",
                      height: 50,
                      "&:hover": { backgroundColor: "#FF5119" },
                    }}
                  >
                    <Typography sx={{ fontSize: 19, fontWeight: "bold" }}>
                      Book Now
                    </Typography>
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
          <Divider />
          <Grid container justifyContent="space-between" sx={{ my: 5 }}>
            <Grid item>
              <Button
                variant="text"
                disabled="true"
                style={{
                  color: "black",
                  textTransform: "none",
                }}
                // sx={{ mr: 3 }}
              >
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Typography sx={{ fontSize: 24, fontFamily: "poppins" }}>
                    More Events
                  </Typography>
                </Stack>
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                style={{
                  color: "black",
                  textTransform: "none",
                }}
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
            style={{
              // paddingLeft: "5%",
              // paddingRight: "5%",
              marginTop: 5,
            }}
          >
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={3}>
                  <Event />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
        <Box height={150}></Box>
      </Box>
    </MainLayout>
  );
};
export default Description;
