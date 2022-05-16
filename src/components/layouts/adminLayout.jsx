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
          sm={2}
          md={2}
          lg={2}
          xl={2}
          sx={{
            backgroundColor:"#80808050",
            height: "full",
            alignItems: "center",
            textAlign: "center",
            borderRight: "1px solid #00000050",
            paddingLeft: "3px",
          }}
        >
          <SideNav />
        </Grid>
        <Grid item sm={10} md={10} lg={10} xl={10} marginTop={2}>
          <main>{children}</main>
        </Grid>
      </Grid>
      <CssBaseline />
    </>
  );
};

export default Layout;
