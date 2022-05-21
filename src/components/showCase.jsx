import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import teddy from "../assets/editedddd.jpg";

const Showcase = () => {
  return (
    <Box
      style={{
        // backgroundImage: `url(${teddy})`,
        // backgroundSize: "cover",
        height: "60vh",
        width: "full",
      }}
    >
      <Image
        src={teddy}
        alt="Picture of the author"
        style={{ objectFit: "cover" }}
        height="380%"
        layout="responsive"
      />
    </Box>
  );
};
export default Showcase;
