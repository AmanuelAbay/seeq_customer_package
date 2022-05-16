import React from "react";
import { List, ListItem, Stack, Typography, Box, Button } from "@mui/material";
import EventSeatIcon from "@mui/icons-material/EventSeat";

export default function SeatSelection({ Agree }) {
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
      <Stack
        direction="row"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "70%",
        }}
      >
        <EventSeatIcon
          color="bar.main"
          sx={{
            fontWeight: "bold",
            color: "bar.main",
            fontSize: 50,
          }}
        />
        <EventSeatIcon
          color="bar.main"
          sx={{
            fontWeight: "bold",
            color: "bar.main",
            fontSize: 50,
          }}
        />
        <EventSeatIcon
          color="bar.main"
          sx={{
            fontWeight: "bold",
            color: "bar.main",
            fontSize: 50,
          }}
        />
        <EventSeatIcon
          color="bar.main"
          sx={{
            fontWeight: "bold",
            color: "bar.main",
            fontSize: 50,
          }}
        />
        <EventSeatIcon
          color="bar.main"
          sx={{
            fontWeight: "bold",
            color: "bar.main",
            fontSize: 50,
          }}
        />
      </Stack>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          fontWeight: "bold",
          fontSize: 25,
          marginTop: 2,
          width: "90%",
        }}
      >
        <ListItem
          sx={{
            "&:active": {
              backgroundColor: "#FF5722",
              borderRadius: 25,
              color: "white",
              alignItems: "center",
              textAlign: "center",
              p: "auto",
              mx: 2,
            },
            "&:focus": {
              backgroundColor: "#FF5722",
              borderRadius: 25,
              color: "white",
              alignItems: "center",
              textAlign: "center",
              p: "auto",
              mx: 2,
            },
            cursor: "pointer",
          }}
        >
          1
        </ListItem>
        <ListItem>2</ListItem>
        <ListItem>3</ListItem>
        <ListItem>4</ListItem>
        <ListItem>5</ListItem>
        <ListItem>6</ListItem>
        <ListItem>7</ListItem>
        <ListItem>8</ListItem>
        <ListItem>9</ListItem>
        <ListItem>10</ListItem>
      </List>
      <Stack
        direction="row"
        spacing={7}
        sx={{
          width: "full",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Stack alignItems="center">
          <Typography variant="text" component="p">
            VIP
          </Typography>
          <Typography fontWeight="bold" variant="text" component="p">
            150ETB
          </Typography>
        </Stack>
        <Stack alignItems="center">
          <Typography variant="text" component="p">
            Recliner
          </Typography>
          <Typography fontWeight="bold" variant="text" component="p">
            100ETB
          </Typography>
        </Stack>
      </Stack>
      <Box width="100%" marginTop={5}>
        <Button
          variant="contained"
          sx={{
            width: "60%",
            backgroundColor: "bar.main",
            "&:hover": { backgroundColor: "bar.focusC" },
          }}
          onClick={Agree}
        >
          Agree
        </Button>
      </Box>
    </Box>
  );
}
