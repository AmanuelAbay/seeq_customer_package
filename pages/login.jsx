import {
  Button,
  Grid,
  Box,
  Typography,
  Stack,
  InputBase,
  Divider,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import login from "../src/assets/login.jpg";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Layout from "../src/components/layouts/authLayout";
import Link from "next/link";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

export default function LogIn() {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Layout>
      <Box sx={{ marginTop: 8, height: "full", pl: "5%", pr: "7%" }}>
        <Grid container spacing={2}>
          <Grid
            item
            md={6}
            borderRight="1px solid #FF702a"
            height="auto"
            paddingRight={1}
            display="flex"
            justifyContent="center"
            sx={{ mt: "10%" }}
          >
            {/* <img
              style={{ width: "50%", height: "50vh", objectFit: "cover" }}
              src={login}
              alt="Cover"
            /> */}
            <Box>
              <Image
                src={login}
                alt="Picture of event illustration"
                style={{ objectFit: "cover", height: 0 }}
                // layout="responsive"
              />
            </Box>
          </Grid>
          <Grid
            item
            md={5}
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 17 }}
          >
            <Stack sx={{ width: "100%", alignItems: "center" }}>
              <Typography
                textTransform="uppercase"
                color="bar.main"
                fontWeight="bold"
                fontSize={40}
              >
                Welcome
              </Typography>
            </Stack>
            <Stack
              sx={{ px: 1, width: "100%", marginTop: 3, alignItems: "center" }}
              spacing="0.9rem"
            >
              <Stack width="80%">
                <Typography
                  variant="text"
                  component="p"
                  sx={{
                    fontWeight: "medium",
                    fontSize: 20,
                    fontFamily: "poppins",
                    color: "#000",
                  }}
                >
                  Email
                </Typography>
                <InputBase
                  sx={{
                    width: "100%",
                    fontSize: "1.1rem",
                    fontFamily: "poppins",
                    color: "#000",
                    "&:hover": { backgroundColor: "#f1f1f1" },
                    "& .MuiSvgIcon-root": {
                      marginRight: "8px",
                    },
                    border: "1px solid #bfbdbd",
                    // borderRadius: 1,
                    // px: 2,
                    py: "0.15rem",
                    marginTop: "2px",
                  }}
                  type="email"
                  required
                />
              </Stack>
              <Stack width="80%">
                <Typography
                  variant="text"
                  component="p"
                  sx={{
                    fontWeight: "medium",
                    fontSize: 20,
                    fontFamily: "poppins",
                    color: "#000",
                  }}
                >
                  Password
                </Typography>
                <InputBase
                  sx={{
                    width: "100%",
                    fontSize: "1.1rem",
                    fontFamily: "poppins",
                    color: "#000",
                    "&:hover": { backgroundColor: "#f1f1f1" },
                    "& .MuiSvgIcon-root": {
                      marginRight: "8px",
                    },
                    border: "1px solid #bfbdbd",
                    // borderRadius: 1,
                    // px: 2,
                    py: "0.15rem",
                    marginTop: "2px",
                  }}
                  endAdornment={
                    <IconButton onClick={() => togglePassword()}>
                      <VisibilityOutlinedIcon
                        sx={{ mr: 1.5 }}
                        fontSize="medium"
                      />
                    </IconButton>
                  }
                  type={passwordShown ? "text" : "password"}
                  required
                />
                <Typography
                  variant="text"
                  component="p"
                  sx={{
                    fontWeight: "medium",
                    marginTop: "0.1rem",
                    fontSize: 18,
                    fontFamily: "poppins",
                    color: "bar.main",
                    width: "100%",
                    textAlign: "end",
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                    py: "0.1rem",
                  }}
                >
                  Forgot Password?
                </Typography>
              </Stack>
              <Stack
                width="80%"
                sx={{ alignItems: "center", textAlign: "center" }}
              >
                <FormGroup
                  sx={{ width: "100%", alignItems: "start", marginTop: -2 }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: "bar.main",
                          "&$checked": { color: "#FF702a" },
                        }}
                      />
                    }
                    label="Remember"
                  />
                </FormGroup>
                <Button
                  variant="contained"
                  sx={{
                    fontWeight: "medium",
                    py: 1.5,
                    my: 2,
                    width: "100%",
                    backgroundColor: "bar.main",
                    py: 1,
                    "&:hover": { backgroundColor: "#de3400" },
                    "&:focus": { outline: "none" },
                    "&:active": { outline: "none" },
                    textTransform: "capitalize",
                  }}
                >
                  <Typography>LOG IN</Typography>
                </Button>
              </Stack>
              <Stack
                direction="row"
                width="80%"
                sx={{ alignItems: "center", textAlign: "center" }}
              >
                <Divider
                  sx={{
                    border: "0.5px solid #bfbdbd",
                    width: "45%",
                  }}
                />
                <Typography
                  variant="text"
                  component="p"
                  fontSize={18}
                  width="100%"
                >
                  Or
                </Typography>
                <Divider
                  sx={{
                    border: "0.5px solid #bfbdbd",
                    width: "45%",
                  }}
                />
              </Stack>
              <Stack
                direction="row"
                width="80%"
                sx={{ alignItems: "center", textAlign: "center" }}
              >
                <Button
                  variant="outlined"
                  alignItems="center"
                  startIcon={<GoogleIcon sx={{ color: "orange", ml: -5 }} />}
                  sx={{
                    width: "100%",
                    my: 3,
                    color: "black",
                    border: 1,
                    borderColor: "#bfbdbd",
                    "& .MuiButton-startIcon": { marginRight: 7 },
                    "& .MuiButton-endIcon": { marginLeft: 7 },
                    "&:hover": {
                      border: "1px solid grey",
                    },
                  }}
                  // endIcon={<ArrowRightAltIcon />}
                >
                  <Typography sx={{ py: 1, fontWeight: "medium", ml: -3 }}>
                    Sign up with google
                  </Typography>
                </Button>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Typography
                  variant="text"
                  component="p"
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "1.1rem",
                    fontWeight: "medium",
                    fontFamily: "poppins",
                    mt: -4,
                  }}
                >
                  New here?
                </Typography>
                <Link href="/register">
                  <Typography
                    variant="text"
                    component="p"
                    sx={{
                      mt: -4,
                      fontSize: "1.1rem",
                      fontWeight: "medium",
                      fontFamily: "poppins",
                      color: "bar.main",
                      marginLeft: "0.5rem",
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                      py: "0.1rem",
                    }}
                  >
                    Sign Up
                  </Typography>
                </Link>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}
