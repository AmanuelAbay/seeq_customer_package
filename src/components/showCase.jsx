// import React from "react";
// import { Box } from "@mui/material";
import Image from "next/image";
import teddy from "../assets/editedddd.jpg";
import { makeStyles } from "@mui/styles";

// const Showcase = () => {
//   return (
//     <Box
//       style={{
//         // backgroundImage: `url(${teddy})`,
//         // backgroundSize: "cover",
//         height: "60vh",
//         width: "full",
//       }}
//     >
//       <Image
//         src={teddy}
//         alt="Picture of the author"
//         style={{ objectFit: "cover" }}
//         height="380%"
//         layout="responsive"
//       />
//     </Box>
//   );
// };
// export default Showcase;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Box, Typography } from "@mui/material";
import SwiperCore, {
  Keyboard,
  Scrollbar,
  Pagination,
  Navigation,
} from "swiper/core";
// import Swiper from 'swiper/bundle';

// import styles bundle
import "swiper/css/bundle";

SwiperCore.use([Keyboard, Scrollbar, Pagination, Navigation]);

// Import Swiper styles
const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "100%",
    paddingRight: "100%",
  },
  swiperContainer: {
    paddingBottom: "3rem",
    "& .swiper-pagination-bullet": {
      background: "#d63302",
    },
    "& .swiper-button-next:after": {
      fontSize: "3rem !important",
    },
    "& .swiper-button-prev:after": {
      fontSize: "3rem !important",
    },
  },
});

const Showcase = () => {
  const cards = [1, 2, 3, 4, 5];
  const { media, swiperContainer } = useStyles();
  return (
    <Box sx={{ mt: 7 }}>
      <Swiper
        // style={{ height: "60vh" }}
        className={swiperContainer}
        spaceBetween={5}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        grabCursor
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        navigation
        loop
      >
        {cards.map((card) => (
          <SwiperSlide key={card}>
            <Image
              className={media}
              src={teddy}
              alt="Picture of the author"
              style={{ objectFit: "cover", height: 0, paddingTop: "100%" }}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <Image
            src={teddy}
            alt="Picture of the author"
            style={{ objectFit: "cover", height: 0, paddingTop: "100%" }}
            layout="responsive"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={teddy}
            alt="Picture of the author"
            style={{ objectFit: "cover", height: 0, paddingTop: "100%" }}
            layout="responsive"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={teddy}
            alt="Picture of the author"
            style={{ objectFit: "cover", height: 0, paddingTop: "100%" }}
            layout="responsive"
          />
        </SwiperSlide> */}
      </Swiper>
    </Box>
  );
};
export default Showcase;
