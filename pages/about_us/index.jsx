import React from "react";
import MainLayout from "../../src/components/layouts/mainLayout";
import MyMap from "../../src/components/views/map";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import {
  Typography,
  CssBaseline,
  Grid,
  Container,
  Button,
  Box,
  Stack,
  Paper,
  IconButton,
} from "@mui/material";
import useStyles from "../../styles/styles";
import Event from "../../src/components/Cards/eventCard";
import { Divider } from "@mui/material";
import Link from "@mui/material/Link";

const cards = [1, 2, 3, 4];

const Description = () => {
  const classes = useStyles();
  return (
    <MainLayout>
      <Typography>heyyy</Typography>
    </MainLayout>
  );
};
export default Description;
