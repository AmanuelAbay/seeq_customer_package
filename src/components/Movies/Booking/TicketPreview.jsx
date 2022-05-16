import { Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function TicketPreview() {
  return (
    <Paper
      sx={{ width: "35%", mx: "auto", marginTop:16, alignItems: "center", border: "1px solid #48484850", paddingBottom:2}}
      spacing={1}
    >
      <img
        style={{ width: "100%", objectFit: "contain", borderRadius: 5 }}
        src="https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg"
        alt="Cover"
      />
      <Stack sx={{ alignItems: "center" }} spacing={2.5}>
        <Typography
          variant="text"
          component="p"
          sx={{ fontWeight: "bold", fontSize: 20, textTransform: "capitalize" }}
        >
          Avengers End Game
        </Typography>
        <Stack spacing={2.5}>
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
              component="p"
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
              component="p"
              sx={{
                fontSize: 15,
                textTransform: "capitalize",
                marginLeft: 1,
              }}
            >
              <address>Addis Ababa, Ghion Hotel</address>
            </Typography>
          </Stack>
        </Stack>
        <Button variant="contained" component="div" sx={{width:"50%",backgroundColor:"bar.main", "&:hover":{backgroundColor:"#de3400"}}}>Book</Button>
      </Stack>
    </Paper>
  );
}
