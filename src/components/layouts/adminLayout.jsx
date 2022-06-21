import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import Header from "../navbar/AdminHeader";
import SideNav from "../navbar/SideBar";

const Layout = ({ children }) => {
  return (
    <>
      <Header position="fixed" />
      <Grid container spacing={3} sx={{ marginTop: 8.5 }}>
        <Grid
          item
          sm={2.5}
          md={2.5}
          lg={2.5}
          xl={2.5}
          sx={{
            backgroundColor: "#d6d4d4",
            height: "full",
            alignItems: "center",
            textAlign: "center",
            borderRight: "1px solid #bfbdbd",
            paddingLeft: "3px",
          }}
        >
          <SideNav />
        </Grid>
        <Grid item sm={9} md={9} lg={9} xl={9} marginTop={2} marginBottom={3}>
          <main>{children}</main>
        </Grid>
      </Grid>
      <CssBaseline />
    </>
  );
};

export default Layout;
