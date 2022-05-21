import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import MainLayout from "../../src/components/layouts/mainLayout";

export default function TicketPreview(Book) {
  return (
    <Stack
      sx={{
        display: "flex",
        width: "100%",
        mx: "auto",
        marginTop: 2,
        alignItems: "center",
        border: "1px solid #48484850",
        backgroundColor: "yellow",
        paddingBottom: 2,
        marginBottom: 7,
      }}
      spacing={1}
    >
      {/* <Stack direction="row" spacing={1} width="100%"> */}
      {/* <img
        style={{ width: "75%", objectFit: "cover", borderRadius: 5 }}
        src="https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg"
        alt="Cover"
      /> */}
      <Stack sx={{ alignItems: "center" }} spacing={2.5}>
        <Typography
          variant="text"
          component="p"
          sx={{
            fontWeight: "bold",
            fontSize: 20,
            textTransform: "capitalize",
          }}
        >
          Avengers End Game
        </Typography>
        <Stack spacing={2.5} width="100%">
          <Stack direction="row" spacing={8}>
            <Stack direction="row">
              <Typography
                variant="text"
                component="p"
                sx={{
                  fontWeight: "bold",
                  fontSize: 15,
                  textTransform: "capitalize",
                }}
              >
                Name:-
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
                Andarg Worku
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="end">
              <Typography
                variant="text"
                component="p"
                sx={{
                  fontWeight: "bold",
                  fontSize: 15,
                  textTransform: "capitalize",
                }}
              >
                Date:-
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
                  fontWeight: "bold",
                  fontSize: 15,
                  textTransform: "capitalize",
                }}
              >
                Tickets:-
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
                5
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row">
            <Typography
              variant="text"
              sx={{
                fontWeight: "bold",
                fontSize: 15,
                textTransform: "capitalize",
              }}
            >
              <LocationOnIcon />
            </Typography>
            <Typography
              variant="text"
              sx={{
                fontSize: 15,
                textTransform: "capitalize",
                marginLeft: 1,
              }}
            >
              Addis Ababa, Century
            </Typography>
          </Stack>
        </Stack>
        <Button
          variant="contained"
          sx={{
            width: "50%",
            backgroundColor: "bar.main",
            "&:hover": { backgroundColor: "#de3400" },
          }}
          onClick={console.log("fuckoff")}
        >
          Confirm
        </Button>
      </Stack>
    </Stack>
  );
}
