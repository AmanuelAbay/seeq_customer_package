import React from "react";
import axios from "axios";
import MainLayout from "../../src/components/layouts/mainLayout";
import MyMap from "../../src/components/views/map";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import TicketConfirmation from "../../src/components/Events/Booking/TicketConfirmation";
import TicketPreview from "../../src/components/Events/Booking/TicketPreview";
import {
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Badge,
  CssBaseline,
  Grid,
  Container,
  Button,
  Box,
  Stack,
  Paper,
  IconButton,
} from "@mui/material";
import Event from "../../src/components/Cards/eventCard";
import { Divider } from "@mui/material";
import Link from "@mui/material/Link";
import { useEffect, useState } from "react";
import { useCallback } from "react";

const cards = [1, 2, 3, 4];

const Description = () => {
  const apiEndpoint4 = "https://warm-island-26970.herokuapp.com/events";
  const apiEndpoint =
    "https://warm-island-26970.herokuapp.com/events/6292504c60e182effbfb5022";
  const apiEndpoint2 =
    "https://warm-island-26970.herokuapp.com/event_organizers";
  const apiEndpoint3 =
    "https://warm-island-26970.herokuapp.com/register_ticket";
  const [event, setEvent] = useState([]);
  const [events, setEvents] = useState([""]);
  const [organizer, setOrganizer] = useState([]);
  const [standard, setStandard] = useState(0);
  const [vip, setVip] = useState(0);
  const [open, setOpen] = useState(false);
  const [ticketConfirmation, setTicketConfirmation] = useState(true);
  const [ticketPreview, setTicketPreview] = useState(false);
  const stPrice = 100;
  const vpPrice = 500;
  const [num2, setNum2] = useState(4);
  const sliced2 = events?.slice(0, num2);
  var gapi = window.gapi;
  var CLIENT_ID =
    "100401614857-c6nm9ie40k2j432u1emka58laf428qeq.apps.googleusercontent.com";
  var API_KEY = "AIzaSyA12LXxcqfPNfqzd0AapDDOIR6zN0P04ro";
  var DISCOVERY_DOCS = [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

  // const handleClickCalendar = () => {
  //   gapi?.load("client:auth2", () => {
  //     console.log("loaded client");

  //     gapi.client.init({
  //       apiKey: API_KEY,
  //       clientId: CLIENT_ID,
  //       discoveryDocs: DISCOVERY_DOCS,
  //       scope: SCOPES,
  //     });

  //     gapi.client.load("calendar", "v3", () => console.log("bam!"));

  //     gapi.auth2
  //       .getAuthInstance()
  //       .signIn()
  //       .then(() => {
  //         var event = {
  //           location: "800 Howard St., San Francisco, CA 94103",
  //           description: "Really great refreshments",
  //           start: {
  //             dateTime: "2020-06-28T09:00:00-07:00",
  //           },
  //           end: {
  //             dateTime: "2020-06-28T17:00:00-07:00",
  //             timeZone: "America/Los_Angeles",
  //           },
  //         };

  //         var request = gapi.client.calendar.events.insert({
  //           calendarId: "primary",
  //           resource: event,
  //         });

  //         request.execute((event) => {
  //           console.log(event);
  //           window.open(event.htmlLink);
  //         });
  //       });
  //   });
  // };

  const getEvents = useCallback(async () => {
    const res = await axios.get(apiEndpoint4);
    setEvents(res.data);
    console.log(events);
    console.log(res.data);
  }, [events]);

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleTicketPreview = () => {
    setTicketConfirmation(false);
    setTicketPreview(true);
  };

  // const handleBook = () => {
  // list of selected numbers will be displayed

  // redirect to ticket preview page
  //   setOpen(false);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const addStandard = () => {
    setStandard(standard + 1);
  };
  const addVip = () => {
    setVip(vip + 1);
  };

  const subtractVip = () => {
    vip > 0 && setVip(vip - 1);
  };

  const subtractStandard = () => {
    standard > 0 && setStandard(standard - 1);
  };

  const loadMore2 = () => {
    setNum2(num2 + num2);
  };

  const getEvent = useCallback(async () => {
    const res = await axios.get(apiEndpoint);
    setEvent(res.data);
    getOrganizer();
  }, [event]);

  const getOrganizer = useCallback(async () => {
    const res = await axios.get(apiEndpoint2);
    setOrganizer(res.data);
    console.log(res.data);
    console.log("heyy");
  }, [organizer]);

  const postTicketStandard = useCallback(async () => {
    try {
      const res = await axios.post(apiEndpoint3, {
        event_name: await event[0]?.name,
        customer_name: "alemayehu",
        organizer_name: await organizer[0]?.displayName,
        organizers_id: "9GN7L5szXIPwEfKmeD1QSO53Usw1",
        ticket_bought: standard,
        location: await event[0]?.address?.city,
        ticket_name: "Standard",
        picture_url: await event[0]?.picture_url,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }
  });

  const postTicketVip = useCallback(async () => {
    try {
      const res = await axios.post(apiEndpoint3, {
        event_name: await event[0]?.name,
        customer_name: "gizaw",
        organizer_name: await organizer[0]?.displayName,
        organizers_id: "9GN7L5szXIPwEfKmeD1QSO53Usw1",
        ticket_bought: vip,
        location: await event[0]?.address.city,
        ticket_name: "Vip",
        picture_url: await event[0]?.picture_url,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.response);
    }
  });

  const manageTicket = () => {
    standard && postTicketStandard();
    vip && postTicketVip();
    handleClose();
    window.location.reload(false);
  };

  useEffect(() => {
    getEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  {event[0]?.start?.date[0]}
                  {event[0]?.start?.date[1]}
                  {event[0]?.start?.date[2]}
                </Typography>
                <Typography sx={{ fontSize: 20, fontFamily: "poppins" }}>
                  {event[0]?.start?.date[4]}
                  {event[0]?.start?.date[5]}
                  {event[0]?.start?.date[6]}
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack alignItems="start">
                <Typography sx={{ fontFamily: "poppins", fontSize: 45 }}>
                  {event[0]?.name}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <FmdGoodOutlinedIcon />
                  <Typography sx={{ fontSize: 24, fontFamily: "poppins" }}>
                    {event[0]?.address?.city}{" "}
                  </Typography>
                  <FiberManualRecordIcon fontSize="small" />
                  <Typography sx={{ fontSize: 24, fontFamily: "poppins" }}>
                    Starts on {event[0]?.start?.date} at {event[0]?.start?.time}
                  </Typography>
                  <FiberManualRecordIcon fontSize="small" />
                  <Typography sx={{ fontSize: 24, fontFamily: "poppins" }}>
                    Ends at {event[0]?.end?.time}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Box>
            <img
              src={event[0]?.picture_url}
              alt={event[0]?.name}
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
                      {organizer[0]?.displayName}
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
                {event[0]?.description}
                {/* Start your Sunday morning amongst nature at a nice slow pace,
                restoring and rejuvenating the body and mind. Join Nicole
                Elliott on the deck in this Yin-Infused Yoga class,starting with
                a slow-flowing movement to get the body warm and the mind
                focused. Infusing some Yin-Style poses, passive stretches held
                for minutes at a time, enjoying the feeling of steadiness; and
                integrating some meditation and breathing practices to calm and
                rejuvenate the body,finishing with a nice long relaxation. */}
              </Typography>
              <Typography sx={{ fontFamily: "poppins", fontSize: 27, my: 2 }}>
                Location
              </Typography>
              <Stack>
                <MyMap
                  // lati={event[0]?.address?.latitude}
                  // long={event[0]?.address?.longitude}
                  sx={{ pl: 10 }}
                />
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
                    {event[0]?.start?.date} {event[0]?.start?.time}
                  </Typography>
                  {/* <Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ mb: 2 }}
                  >
                    <CalendarTodayOutlinedIcon style={{ color: "#3DB9B8" }} />
                    <Button
                      variant="text"
                      onClick={() => handleClickCalendar()}
                      sx={{
                        fontSize: 22,
                        fontFamily: "poppins",
                        color: "#3DB9B8",
                      }}
                    >
                      Add to calendar
                    </Button>
                  </Stack> */}
                  <Typography
                    sx={{ fontSize: 20, fontFamily: "poppins", mb: 3 }}
                  >
                    {event[0]?.address?.city}
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
                    {event[0]?.name}
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
                        {event?.ticket_availability?.tickets[0] ? (
                          event?.ticket_availability?.tickets[0]?.price
                        ) : (
                          <Typography
                            variant="h5"
                            style={{ color: "#333333", fontFamily: "poppins" }}
                          >
                            TICKETS FINISHED
                          </Typography>
                        )}
                        standard
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <IconButton onClick={() => subtractStandard()}>
                        <RemoveCircleOutlineOutlinedIcon fontSize="large" />
                      </IconButton>
                      <Typography sx={{ fontSize: 20 }}>{standard}</Typography>
                      <IconButton onClick={() => addStandard()}>
                        <AddCircleOutlineOutlinedIcon fontSize="large" />
                      </IconButton>
                    </Stack>
                  </Stack>
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
                        {event?.ticket_availability?.tickets[0] ? (
                          event?.ticket_availability?.tickets[0]?.price
                        ) : (
                          <Typography
                            variant="h5"
                            style={{ color: "#333333", fontFamily: "poppins" }}
                          >
                            TICKETS FINISHED
                          </Typography>
                        )}
                        vip
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <IconButton onClick={() => subtractVip()}>
                        <RemoveCircleOutlineOutlinedIcon fontSize="large" />
                      </IconButton>
                      <Typography sx={{ fontSize: 20 }}>{vip}</Typography>
                      <IconButton onClick={() => addVip()}>
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
                      {vip * vpPrice + standard * stPrice}
                    </Typography>
                  </Stack>
                  <Button
                    variant="contained"
                    // onClick={() => manageTicket()}
                    onClick={handleClickOpen}
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
                  <Button onClick={() => loadMore2()}>
                    <Typography
                      sx={{
                        fontSize: 24,
                        fontFamily: "poppins",
                        color: "#000",
                      }}
                    >
                      Browse all
                    </Typography>
                    <ArrowDownwardOutlinedIcon sx={{ color: "#000" }} />
                  </Button>
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
              {sliced2.map((event, card) => (
                <Grid item key={card} xs={12} sm={6} md={3}>
                  <Event event={event} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
        <Box height={150}></Box>
      </Box>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
        fullWidth={true}
        sx={{ textAlign: "center" }}
      >
        <Badge
          badgeContent={<CancelIcon backgroundColor="#555555" />}
          sx={{ marginRight: 3, marginTop: 3, cursor: "pointer" }}
          onClick={handleClose}
        />
        <Stack texAlign="center" sx={{ width: "100%" }}>
          <DialogContent sx={{ width: "100%" }}>
            <DialogContentText
              sx={{ width: "100%" }}
              id="alert-dialog-description"
            >
              {ticketConfirmation && (
                <TicketConfirmation Accept={handleTicketPreview} />
              )}
              {ticketPreview && <TicketPreview Back={manageTicket} />}
            </DialogContentText>
          </DialogContent>
        </Stack>
      </Dialog>
    </MainLayout>
  );
};
export default Description;
