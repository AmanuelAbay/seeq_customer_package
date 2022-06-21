import React from "react";
import useStyles from "../../../styles/styles";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { Stack, Box } from "@mui/material";
import Link from "next/link";

const Event = ({ event }) => {
  const classes = useStyles();
  return (
    <Link href="/">
      <Box>
        <Card className={classes.card} sx={{ cursor: "pointer" }}>
          <CardMedia
            className={classes.cardMedia}
            image={event?.picture_url}
            title={event?.name}
            sx={{ cursor: "pointer" }}
          />
          <CardContent className={classes.cardContent}>
            <Typography
              variant="h4"
              sx={{ cursor: "pointer" }}
              style={{ fontFamily: "poppins", color: "#333333" }}
              gutterBottom
            >
              {event?.name}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ mb: 1.5 }}
            >
              <FmdGoodOutlinedIcon fontSize="large" />
              <Typography
                variant="h5"
                style={{ color: "#333333", fontFamily: "poppins" }}
              >
                {event?.address?.city}
              </Typography>
            </Stack>
            {!event?.ticket_availability?.tickets[0] ? (
              <Typography
                sx={{ m: 4.5 }}
                variant="h5"
                style={{ fontFamily: "poppins", color: "#333333" }}
                gutterBottom
              >
                NO TICKETS AVAILABLE
              </Typography>
            ) : (
              <>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{ mb: 1.5 }}
                >
                  <AttachMoneyOutlinedIcon fontSize="large" />
                  <Typography
                    variant="h5"
                    style={{ color: "#333333", fontFamily: "poppins" }}
                  >
                    {event?.ticket_availability?.tickets[0] ? (
                      event?.ticket_availability?.tickets[0]?.price
                    ) : (
                      <Typography
                        variant="h5"
                        style={{ color: "#333333", fontFamily: "poppins" }}
                      >
                        TICKETS FINISHED
                      </Typography>
                    )}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{ mb: 1.5 }}
                >
                  <GradeOutlinedIcon fontSize="large" />
                  <Typography
                    variant="h5"
                    style={{ color: "#333333", fontFamily: "poppins" }}
                  >
                    {event?.ticket_availability?.tickets[1] ? (
                      event?.ticket_availability?.tickets[1]?.price
                    ) : (
                      <Typography
                        variant="h5"
                        style={{ color: "#333333", fontFamily: "poppins" }}
                      >
                        TICKETS FINISHED
                      </Typography>
                    )}
                  </Typography>
                </Stack>
              </>
            )}
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ mb: 1.5 }}
            >
              <AccessTimeIcon fontSize="large" />
              <Typography
                variant="h5"
                style={{ color: "#333333", fontFamily: "poppins" }}
              >
                {event?.start?.date} , {event?.start?.time}
              </Typography>
            </Stack>
          </CardContent>
          {/* <CardActions>
        <Button size="small" color="primary">
          VIEW
        </Button>
        <Button size="small" color="primary">
          EDIT
        </Button>
      </CardActions> */}
        </Card>
      </Box>
    </Link>
  );
};
export default Event;
