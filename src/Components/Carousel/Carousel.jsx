import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css";
import { imges } from "./data"; 
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const CarouselImage = () => {
  return (
    <div className={classes.carouselContainer}>
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              className={classes.customArrow + " " + classes.prev}
            >
              {/* <KeyboardArrowLeftIcon /> */}
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              className={classes.customArrow + " " + classes.next}
            >
              {/* <KeyboardArrowRightIcon /> */}
            </button>
          )
        }
      >
        {imges.map((img) => (
          <div key={img.id}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </Carousel>
      <div className={classes.heroImg}></div>
    </div>
  );
};

export default CarouselImage;











