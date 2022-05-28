import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
  Typography,
  Card,
  CardMedia,
  CssBaseline,
  Grid,
  Container,
  Button,
  Box,
  Stack,
} from "@mui/material";
import useStyles from "../../../styles/styles";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <footer className={classes.footer}>
      <Container style={{ backgroundColor: "#393E46" }} maxWidth={false}>
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{ fontFamily: "poppins" }}
              className={classes.footer3}
              variant="h3"
            >
              Seeq
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{ mb: 2, fontFamily: "poppins" }}
              className={classes.footer3}
              variant="h4"
            >
              Support
            </Typography>
            <Link href={"#"} style={{ textDecoration: "none" }}>
              <Typography className={classes.footer2} variant="h5">
                Help Center
              </Typography>
            </Link>
            <Link
              href={"#"}
              style={{ textDecoration: "none" }}
              underline="hover"
            >
              <Typography className={classes.footer2} variant="h5">
                About Us
              </Typography>
            </Link>
            <Link href={"#"} style={{ textDecoration: "none" }}>
              <Typography className={classes.footer2} variant="h5">
                FAQ
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{ mb: 2, fontFamily: "poppins" }}
              className={classes.footer3}
              variant="h4"
            >
              Get Started
            </Typography>
            <Link href={"#"} style={{ textDecoration: "none" }}>
              <Typography className={classes.footer2} variant="h5">
                Sign Up
              </Typography>
            </Link>
            <Link href={"#"} style={{ textDecoration: "none" }}>
              <Typography className={classes.footer2} variant="h5">
                Login
              </Typography>
            </Link>
            <Link href={"#"} style={{ textDecoration: "none" }}>
              <Typography className={classes.footer2} variant="h5">
                How it Works
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              sx={{ mb: 2, fontFamily: "poppins" }}
              className={classes.footer3}
              variant="h4"
            >
              Resources
            </Typography>
            <Link href={"#"} style={{ textDecoration: "none" }}>
              <Typography className={classes.footer2} variant="h5">
                Pricing
              </Typography>
            </Link>
            <Link
              href={"#"}
              style={{ textDecoration: "none" }}
              // className={classes.footer2}
            >
              <Typography className={classes.footer2} variant="h5">
                Feature
              </Typography>
            </Link>
          </Grid>
          <Grid item></Grid>
          <Grid item></Grid>
        </Grid>
        <Grid container justifyContent="space-between" sx={{ mt: 10 }}>
          <Grid item sx={{ ml: isMobile ? 1 : 15 }}>
            <Link href={"#"} style={{ textDecoration: "none" }}>
              <Typography variant="h5" className={classes.footer2}>
                @2022 Seeq
              </Typography>
            </Link>
            <Link href={"#"} style={{ textDecoration: "none" }}>
              <Typography variant="h5" className={classes.footer2}>
                privacy policy | Terms of use
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              gap={1}
              sx={{ mr: 10, mb: 5 }}
            >
              <Button>
                <FacebookIcon
                  fontSize="large"
                  sx={{ color: "white", "&:hover": { color: "#1877f2" } }}
                />
              </Button>
              <Button>
                <InstagramIcon
                  fontSize="large"
                  sx={{ color: "white", "&:hover": { color: "#c32aa3" } }}
                />
              </Button>
              <Button>
                <TwitterIcon
                  fontSize="large"
                  sx={{ color: "white", "&:hover": { color: "#1da1f2" } }}
                />
              </Button>
              <Button>
                <LinkedInIcon
                  fontSize="large"
                  sx={{ color: "white", "&:hover": { color: "#0a66c2" } }}
                />
              </Button>
              <Button>
                <YouTubeIcon
                  fontSize="large"
                  sx={{ color: "white", "&:hover": { color: "#ff0000" } }}
                />
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
export default Footer;
