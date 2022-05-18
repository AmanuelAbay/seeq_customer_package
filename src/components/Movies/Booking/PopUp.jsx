import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Badge,
  Stack,
  Typography,
  Paper,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import TermsAndPolicy from "./TermsAndPolicy";
import SeatSelection from "./SeatSelection";
import TotalSeat from "./TotalSeat";
import CancelIcon from "@mui/icons-material/Cancel";

export default function AddMovies({ popup }) {
  const [open, setOpen] = useState(popup);
  const [terms, setTerms] = useState(true);
  const [numberOfSeat, setNumberOfSeat] = useState(false);
  const [seatSelection, setSeatSelection] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSeatSelection = () => {
    setTerms(false);
    setNumberOfSeat(true);
  };

  const handleTotalSeat = () => {
    setNumberOfSeat(false);
    setSeatSelection(true);
  };

  const handleBook = () => {
    // list of selected numbers will be displayed

    // redirect to ticket preview page
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Paper elevation={0} sx={{ px: 3, py: 5 }}>
        <Stack direction="column" alignItems="center" spacing={5}>
          <Grid container alignItems="center">
            <Grid item md="4">
              <Typography
                sx={{ fontSize: 25, fontFamily: "poppins1" }}
                align="center"
              >
                Century
              </Typography>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={12}>
                <Button sx={{ color: "#ff5722" }} onClick={handleClickOpen}>
                  <Stack
                    sx={{
                      border: 2,
                      borderColor: "#bfbdbd",
                      alignItems: "center",
                      px: 5,
                      py: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                      4:30 pm
                    </Typography>
                  </Stack>
                </Button>
                <Button sx={{ color: "#ff5722" }}>
                  <Stack
                    sx={{
                      border: 2,
                      borderColor: "#bfbdbd",
                      alignItems: "center",
                      px: 5,
                      py: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                      9:30 pm
                    </Typography>
                  </Stack>
                </Button>
                <Button sx={{ color: "#ff5722" }}>
                  <Stack
                    sx={{
                      border: 2,
                      borderColor: "#bfbdbd",
                      alignItems: "center",
                      px: 5,
                      py: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                      1:30 pm
                    </Typography>
                  </Stack>
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Divider style={{ width: "100%" }} />
          <Grid container alignItems="center">
            <Grid item md="4">
              <Typography
                sx={{ fontSize: 25, fontFamily: "poppins1" }}
                align="center"
              >
                Gast
              </Typography>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={12}>
                <Button sx={{ color: "#ff5722" }}>
                  <Stack
                    sx={{
                      border: 2,
                      borderColor: "#bfbdbd",
                      alignItems: "center",
                      px: 5,
                      py: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                      4:30 pm
                    </Typography>
                  </Stack>
                </Button>
                <Button sx={{ color: "#ff5722" }}>
                  <Stack
                    sx={{
                      border: 2,
                      borderColor: "#bfbdbd",
                      alignItems: "center",
                      px: 5,
                      py: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                      9:30 pm
                    </Typography>
                  </Stack>
                </Button>
                <Button sx={{ color: "#ff5722" }}>
                  <Stack
                    sx={{
                      border: 2,
                      borderColor: "#bfbdbd",
                      alignItems: "center",
                      px: 5,
                      py: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                      1:30 pm
                    </Typography>
                  </Stack>
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Divider style={{ width: "100%" }} />
          <Grid container alignItems="center">
            <Grid item md="4">
              <Typography
                sx={{ fontSize: 25, fontFamily: "poppins1" }}
                align="center"
              >
                Edna Mall
              </Typography>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={12}>
                <Button sx={{ color: "#ff5722" }}>
                  <Stack
                    sx={{
                      border: 2,
                      borderColor: "#bfbdbd",
                      alignItems: "center",
                      px: 5,
                      py: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                      4:30 pm
                    </Typography>
                  </Stack>
                </Button>
                <Button sx={{ color: "#ff5722" }}>
                  <Stack
                    sx={{
                      border: 2,
                      borderColor: "#bfbdbd",
                      alignItems: "center",
                      px: 5,
                      py: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                      9:30 pm
                    </Typography>
                  </Stack>
                </Button>
                <Button sx={{ color: "#ff5722" }}>
                  <Stack
                    sx={{
                      border: 2,
                      borderColor: "#bfbdbd",
                      alignItems: "center",
                      px: 5,
                      py: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                      1:30 pm
                    </Typography>
                  </Stack>
                </Button>
              </Stack>
            </Grid>
          </Grid>
          <Divider style={{ width: "100%" }} />
          <Grid container alignItems="center">
            <Grid item md="4">
              <Typography
                sx={{ fontSize: 25, fontFamily: "poppins1" }}
                align="center"
              >
                Alem Cinema
              </Typography>
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={12}>
                <Button sx={{ color: "#ff5722" }}>
                  <Stack
                    sx={{
                      border: 2,
                      borderColor: "#bfbdbd",
                      alignItems: "center",
                      px: 5,
                      py: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                      4:30 pm
                    </Typography>
                  </Stack>
                </Button>
                <Button sx={{ color: "#ff5722" }}>
                  <Stack
                    sx={{
                      border: 2,
                      borderColor: "#bfbdbd",
                      alignItems: "center",
                      px: 5,
                      py: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                      9:30 pm
                    </Typography>
                  </Stack>
                </Button>
                <Button sx={{ color: "#ff5722" }}>
                  <Stack
                    sx={{
                      border: 2,
                      borderColor: "#bfbdbd",
                      alignItems: "center",
                      px: 5,
                      py: 1,
                    }}
                  >
                    <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                      1:30 pm
                    </Typography>
                  </Stack>
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
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
          <DialogTitle id="alert-dialog-title">
            {terms && (
              <Typography variant="text" component="p">
                Terms and conditions
              </Typography>
            )}
            {numberOfSeat && (
              <Typography variant="text" component="p">
                How Many Seat?
              </Typography>
            )}
            {seatSelection && (
              <Typography variant="text" component="p">
                Select Seats
              </Typography>
            )}
          </DialogTitle>
          <DialogContent sx={{ width: "100%" }}>
            <DialogContentText
              sx={{ width: "100%" }}
              id="alert-dialog-description"
            >
              {terms && (
                <TermsAndPolicy
                  Decline={handleClose}
                  Accept={handleSeatSelection}
                />
              )}
              {numberOfSeat && <SeatSelection Agree={handleTotalSeat} />}
              {seatSelection && <TotalSeat Book={handleBook} />}
            </DialogContentText>
          </DialogContent>
        </Stack>
      </Dialog>
    </>
  );
}
