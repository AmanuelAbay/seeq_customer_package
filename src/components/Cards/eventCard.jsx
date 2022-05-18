import React from "react";
import useStyles from "../../../styles/styles";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { Stack } from "@mui/material";

const Event = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="https://source.unsplash.com/random"
        title="Image Title"
      />
      <CardContent className={classes.cardContent}>
        <Typography
          variant="h4"
          style={{ fontFamily: "poppins", color: "#333333" }}
          gutterBottom
        >
          Musical Concert
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1.5 }}>
          <FmdGoodOutlinedIcon fontSize="large" />
          <Typography
            variant="h5"
            style={{ color: "#333333", fontFamily: "Arial" }}
          >
            Ghion, Addis Ababa
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1.5 }}>
          <AttachMoneyOutlinedIcon fontSize="large" />
          <Typography
            variant="h5"
            style={{ color: "#333333", fontFamily: "Arial" }}
          >
            1500 ETB
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1.5 }}>
          <GradeOutlinedIcon fontSize="large" />
          <Typography
            variant="h5"
            style={{ color: "#333333", fontFamily: "Arial" }}
          >
            2500 ETB
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 1.5 }}>
          <AccessTimeIcon fontSize="large" />
          <Typography
            variant="h5"
            style={{ color: "#333333", fontFamily: "Arial" }}
          >
            Sun, 9:00 pm
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
  );
};
export default Event;
