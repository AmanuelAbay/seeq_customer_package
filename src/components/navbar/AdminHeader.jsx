import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";

import Link from "next/dist/client/link";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Header() {

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#393E46", transform: "translateZ(0)" }}
    >
      <Toolbar>
        <Grid container row alignItems="center">
          <Grid item>
            <Link href="/">
              <Typography
                sx={{ cursor: "pointer", color: "white" }}
                variant="h6"
                component="div"
              >
                Seeq
              </Typography>
            </Link>
          </Grid>
          <Grid item sm></Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
