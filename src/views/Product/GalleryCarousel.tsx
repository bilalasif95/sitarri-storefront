import * as React from "react";

import { CachedImage } from "@components/molecules";

import  Carousel  from "../../../src/components/Carousel";
// import { ProductDetails_product_images } from "./gqlTypes/ProductDetails";

import noPhotoImg from "../../images/no-photo.svg";

const GalleryCarousel: React.FC<{
  images: any;
}> = ({ images }) => (
  <div className="product-page__product__gallery">
    <Carousel
      productDetails={"productDetails"}
      renderCenterLeftControls={() => null}
      renderCenterRightControls={() => null}
      // renderBottomCenterControls={props => {
      //   const indexes = [];

      //   for (let i = 0; i < props.slideCount; i++) {
      //     indexes.push(i);
      //   }

      //   return (
      //     <ul className="product-page__product__gallery__nav">
      //       {indexes.map(index => (
      //         <li
      //           key={index}
      //           onClick={props.goToSlide.bind(null, index)}
      //           className={props.currentSlide === index ? "active" : ""}
      //         >
      //           <span />
      //         </li>
      //       ))}
      //     </ul>
      //   );
      // }}
    >
      {/* {images.map(image => ( */}
        <CachedImage url={images || noPhotoImg}>
          <img src={noPhotoImg} />
        </CachedImage>
      {/* ))} */}
    </Carousel>
  </div>
);

export default GalleryCarousel;
