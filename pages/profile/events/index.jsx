import React, { useState } from "react";
import {
  Container,
  InputBase,
  Typography,
  Divider,
  Grid,
  FormControl,
  InputLabel,
  Select as Status,
  MenuItem,
  Box,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Event from "../../../src/components/Lists/Event";
import Layout from "../../../src/components/layouts/adminLayout";

export default function Events() {
  const [value, setValues] = useState("upcoming");

  const handleInputChange = (e) => {
    setValues(e.target.value);
  };

  return (
    <Layout>
      <Container maxWidth="xl">
        <Typography variant="h4" component="h4" sx={{ font: "bold" }}>
          Events
        </Typography>
        <Divider sx={{ borderColor: "#48484870" }} />
        <Grid container spacing={4} sx={{ marginTop: 1, alignItems: "center" }}>
          <Grid
            item
            xl={8}
            lg={8}
            md={8}
            sm={12}
            xs={12}
            sx={{ width: "100%" }}
          >
            <InputBase
              sx={{
                width: "100%",
                py: 1,
                px: 2,
                fontSize: "1rem",
                "&:hover": { backgroundColor: "#f1f1f1" },
                "& .MuiSvgIcon-root": {
                  marginRight: "8px",
                },
                border: "1px solid #00000070",
              }}
              placeholder="Search events"
              startAdornment={<SearchIcon fontSize="medium" />}
            />
          </Grid>
          <Grid
            item
            xl={4}
            lg={4}
            md={4}
            sm={12}
            xs={12}
            sx={{ width: "full" }}
          >
            <FormControl variant="outlined" sx={{ width: "100%" }}>
              <InputLabel>Status</InputLabel>
              <Status
                name="status"
                onChange={handleInputChange}
                value={value}
                label="Status"
                sx={{ width: "100%" }}
              >
                <MenuItem value="upcoming">Upcoming</MenuItem>
                <MenuItem value="canceled">Canceled</MenuItem>
                <MenuItem value="passed">Passed</MenuItem>
              </Status>
            </FormControl>
          </Grid>
        </Grid>
        <Box
          sx={{
            backgroundColor: "#80808030",
            width: "100%",
            py: 1.5,
            px: 2,
            marginTop: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "55%" }}>
            <Typography variant="p" component="text">
              Events
            </Typography>
          </Box>
          <Stack
            direction="row"
            sx={{ width: "45%", justifyContent: "space-between", marginRight:3 }}
          >
            <Typography variant="p" component="text">
              Tickets
            </Typography>
            <Typography variant="p" component="text">
              Payment
            </Typography>
            <Typography variant="p" component="text">
              Status
            </Typography>
            <Typography variant="p" component="text"></Typography>
          </Stack>
        </Box>
        <Event source="https://media.istockphoto.com/photos/cheering-crowd-of-unrecognized-people-at-a-rock-music-concert-concert-picture-id1189205501?k=20&m=1189205501&s=612x612&w=0&h=fexl_Cmu6AdLatIasGg_XYTkLSeWHCtvhMw1nK5_uDc=" />
        <Event source="https://media.istockphoto.com/photos/are-you-ready-to-party-picture-id1181169462?k=20&m=1181169462&s=612x612&w=0&h=Bl6aor50n-318v4vfwHRcg_w3OgMHmXWM6g0kUrSftk=" />
        <Event source="https://cc-prod.scene7.com/is/image/CCProdAuthor/concert-photography_P1_900x420?$pjpeg$&jpegSize=200&wid=900" />
        <Event source="https://cc-prod.scene7.com/is/image/CCProdAuthor/concert-photography_P1_900x420?$pjpeg$&jpegSize=200&wid=900" />
        <Event source="https://cc-prod.scene7.com/is/image/CCProdAuthor/concert-photography_P1_900x420?$pjpeg$&jpegSize=200&wid=900" />
        <Event source="https://cc-prod.scene7.com/is/image/CCProdAuthor/concert-photography_P1_900x420?$pjpeg$&jpegSize=200&wid=900" />
      </Container>
    </Layout>
  );
}
