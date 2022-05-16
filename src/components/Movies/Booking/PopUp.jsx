import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  Badge,
  Stack,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TermsAndPolicy from "./TermsAndPolicy";
import SeatSelection from "./SeatSelection";
import TotalSeat from "./TotalSeat";
import CancelIcon from "@mui/icons-material/Cancel";

export default function AddMovies() {
  const [open, setOpen] = useState(false);
  const [terms, setTerms] = useState(true);
  const [numberOfSeat, setNumberOfSeat] = useState(false);
  const [seatSelection, setSeatSelection] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSeatSelection = ()=> {
      setTerms(false);
      setNumberOfSeat(true);
  }

  const handleTotalSeat = () => {
      setNumberOfSeat(false);
      setSeatSelection(true);
  }

  const handleBook = () => {

    // list of selected numbers will be displayed

    // redirect to ticket preview page
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <AddCircleIcon onClick={handleClickOpen} cursor="pointer" />
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
            {terms && <Typography variant="text" component="p">Terms and conditions</Typography>}
            {numberOfSeat && <Typography variant="text" component="p">How Many Seat?</Typography>}
            {seatSelection && <Typography variant="text" component="p">Select Seats</Typography>}
          </DialogTitle>
          <DialogContent sx={{ width: "100%" }}>
            <DialogContentText
              sx={{ width: "100%" }}
              id="alert-dialog-description"
            >
                { terms && <TermsAndPolicy Accept={handleSeatSelection}/>}
                { numberOfSeat && <SeatSelection Agree={handleTotalSeat} />}
                { seatSelection && <TotalSeat Book={handleBook}/>}
            </DialogContentText>
          </DialogContent>
        </Stack>
      </Dialog>
    </Box>
  );
}
