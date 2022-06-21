import {
  Button,
  Grid,
  Box,
  Typography,
  IconButton,
  Stack,
  InputBase,
  Divider,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import register from "../src/assets/register.jpg";
import Image from "next/image";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Layout from "../src/components/layouts/authLayout";
import Link from "next/link";

export default function signUp() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [passwordShown, setPasswordShown] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [passwordShown2, setPasswordShown2] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const togglePassword2 = () => {
    setPasswordShown2(!passwordShown2);
  };

  return (
    <Layout>
      <Box sx={{ marginTop: 8, height: "full", pl: "5%", pl: "7%" }}>
        <Grid container spacing={2}>
          <Grid
            item
            md={5}
            borderRight="1px solid #FF702a"
            height="auto"
            paddingRight={1}
            display="flex"
            justifyContent="center"
            sx={{ mt: "10%" }}
          >
            <Box>
              <Image
                src={register}
                alt="Picture of event illustration"
                style={{ objectFit: "cover", height: 0 }}
                // layout="responsive"
              />
            </Box>
          </Grid>
          <Grid item md={5} alignItems="center" sx={{ marginTop: 4 }}>
            <Stack sx={{ width: "100%", alignItems: "center" }}>
              <Typography
                textTransform="uppercase"
                color="bar.main"
                fontWeight="bold"
                fontSize={40}
              >
                Sign Up
              </Typography>
            </Stack>
            <Stack
              sx={{
                px: 1,
                width: "100%",
                marginTop: 3,
                alignItems: "center",
                marginBottom: 2,
              }}
              spacing="0.9rem"
            >
              <Box
                sx={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Stack>
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
                    First Name
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
                      py: "0.4rem",
                      marginTop: "2px",
                    }}
                    required
                  />
                </Stack>
                <Stack>
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
                    Last Name
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
                      py: "0.4rem",
                      marginTop: "2px",
                    }}
                    required
                  />
                </Stack>
              </Box>
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
                    py: "0.4rem",
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
                  Phone Number
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
                    py: "0.4rem",
                    marginTop: "2px",
                  }}
                  startAdornment="+251"
                  type="text"
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
                  Confirm Password
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
                    <IconButton onClick={() => togglePassword2()}>
                      <VisibilityOutlinedIcon
                        sx={{ mr: 1.5 }}
                        fontSize="medium"
                      />
                    </IconButton>
                  }
                  type={passwordShown2 ? "text" : "password"}
                  required
                />
              </Stack>
              <Stack
                width="80%"
                sx={{ alignItems: "center", textAlign: "center" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    backgroundColor: "bar.main",
                    margin: 1.5,
                    py: 1,
                    "&:hover": { backgroundColor: "#de3400" },
                    "&:focus": { outline: "none" },
                    "&:active": { outline: "none" },
                  }}
                >
                  Sign Up
                </Button>
                <Typography
                  variant="text"
                  component="p"
                  fontSize={15}
                  sx={{ fontFamily: "poppins" }}
                  width="100%"
                >
                  {" "}
                  By clicking Sign Up, You agree to Seeq Terms and Conditions
                  and have read the Privacy Policy
                </Typography>
              </Stack>
              <Stack
                direction="row"
                width="80%"
                sx={{ alignItems: "center", textAlign: "center" }}
              >
                <Divider sx={{ border: "1px solid #48484870", width: "45%" }} />
                <Typography
                  variant="text"
                  component="p"
                  fontSize={16}
                  sx={{}}
                  width="100%"
                >
                  Or
                </Typography>
                <Divider sx={{ border: "1px solid #48484870", width: "45%" }} />
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
                    fontFamily: "poppins",
                    mt: -4,
                  }}
                >
                  Already Have an account?
                </Typography>
                <Link href="/login">
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
                    Sign In
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
