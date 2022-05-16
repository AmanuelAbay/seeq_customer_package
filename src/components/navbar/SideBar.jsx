import React from "react";
import { MenuList, Box, Typography, Stack, Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SideNav() {
  const router = useRouter();
  return (
    <>
      <Box sx={{alignItems: "center", width: "100%", textAlign: "center"}}>
        <Avatar
          src="https://randomuser.me/api/portraits/men/31.jpg"
          alt="S"
          sx={{ width: 90, height: 90, mx:'auto', marginBottom:2 }}
        />
        <Typography variant="text" component="div" sx={{fontWeight: 'bold', marginBottom:0.5}}>Andarg Worku</Typography>
        <Typography variant="text" component="div" sx={{marginBottom:1}}>andymickes@gmail.com</Typography>
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
            <Box
              sx={{
                py: 0.3,
                px: 1.3,
              }}
            >
              <AccountCircleIcon />
            </Box>
            <Typography
              variant="text"
              component="p"
              sx={{
                fontWeight: "medium",
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
            <Box
              sx={{
                py: 0.3,
                px: 1.3,
              }}
            >
              <CalendarMonthIcon />
            </Box>
            <Typography
              variant="text"
              component="p"
              sx={{
                fontWeight: "medium",
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
            <Box
              sx={{
                py: 0.3,
                px: 1.3,
              }}
            >
              <ConfirmationNumberIcon />
            </Box>
            <Typography
              variant="text"
              component="p"
              sx={{
                fontWeight: "medium",
                textTransform: "capitalize",
                py: 0.5,
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
