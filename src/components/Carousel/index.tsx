import {
  mediumScreen,
  smallScreen,
} from "../../globalStyles/scss/variables.scss";
import "./scss/index.scss";

import NukaCarousel, { CarouselProps } from "nuka-carousel";
import * as React from "react";
import Media from "react-media";
import ReactSVG from "react-svg";

import arrowImg from "../../images/iconmonstr-arrow-64.svg";

interface CarouselType extends CarouselProps {
  children: React.ReactNode;
  productDetails: string;
  length?: number;
}

const Carousel: React.FC<CarouselType> = ({ children, productDetails, length, ...rest }) => {
  const settings = {
    className: "carousel",
    renderBottomCenterControls: () => null,
    renderCenterLeftControls: ({ previousSlide, currentSlide }) =>
      currentSlide !== 0 ? (
        <div
          onClick={previousSlide}
          className="carousel__control carousel__control--left"
        >
          <ReactSVG path={arrowImg} />
        </div>
      ) : null,
    renderCenterRightControls: ({
      nextSlide,
      currentSlide,
      slideCount,
      slidesToShow,
    }) =>
      (slideCount - slidesToShow !== currentSlide) && (length > 2) ? (
        <div
          onClick={nextSlide}
          className="carousel__control carousel__control--right"
        >
          <ReactSVG path={arrowImg} />
        </div>
      ) : null,
    ...rest,
  };
  const carousel = (slides: number) => (
    <NukaCarousel slidesToShow={slides} slidesToScroll={slides} {...settings}>
      {children}
    </NukaCarousel>
  );
  return (
    <Media query={{ maxWidth: smallScreen }}>
      {matches =>
        matches ?
          productDetails === "categoryList" ? carousel(3.5) :
            productDetails === "Tiles" ? carousel(1) : (
              carousel(1.02)
            ) : (
            productDetails === "productList" ?
              <Media query={{ maxWidth: mediumScreen }}>
                {matches => carousel(matches ? 2 : 2.5)}
              </Media>
              :
              <Media query={{ minWidth: mediumScreen }}>
                {productDetails === "productDetails" ? matches => carousel(matches ? 2.5 : 2.5) : productDetails === "categoryList" ? matches => carousel(matches ? 9.5 : 4) : productDetails === "Tiles" ? matches => carousel(matches ? 1 : 1) : matches => carousel(matches ? 2 : 3)}
              </Media>
          )
      }
    </Media>
  );
};

export default Carousel;
