import Carousel from "react-elastic-carousel";
// import Item from "./item";
import { Button } from "@mui/material";
// import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 4, itemsToScroll: 1 },
  { width: 768, itemsToShow: 7 },
  { width: 1200, itemsToShow: 9 },
];

const MyCarousel = () => {
  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  return (
    <div className="App">
      <div className="controls-wrapper"></div>
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            // <Item key={item}>{item}</Item>
            <Button variant="outlined" sx={{ color: "#000", fontSize: 20 }}>
              {item}
            </Button>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default MyCarousel;
