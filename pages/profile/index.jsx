import React from "react";
import Layout from "../../src/components/layouts/adminLayout";
import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Divider,
  Stack,
  Button,
  InputBase,
  Box,
  IconButton,
} from "@mui/material";
// import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

const AccountSetting = () => {
  // const refresh = () => {
  //   window.location.reload(false);
  // };

  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);
  const [passwordShown3, setPasswordShown3] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const togglePassword2 = () => {
    setPasswordShown2(!passwordShown2);
  };

  const togglePassword3 = () => {
    setPasswordShown3(!passwordShown3);
  };

  return (
    <Layout>
      <Container
        maxWidth="xl"
        sx={{ height: "100vh", backgroundColor: "#faffff" }}
      >
        <Typography
          variant="h3"
          component="h4"
          sx={{ fontSize: 50, fontFamily: "poppins" }}
        >
          Account Setting
        </Typography>
        <Divider sx={{ borderColor: "#bfbdbd", marginTop: 2 }} />
        <form>
          <Stack
            sx={{ px: 1, width: "100%", marginTop: 3, alignItems: "start" }}
            spacing="0.9rem"
          >
            <Stack
              sx={{
                width: "40%",
              }}
              direction="row"
              spacing={5}
            >
              <Stack
                sx={{
                  width: "50%",
                }}
              >
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
                <Box>
                  <InputBase
                    sx={{
                      fontSize: "1.1rem",
                      fontFamily: "poppins",
                      color: "#000",
                      "&:hover": { backgroundColor: "#f1f1f1" },
                      "& .MuiSvgIcon-root": {
                        marginRight: "8px",
                      },
                      border: "1px solid #bfbdbd",
                      // borderRadius: 1,
                      py: "0.3rem",
                      marginTop: "2px",
                    }}
                    fullWidth={true}
                    required
                    defaultValue="Andargachew"
                  />
                </Box>
              </Stack>
              <Stack
                sx={{
                  width: "50%",
                }}
              >
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
                    py: "0.3rem",
                    marginTop: "2px",
                  }}
                  required
                  defaultValue="Worku"
                />
              </Stack>
            </Stack>
            <Stack width="40%">
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
                defaultValue="andymickes@gmail.com"
              />
            </Stack>
            <Stack width="40%">
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
                  "& .MuiText-root": {
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
                defaultValue="936579587"
              />
            </Stack>
            <Stack width="40%">
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
                  border: "1px solid #bfbdbd",
                  // borderRadius: 1,
                  // px: 2,
                  py: "0.1rem",
                  marginTop: "2px",
                }}
                endAdornment={
                  <IconButton onClick={() => togglePassword()}>
                    <VisibilityOutlinedIcon sx={{ mr: 1.5 }} fontSize="large" />
                  </IconButton>
                }
                type={passwordShown ? "text" : "password"}
                required
                defaultValue="password"
              />
            </Stack>
            <Stack width="40%">
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
                New Password
              </Typography>
              <InputBase
                sx={{
                  width: "100%",
                  fontSize: "1.1rem",
                  fontFamily: "poppins",
                  color: "#000",
                  "&:hover": { backgroundColor: "#f1f1f1" },
                  border: "1px solid #bfbdbd",
                  // borderRadius: 1,
                  // px: 2,
                  py: "0.1rem",
                  marginTop: "2px",
                }}
                endAdornment={
                  <IconButton onClick={() => togglePassword2()}>
                    <VisibilityOutlinedIcon sx={{ mr: 1.5 }} fontSize="large" />
                  </IconButton>
                }
                type={passwordShown2 ? "text" : "password"}
              />
            </Stack>
            <Stack width="40%">
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
                  border: "1px solid #bfbdbd",
                  // borderRadius: 1,
                  // px: 2,
                  py: "0.1rem",
                  marginTop: "2px",
                }}
                endAdornment={
                  <IconButton onClick={() => togglePassword3()}>
                    <VisibilityOutlinedIcon sx={{ mr: 1.5 }} fontSize="large" />
                  </IconButton>
                }
                type={passwordShown3 ? "text" : "password"}
                required
              />
            </Stack>
            <Stack
              width="40%"
              sx={{ alignItems: "center", textAlign: "center" }}
            >
              <Button
                variant="contained"
                onClick={() => refresh()}
                sx={{
                  width: "100%",
                  fontSize: 18,
                  fontFamily: "poppins",
                  fontWeight: "medium",
                  color: "#fff",
                  backgroundColor: "bar.main",
                  margin: 3,
                  py: "0.3rem",
                  "&:hover": { backgroundColor: "#de3400" },
                  "&:focus": { outline: "none" },
                  "&:active": { outline: "none" },
                }}
              >
                Update
              </Button>
            </Stack>
          </Stack>
        </form>
      </Container>
    </Layout>
  );
};

export default AccountSetting;
