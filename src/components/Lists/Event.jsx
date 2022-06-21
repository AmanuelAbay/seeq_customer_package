import React from "react";
import Options from "../menu/Options";
import { Typography, Box, Stack, Avatar, Badge } from "@mui/material";

export default function Event({ ticket }) {
  console.log(ticket?.event_name);
  console.log("hey");
  return (
    <Box
      sx={{
        width: "100%",
        py: 1,
        marginTop: 2,
        paddingRight: 1,
        paddingLeft: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "55%" }}>
        <Box sx={{ display: "flex", justifyContent: "start" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6" component="div" color="red">
              OCT
            </Typography>
            <Typography variant="p" component="text" color="gray">
              21
            </Typography>
          </Box>
          <Box
            marginLeft={3}
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Box>
              <Avatar variant="square" alt="S" src={ticket?.picture_url} />
            </Box>
            <Stack paddingLeft={1.5}>
              <Typography
                variant="text"
                component="p"
                color="#000000"
                fontWeight={700}
              >
                {ticket?.event_name}
              </Typography>
              <Typography
                variant="text"
                component="p"
                color="#00000090"
                fontWeight={600}
                fontSize="small"
              >
                {ticket?.location}
              </Typography>
              <Typography
                variant="text"
                component="p"
                color="#00000090"
                fontWeight={500}
                fontSize="small"
              >
                Thursday, October 21, 2021 at 7:00 PM EAT
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "45%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="p"
          component="text"
          borderBottom="1px solid #000000"
          fontWeight="bold"
        >
          {ticket?.ticket_bought}
        </Typography>
        <Typography variant="p" component="text" fontWeight="bold">
          1450.00 ETB
        </Typography>
        {/* <Badge badgeContent={<Typography variant="text" component="text" fontWeight="bold">Canceled</Typography>} color="#FF5722"></Badge> */}
        <Typography variant="p" component="text" fontWeight="bold">
          canceled
        </Typography>
        <Options />
      </Box>
    </Box>
  );
}
