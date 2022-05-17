import React, { useState } from "react";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import { Stack, Typography } from "@mui/material";

export default function Header({ seatNumber, status }) {
  const [isSelected, setSelected] = useState(false);
  return (
    <Stack
      alignItems="center"
      sx={{ cursor: "pointer" }}
      onClick={() => {
        setSelected(!isSelected);
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>{seatNumber}</Typography>
      <EventSeatIcon
        sx={{
          fontWeight: "bold",
          fontSize: 40,
          color: status === "vip" ? "#00FF00" : "#FF5722",
          border: isSelected ? "4px solid #393E46" : "1px solid black",
          borderRadius: 25,
          p: 1,
        }}
      />
    </Stack>
  );
}
