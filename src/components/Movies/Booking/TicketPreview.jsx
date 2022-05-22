import { Button, Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function TicketPreview() {
  return (
    <Stack
      sx={{
        display: "flex",
        width: "100%",
        mx: "auto",
        marginTop: 2,
        alignItems: "center",
        paddingBottom: 2,
      }}
      spacing={1}
    >
      <Stack direction="row" spacing={4} width="100%">
        <img
          style={{ width: "37%", objectFit: "cover", borderRadius: 5 }}
          src="https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg"
          alt="Cover"
        />
        <Stack sx={{ alignItems: "center" }} spacing={5} width="63%">
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
            <Stack direction="row" spacing={17}>
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
                  5, 6, 7, 9, 10
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
                Century, Addis Ababa
              </Typography>
            </Stack>
            <Stack sx={{ alignItems: "start", wdith: "full" }}>
              <Typography
                variant="text"
                sx={{
                  fontSize: 15,
                  textTransform: "capitalize",
                  marginLeft: 1,
                  marginTop: 2,
                  marginBottom: "0.15rem",
                }}
              >
                Price
              </Typography>
              <Divider sx={{ border: "1px solid #48484870", width: "100%" }} />
              <Stack
                direction="row"
                sx={{
                  display: "flex",
                  JustifyContent: "space-between",
                  width: "100%",
                  marginTop: 1,
                }}
                spacing={10}
              >
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
                    Regular:-
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
                    2 X 100
                  </Typography>
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
                    VIP:-
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
                    1 X 200
                  </Typography>
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
                    Total:-
                  </Typography>
                  <Typography
                    variant="text"
                    component="p"
                    sx={{
                      fontSize: 15,
                      textTransform: "capitalize",
                      marginLeft: 1,
                      fontWeight: "bold",
                    }}
                  >
                    400
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Button
            variant="contained"
            sx={{
              width: "50%",
              backgroundColor: "bar.main",
              "&:hover": { backgroundColor: "#de3400" }
            }}
            onClick={console.log("fuckoff")}
          >
            Confirm
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
