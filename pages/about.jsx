import React from "react";
import { AppBar, Avatar, ImageList, Link, Toolbar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { RoundedCorner } from "@mui/icons-material";
import Layout from "../src/components/layouts/mainLayout";
import Image from "next/image";
function About() {
  return (
    <Layout>
      <Container
        spacing={2}
        maxWidth={false}
        paddingLeft={10}
        paddingRight={10}
        sx={{ marginTop: 18, marginBottom: 16 }}
      >
        <Stack width="100%" alignItems="center" textAlign="center">
          <Avatar
            src="https://lh3.googleusercontent.com/p7NQh6TI6YRM2QV5j3UH9C_eFWJEd-N2TIDk78XVq7RtsW5mbZyTqxWKrG2c03zTldKfxAQth6ly0ZBeZ7EOFSbYZy3ws1P68tf4oct95M0C4RTWWg-_OCe-nnYMddRa_m-yDRg-gokslAHAHm8QbM_2zsQ2sG-60urREJIHQ0Rt2JlgwKumwgApnVutRxsSUOridwTGGHQP587ruailUjFIWPjNt6TZIHeG-yw_58yE7mjjkwwnO6cmCXbz_0NUoweNnBuwCdgVpCjCsiUCCOJ1nuvufirZgEiW_HnUNh2R_HOFAOPfU2UOJBaOc0r-o2HDGRTCCAEfWv-_LgUCCcutdD8Xpt49Oh91dOIOqNkRmQ28SqNe7pWNm9ROvTqDB-BI2to1D1XkIe5-5kd3JmGALQDdd-_MGUabNr9SjSax6LVGMz1rBH7Of_PBgfA-3LSGhKgs8e3jLcEMZ0fl0pHKu5RA0XBIPjcJ_9WE46Lrz1e0YRTPodm5I4J7H_dUSNFrDGa-sLFbsfs-VwiNCHLlmzZLA4Ea1vwP8W5SWVu3So-oSNavyVbiDOct2kE1j3ckQ9FnhIgOQYSv4LyS8crhSb3aUiqN4a7wKcE6fAdZ_r3mrw-xOis5FVB8gcLSkNQsPACbXFmxe1_wi-g1W78ggX_haL0UuWqL9tsZ10lVg9jfrJT8OmTnvwCop2jwSxeQ0QAKwwVK8Hhy8vdr3lvOzHnJzfFEo9CpxjmkOXN8UTEPhPt_T0-fTcDU=s663-no?authuser=0"
            alt="Seeq"
            sx={{ height: "150px", width: "150px" }}
          />
          <Typography
            fontSize={40}
            fontWeight="Bold"
            sx={{
              width: "100%",
              alignItems: "center",
              textTransform: "uppercase",
              marginTop:3
            }}
          >
            About Seeq
          </Typography>
        </Stack>

        <Typography fontSize={20} paragraph sx={{ marginTop: 4 }}>
          All of our team are a 4th year software student in Addis Ababa Scince
          and technology uinversty to develop this web by react js by using
          material ui and flutter to mobile app for the frontend but in back end
          mongodeb and node js using to develop this app
        </Typography>

        <Typography fontSize={20} paragraph>
          {" "}
          it is very interesting and to help easily to buy ticket for attainding
          event and cinema in ethiopia ,becuase the first scope in Addis
          Abeba,but i intersting to expand other part of ethiopian and the rest
          of world country ,bu annaouncing the people of world ,this mothed is
          to reduce unnesserary activitey like consume time by buying the ticket
          online
        </Typography>

        <Stack
          direction="row"
          spacing={12}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Stack
            direction="column"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ px: 4, pb: 1, pt: 1 }}>
              <Avatar
                src="https://lh3.googleusercontent.com/pw/AM-JKLV0muouqi3Nx1HG0L96XpG-pOJZE_yJOCVD8c8CgxcTcCmxU3qhyoZHL3W3FHQZhSV0dOchBvZ0VlXnyoMpmc-vgKs6Nk3VDXGgAn06GJmstLjlEJ5jESRu0u16acQsYxSJOvu-rQ3om3_T9p9nDSMY=w455-h606-no?authuser=0"
                alt=""
                sx={{ height: "130px", width: "130px" }}
              />
            </Box>
            <Typography fontSize={20} fontWeight="Bold">
              Andarg worku
            </Typography>
            <Typography fontSize={17} fontWeight="Bold">
              Web Developer
            </Typography>
            <Stack direction="row" spacing={1} marginTop={1.5}>
              <Link href="#" style={{ color: "blue" }}>
                <FacebookIcon />
              </Link>
              <Link href="#" style={{ color: "#29 ,161, 149" }}>
                <TwitterIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/andarg-worku-bb957823b/"
                target="_blank"
                style={{ color: "# 0, 119, 181" }}
              >
                <LinkedInIcon />
              </Link>
              <Link href="#" style={{ color: "red" }}>
                <YouTubeIcon />
              </Link>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ px: 4, pb: 1, pt: 1 }}>
              <Avatar
                src="https://media-exp1.licdn.com/dms/image/C4D03AQGZ8eK-N1Qcbg/profile-displayphoto-shrink_200_200/0/1633613803173?e=1654128000&v=beta&t=r1GC8sW-P7AqyiJxIHmd1dCJBInuxapPf7X71qz8zPs"
                alt=""
                sx={{ height: "130px", width: "130px" }}
              />
            </Box>
            <Typography fontSize={20} fontWeight="Bold">
              Amanuel Alex
            </Typography>
            <Typography fontSize={17} fontWeight="Bold">
              Web Developer
            </Typography>
            <Stack direction="row" spacing={1} marginTop={1.5}>
              <Link href="#" style={{ color: "blue" }}>
                <FacebookIcon />
              </Link>
              <Link href="#" style={{ color: "#29 ,161, 149" }}>
                <TwitterIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/amanuel-alemayehu-0b5165174/"
                target="_blank"
                style={{ color: "# 0, 119, 181" }}
              >
                <LinkedInIcon />
              </Link>
              <Link href="#" style={{ color: "red" }}>
                <YouTubeIcon />
              </Link>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ px: 4, pb: 1, pt: 1 }}>
              <Avatar
                src="https://media-exp1.licdn.com/dms/image/C4E03AQE9phH1WDxKGg/profile-displayphoto-shrink_800_800/0/1648791761396?e=1658966400&v=beta&t=nA9gS7k6C42i0hizXIN8jdRxyyUJKBmbpzAp18jgsuA"
                alt=""
                sx={{ height: "130px", width: "130px" }}
              />
            </Box>

            <Typography fontSize={20} fontWeight="Bold">
              Beruksew Beriso
            </Typography>
            <Typography fontSize={17} fontWeight="Bold">
              flutter Develop
            </Typography>
            <Stack direction="row" spacing={1} marginTop={1.5}>
              <Link href="#" style={{ color: "blue" }}>
                <FacebookIcon />
              </Link>
              <Link href="#" style={{ color: "#29 ,161, 149" }}>
                <TwitterIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/brooksew-b-70b90a214/"
                target="_blank"
                style={{ color: "# 0, 119, 181" }}
              >
                <LinkedInIcon />
              </Link>
              <Link href="#" style={{ color: "red" }}>
                <YouTubeIcon />
              </Link>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ px: 4, pb: 1, pt: 1 }}>
              <Avatar
                src="https://media-exp1.licdn.com/dms/image/C4D03AQE4S-q06-zB8A/profile-displayphoto-shrink_800_800/0/1628514157182?e=1658966400&v=beta&t=yZkGntm5VFY1WY3fNHMkA84j-WrnS-cz5CKHfpYv4-M"
                alt=""
                sx={{ height: "130px", width: "130px" }}
              />
            </Box>

            <Typography fontSize={20} fontWeight="Bold">
              Adonias Wondosen
            </Typography>
            <Typography fontSize={17} fontWeight="Bold">
              flutter Developer
            </Typography>
            <Stack direction="row" spacing={1} marginTop={1.5}>
              <Link href="#" style={{ color: "blue" }}>
                <FacebookIcon />
              </Link>
              <Link href="#" style={{ color: "#29 ,161, 149" }}>
                <TwitterIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/adonias-wondwosen-805bb6218/"
                target="_blank"
                style={{ color: "# 0, 119, 181" }}
              >
                <LinkedInIcon />
              </Link>
              <Link href="#" style={{ color: "red" }}>
                <YouTubeIcon />
              </Link>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ px: 4, pb: 1, pt: 1 }}>
              <Avatar
                src="https://media-exp1.licdn.com/dms/image/C4E03AQFAmGz_Pu_4PQ/profile-displayphoto-shrink_200_200/0/1627669756415?e=1655337600&v=beta&t=TL01YTV9uMRcBkbRMO0xIFd556BILencWFSyLRwoVIg"
                alt=""
                sx={{ height: "130px", width: "130px" }}
              />
            </Box>

            <Typography fontSize={20} fontWeight="Bold">
              Amanuel Abay
            </Typography>
            <Typography fontSize={17} fontWeight="Bold">
              Web Developer
            </Typography>
            <Stack direction="row" spacing={1} marginTop={1.5}>
              <Link href="#" style={{ color: "blue" }}>
                <FacebookIcon />
              </Link>
              <Link href="#" style={{ color: "#29 ,161, 149" }}>
                <TwitterIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/in/amanuel-abay-516096179/"
                target="_blank"
                style={{ color: "# 0, 119, 181" }}
              >
                <LinkedInIcon />
              </Link>
              <Link href="#" style={{ color: "red" }}>
                <YouTubeIcon />
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
}
export default About;
