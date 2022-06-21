import { Button, Paper, Stack, Typography, Box } from "@mui/material";
import React from "react";
// import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import brra from "../src/assets/brra.jpg";

export default function TicketConfirmation({ Accept }) {
  return (
    <Paper
      sx={{
        width: "35%",
        mx: "auto",
        marginTop: 16,
        alignItems: "center",
        border: "1px solid #48484850",
        paddingBottom: 2,
      }}
      spacing={1}
    >
      <img
        style={{ width: "100%", objectFit: "contain", borderRadius: 5 }}
        src="https://cdn.pixabay.com/photo/2018/01/15/21/50/concert-3084876_960_720.jpg"
        alt="Cover"
      />
      {/* <Box>
        <img
          src={brra}
          alt="Picture of event illustration"
          style={{ objectFit: "cover", height: 0 }}
          //   layout="responsive"
        />
      </Box> */}
      <Stack sx={{ alignItems: "center" }} spacing={2.5}>
        <Typography
          variant="text"
          component="p"
          sx={{
            fontWeight: "medium",
            fontFamily: "poppins",
            fontSize: 24,
            textTransform: "capitalize",
          }}
        >
          Bermil Fest<sub sx={{ mx: 1 }}> (concert) </sub>
        </Typography>
        <Stack spacing={2.5}>
          <Stack direction="row" spacing={8}>
            <Stack direction="row">
              <Typography
                variant="text"
                component="p"
                sx={{
                  fontWeight: "medium",
                  fontFamily: "poppins",
                  fontSize: 18,
                  textTransform: "capitalize",
                }}
              >
                Name:-
              </Typography>
              <Typography
                variant="text"
                component="p"
                sx={{
                  fontSize: 18,
                  fontWeight: "medium",
                  fontFamily: "poppins",
                  textTransform: "capitalize",
                  marginLeft: 1,
                }}
              >
                Andarg Worku
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="end">
              <Typography
                variant="text"
                component="p"
                sx={{
                  fontWeight: "medium",
                  fontFamily: "poppins",
                  fontSize: 18,
                  textTransform: "capitalize",
                }}
              >
                Date:-
              </Typography>
              <Typography
                variant="text"
                component="p"
                sx={{
                  fontSize: 18,
                  fontWeight: "medium",
                  fontFamily: "poppins",
                  textTransform: "capitalize",
                  marginLeft: 1,
                }}
              >
                Jan 02 2022, 7:00AM
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={18}>
            <Stack direction="row">
              <Typography
                variant="text"
                component="p"
                sx={{
                  fontWeight: "medium",
                  fontFamily: "poppins",
                  fontSize: 18,
                  textTransform: "capitalize",
                }}
              >
                Tickets:-
              </Typography>
              <Typography
                variant="text"
                component="p"
                sx={{
                  fontSize: 18,
                  fontWeight: "medium",
                  fontFamily: "poppins",
                  textTransform: "capitalize",
                  marginLeft: 1,
                }}
              >
                5
              </Typography>
            </Stack>
            {/* <Stack direction="row">
              <Typography
                variant="text"
                component="p"
                sx={{
                  fontWeight: "bold",
                  fontSize: 15,
                  textTransform: "capitalize",
                }}
              >
                Seat No.:-
              </Typography>
              <Typography
                variant="text"
                component="p"
                sx={{
                  fontSize: 15,
                  textTransform: "capitalize",
                  marginLeft: 1,
                }}
              >
                5, 8, 7, 10
              </Typography>
            </Stack> */}
          </Stack>
          <Stack direction="row">
            {/* <Typography
              variant="text"
              component="p"
              sx={{
                fontWeight: "bold",
                fontSize: 15,
                textTransform: "capitalize",
              }}
            > */}
            <LocationOnIcon />
            {/* </Typography> */}
            <Typography
              variant="text"
              component="p"
              sx={{
                fontSize: 18,
                textTransform: "capitalize",
                marginLeft: 1,
              }}
            >
              <address>Addis Ababa, Ghion Hotel</address>
            </Typography>
          </Stack>
        </Stack>
        <Button
          variant="contained"
          component="div"
          onClick={Accept}
          sx={{
            width: "50%",
            backgroundColor: "bar.main",
            "&:hover": { backgroundColor: "#de3400" },
          }}
        >
          Check Out
        </Button>
      </Stack>
    </Paper>
  );
}
