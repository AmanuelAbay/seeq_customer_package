import { Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import QRCode from "react-qr-code";
import MainLayout from "../../src/components/layouts/mainLayout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

export default function TicketPreview() {
  const values = "Seeq";
  return (
    <MainLayout>
      <Paper
        sx={{
          width: "50%",
          mx: "auto",
          marginTop: 17,
          alignItems: "center",
          border: "1px solid #48484850",
          paddingBottom: 2,
          marginBottom: 7,
        }}
        spacing={1}
      >
        <Stack direction="row" spacing={3} padding={5} width="100%">
          <img
            style={{ width: "100%", objectFit: "contain", borderRadius: 5 }}
            src="https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg"
            alt="Cover"
          />
          <Stack sx={{ alignItems: "center" }} spacing={2.5} width="100%">
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
                  <address>Addis Ababa, Century</address>
                </Typography>
              </Stack>
            </Stack>
            <div style={{ background: "white", padding: "16px" }}>
              <QRCode value={values} />
            </div>
            <Link href="/">
              <a>
                <Stack
                  direction="row"
                  spacing={3}
                  alignItems="center"
                  marginTop={10}
                >
                  <ArrowBackIcon />
                  <Typography
                    variant="text"
                    component="p"
                    sx={{
                      fontWeight: "bold",
                      fontSize: 20,
                      textTransform: "capitalize",
                    }}
                  >
                    Back To Home
                  </Typography>
                </Stack>
              </a>
            </Link>
          </Stack>
        </Stack>
      </Paper>
    </MainLayout>
  );
}
