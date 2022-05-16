import React from "react";
import { MenuList, MenuItem, Box, Typography, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SideNav() {
  const router = useRouter();
  return (
    <MenuList
      sx={{
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        height: "full",
      }}
    >
      <Link href="/">
        <Stack
          backgroundColor={router.pathname === "/" ? "white" : ""}
          direction="row"
          sx={{
            width: "100%",
            alignItems: "center",
            cursor: "pointer",
            textAlign: "center",
            px: "9%",
            py: 1,
            "&:hover":{
              backgroundColor: router.pathname === "/" ? "white" : "#80808050"
            },
            my:"2px"
          }}
        >
          <Box
            sx={{
              py: 0.3,
              px: 1.3,
            }}
          >
            <HomeIcon />
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
            Dashboard
          </Typography>
        </Stack>
      </Link>
      <Link href="/events">
        <Stack
          backgroundColor={router.pathname === "/events" ? "white" : ""}
          direction="row"
          sx={{
            width: "100%",
            alignItems: "center",
            cursor: "pointer",
            textAlign: "center",
            px: "9%",
            py: 1,
            "&:hover":{
              backgroundColor: router.pathname === "/events" ? "white" : "#80808050"
            },
            my:"2px"
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
      <Link href="/tickets">
        <Stack
          backgroundColor={router.pathname === "/tickets" ? "white" : ""}
          direction="row"
          sx={{
            width: "100%",
            alignItems: "center",
            cursor: "pointer",
            textAlign: "center",
            px: "9%",
            py: 1,
            "&:hover":{
              backgroundColor: router.pathname === "/tickets" ? "white" : "#80808050"
            },
            my:"2px"
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
      <Link href="/acount">
        <Stack
          backgroundColor={router.pathname === "/account" ? "white" : ""}
          direction="row"
          sx={{
            width: "100%",
            alignItems: "center",
            cursor: "pointer",
            textAlign: "center",
            px: "9%",
            py: 1,
            my:"1px",
            "&:hover":{
              backgroundColor: router.pathname === "/account" ? "white" : "#80808050"
            },
            my:"2px"
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
    </MenuList>
  );
}
