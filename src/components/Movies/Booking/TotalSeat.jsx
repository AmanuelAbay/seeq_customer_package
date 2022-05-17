import React, { useState } from "react";
import {
  List,
  ListItem,
  Stack,
  Typography,
  Box,
  Button,
  Grid,
} from "@mui/material";
import Seat from "../../views/Seat";
import Link from 'next/link'
export default function SeatSelection({ Book }) {
  const vip = [
    6, 16, 26, 36, 7, 8, 9, 10, 17, 18, 19, 20, 27, 28, 29, 30, 37, 38, 39, 40,
  ];


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "cetner",
        width: "100%",
      }}
    >
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          fontWeight: "bold",
          fontSize: 25,
          marginTop: 2,
          maxWidth: "100%",
          alignItems: "center",
        }}
      >
        <Grid container>
          {Array.from({ length: 40 }).map((currentElement, i) => (
            <Grid item md={1} sx={{ m: "0.2rem" }}>
              <ListItem>
                <Seat
                  seatNumber={i + 1}
                  status={vip.includes(i + 1) ? "vip" : "recliner"}
                />
              </ListItem>
            </Grid>
          ))}
        </Grid>
        <ListItem sx={{ width: "40%", marginTop: 2 }}>
          {/* {selectedSeat.length > 0 &&
            selectedSeat.map((seatNumber) => (
              <Typography
                variant="text"
                sx={{ width: "100%", textAlign: "center" }}
              >
                {seatNumber} ,{" "}
              </Typography>
            ))} */}
        </ListItem>
      </List>
      <Stack
        direction="row"
        spacing={7}
        sx={{
          width: "full",
          alignItems: "center",
          marginTop: 3,
        }}
      >
        <Stack alignItems="center">
          <Typography variant="text" component="p">
            VIP
          </Typography>
          <Box
            sx={{ width: "25px", height: "25px", backgroundColor: "#00ff00" }}
          ></Box>
        </Stack>
        <Stack alignItems="center">
          <Typography variant="text" component="p">
            Recliner
          </Typography>
          <Box
            sx={{ width: "25px", height: "25px", backgroundColor: "bar.main" }}
          ></Box>
        </Stack>
      </Stack>
      <Box width="100%" marginTop={5}>
        <Link href="/movie_description/ticket_preview">
          <Button
            variant="contained"
            sx={{
              width: "60%",
              backgroundColor: "bar.main",
              "&:hover": { backgroundColor: "bar.focusC" },
            }}
            onClick={Book}
          >
            Check Out
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
