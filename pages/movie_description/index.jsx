import React, {useState} from "react";
import { Button, Container } from "@mui/material";
import PopUp from "../../src/components/Movies/Booking/PopUp"

export default function SeatSelection() {

return <Container>Description Page
      <Button onClick={()=>setPopUp(true)}>pop up</Button>
      <PopUp/>
  </Container>
}
