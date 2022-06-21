import React from "react";
import { MenuList, Box, Typography, Stack, Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
// import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SideNav() {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Avatar
          src="https://randomuser.me/api/portraits/men/31.jpg"
          alt="S"
          sx={{ width: 110, height: 110, mx: "auto", my: 2 }}
        />
        <Typography
          variant="text"
          component="div"
          sx={{
            fontWeight: "medium",
            fontSize: 25,
            fontFamily: "poppins",
            marginBottom: 0.5,
          }}
        >
          Andarg Worku
        </Typography>
        <Typography
          variant="text"
          component="div"
          sx={{ marginBottom: 1, fontSize: 20, fontFamily: "poppins" }}
        >
          andymickes@gmail.com
        </Typography>
      </Box>
      <MenuList
        sx={{
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          height: "full",
        }}
      >
        <Link href="/profile">
          <Stack
            backgroundColor={router.pathname === "/profile" ? "white" : ""}
            direction="row"
            spacing={2.5}
            sx={{
              width: "100%",
              alignItems: "center",
              cursor: "pointer",
              textAlign: "center",
              px: "9%",
              py: 1,
              my: "1px",
              "&:hover": {
                backgroundColor:
                  router.pathname === "/profile" ? "white" : "#80808050",
              },
              my: "2px",
            }}
          >
            {/* <Box
              sx={{
                py: 0.3,
                px: 1.3,
              }}
            > */}
            <AccountCircleOutlinedIcon fontSize="large" />
            {/* </Box> */}
            <Typography
              variant="text"
              component="p"
              sx={{
                fontSize: 24,
                fontFamily: "poppins",
                textTransform: "capitalize",
                py: 0.5,
                textAlign: "center",
                alignItems: "center",
              }}
            >
              Account
            </Typography>
          </Stack>
        </Link>
        <Link href="/profile/events">
          <Stack
            backgroundColor={
              router.pathname === "/profile/events" ? "white" : ""
            }
            direction="row"
            spacing={2.5}
            sx={{
              width: "100%",
              alignItems: "center",
              cursor: "pointer",
              textAlign: "center",
              px: "9%",
              py: 1,
              "&:hover": {
                backgroundColor:
                  router.pathname === "/profile/events" ? "white" : "#80808050",
              },
              my: "2px",
            }}
          >
            {/* <Box
              sx={{
                py: 0.3,
                px: 1.3,
              }}
            > */}
            <CalendarMonthOutlinedIcon fontSize="large" />
            {/* </Box> */}
            <Typography
              variant="text"
              component="p"
              sx={{
                fontSize: 24,
                fontFamily: "poppins",
                textTransform: "capitalize",
                py: 0.5,
                textAlign: "center",
                alignItems: "center",
              }}
            >
              Events
            </Typography>
          </Stack>
        </Link>
        <Link href="/profile/movie_tickets">
          <Stack
            backgroundColor={
              router.pathname === "/profile/movie_tickets" ? "white" : ""
            }
            direction="row"
            spacing={2.5}
            sx={{
              width: "100%",
              alignItems: "center",
              cursor: "pointer",
              textAlign: "center",
              px: "9%",
              py: 1,
              "&:hover": {
                backgroundColor:
                  router.pathname === "/profile/movie_tickets"
                    ? "white"
                    : "#80808050",
              },
              my: "2px",
            }}
          >
            {/* <Box
              sx={{
                py: 0.3,
                px: 1.3,
              }}
            > */}
            <ConfirmationNumberOutlinedIcon fontSize="large" />
            {/* </Box> */}
            <Typography
              variant="text"
              component="p"
              sx={{
                fontSize: 24,
                fontFamily: "poppins",
                textTransform: "capitalize",
                py: 0.3,
                textAlign: "center",
                alignItems: "center",
              }}
            >
              Tickets
            </Typography>
          </Stack>
        </Link>
      </MenuList>
    </>
  );
}
