import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import Header from "../navbar/AdminHeader";

const Layout = ({ children }) => {
  return (
    <>
      <Header position="fixed" />
      <main>{children}</main>
      <CssBaseline />
    </>
  );
};

export default Layout;
