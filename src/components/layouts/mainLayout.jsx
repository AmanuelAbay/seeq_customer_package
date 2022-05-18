import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import Header from "../navbar/Header";
import Footer from "../navbar/footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <CssBaseline />
    </>
  );
};

export default MainLayout;
