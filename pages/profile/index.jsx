import React from "react";
import Layout from "../../src/components/layouts/adminLayout";
import { Container, Typography, Divider, Stack, Button, InputBase, Box } from "@mui/material";

const AccountSetting = () => {
  return (
    <Layout>
      <Container maxWidth="xl" sx={{ height: "100vh" }}>
        <Typography variant="h4" component="h4" sx={{ font: "bold" }}>
          Account Setting
        </Typography>
        <Divider sx={{ borderColor: "#48484870", marginTop:1 }} />
        <form>
        <Stack
            sx={{ px: 1, width: "100%", marginTop: 3, alignItems: "start" }}
            spacing="0.9rem"
          >
            <Stack
              sx={{
                width: "80%"
              }}
              direction="row"
              spacing={5}
            >
              <Stack>
                <Typography
                  variant="text"
                  component="p"
                  sx={{ fontWeight: "bold" }}
                >
                  First Name
                </Typography>
                <InputBase
                  sx={{
                    width: "93%",
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
                  required
                  defaultValue="Andarg"
                />
              </Stack>
              <Stack>
                <Typography
                  variant="text"
                  component="p"
                  sx={{ fontWeight: "bold" }}
                >
                  Last Name
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
                  required
                  defaultValue="Worku"
                />
              </Stack>
            </Stack>
            <Stack width="45%">
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
                defaultValue="andymickes@gmail.com"
              />
            </Stack>
            <Stack width="45%">
              <Typography
                variant="text"
                component="p"
                sx={{ fontWeight: "bold" }}
              >
                Phone Number
              </Typography>
              <InputBase
                sx={{
                  width: "100%",
                  fontSize: "1rem",
                  "&:hover": { backgroundColor: "#f1f1f1" },
                  "& .MuiText-root": {
                    marginRight: "8px",
                  },
                  border: "1px solid #00000070",
                  // borderRadius: 1,
                  px: 2,
                  py: "0.1rem",
                  marginTop: "2px",
                }}
                startAdornment="+251"
                type="text"
                required
                defaultValue="936579587"
              />
            </Stack>
            <Stack width="45%">
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
                defaultValue="password"
              />
            </Stack>           
            <Stack width="45%">
              <Typography
                variant="text"
                component="p"
                sx={{ fontWeight: "bold" }}
              >
                New Password
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
              />
            </Stack>
            <Stack width="45%">
              <Typography
                variant="text"
                component="p"
                sx={{ fontWeight: "bold" }}
              >
                Confirm Password
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
                  marginTop: "2px"
                }}
                
                type="password"
                required
              />
            </Stack>
            <Stack
              width="45%"
              sx={{ alignItems: "center", textAlign: "center" }}
            >
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  backgroundColor: "bar.main",
                  margin: 3,
                  py: 1,
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
