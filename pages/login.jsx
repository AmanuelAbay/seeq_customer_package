import {
  Button,
  Grid,
  Box,
  Typography,
  Stack,
  InputBase,
  Divider,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Layout from "../src/components/layouts/authLayout";
import Link from "next/link";

export default function LogIn() {
  return (
    <Layout>
      <Box maxWidth="xl" sx={{ marginTop: 8, height: "full" }}>
        <Grid container spacing={2}>
          <Grid
            item
            md={7}
            borderRight="1px solid #FF5722"
            height="auto"
            paddingRignt={1}
          >
            <img
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
              src="https://picsum.photos/seed/picsum/200"
              alt="Cover"
            />
          </Grid>
          <Grid item md={5} alignItems="center" sx={{ marginTop: 4 }}>
            <Stack sx={{ width: "100%", alignItems: "center" }}>
              <Typography
                textTransform="uppercase"
                color="bar.main"
                fontWeight="bold"
                fontSize={30}
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
                  sx={{ fontWeight: "bold" }}
                >
                  Email
                </Typography>
                <InputBase
                  sx={{
                    width: "100%",
                    fontSize: "1rem",
                    "&:hover": { backgroundColor: "#f1f1f1" },
                    "& .MuiSvgIcon-root": {
                      marginRight: "8px",
                    },
                    border: "1px solid #00000070",
                    // borderRadius: 1,
                    px: 2,
                    py: "0.1rem",
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
                  sx={{ fontWeight: "bold" }}
                >
                  Password
                </Typography>
                <InputBase
                  sx={{
                    width: "100%",
                    fontSize: "1rem",
                    "&:hover": { backgroundColor: "#f1f1f1" },
                    border: "1px solid #00000070",
                    // borderRadius: 1,
                    px: 2,
                    py: "0.1rem",
                    marginTop: "2px",
                  }}
                  type="password"
                  required
                />
                <Typography
                  variant="text"
                  component="p"
                  sx={{
                    fontWeight: "bold",
                    marginTop: "0.3rem",
                    fontSize: 14,
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
                          "&$checked": { color: "#FF5722" },
                        }}
                      />
                    }
                    label="Remember"
                  />
                </FormGroup>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    backgroundColor: "bar.main",
                    py: 1,
                    "&:hover": { backgroundColor: "#de3400" },
                    "&:focus": { outline: "none" },
                    "&:active": { outline: "none" },
                    textTransform: "capitalize",
                  }}
                >
                  Log In
                </Button>
              </Stack>
              <Stack
                direction="row"
                width="80%"
                sx={{ alignItems: "center", textAlign: "center" }}
              >
                <Divider
                  sx={{
                    border: "1px solid #48484870",
                    width: "45%",
                    marginTop: 1,
                  }}
                />
                <Typography
                  variant="text"
                  component="p"
                  fontSize={13}
                  width="100%"
                  marginTop={1}
                >
                  Or
                </Typography>
                <Divider
                  sx={{
                    border: "1px solid #48484870",
                    width: "45%",
                    marginTop: 1,
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
                  startIcon={<GoogleIcon sx={{ color: "black" }} />}
                  sx={{
                    width: "100%",
                    py: 2,
                    color: "black",
                    border: 1,
                    borderColor: "black",
                    "& .MuiButton-startIcon": { marginRight: 7 },
                    "& .MuiButton-endIcon": { marginLeft: 7 },
                    "&:hover": {
                      border: "1px solid black",
                    },
                  }}
                  endIcon={<ArrowRightAltIcon />}
                >
                  Sign Up With Google
                </Button>
              </Stack>
              <Stack direction="row" alignItems="center">
                <Typography
                  variant="text"
                  component="p"
                  sx={{ fontWeight: "bold", textTransform: "capitalize" }}
                >
                  New here?
                </Typography>
                <Link href="/register">
                  <Typography
                    variant="text"
                    component="p"
                    sx={{
                      fontWeight: "bold",
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
