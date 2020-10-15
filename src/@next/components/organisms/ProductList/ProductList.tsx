import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';

import React from "react";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Link } from "react-router-dom";

// import { Loader } from "@components/atoms";
import { BusinessTile, ProductTile } from "@components/molecules";
// import Carousel from "../../../../../src/components/Carousel";

// import { generateProductUrl } from "../../../../core/utils";

import Next from "../../../../images/next.svg";

import * as S from "./styles";
import { IProps } from "./types";

import { AllProducts } from "../../molecules/AllProducts";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const ProductList: React.FC<IProps> = ({
  activeSortTypeBase,
  products,
  showShopResults,
  redirectToShopPage,
  redirectToProductPage,
  showProductsResults,
  stores,
  canLoadMore = false,
  loading,
  onLoadMore = () => null,
  onChange = () => null,
}: IProps) => {
  // const [showShopResults, setShowShopResults] = React.useState(false);
  // const [showProductsResults, setShowProductsResults] = React.useState(false);
  const onShowShopsResultsClick = () => {
    // if (showShopResults) {
    //   return setShowShopResults(false)
    // }
    // setShowShopResults(true)
    onChange({
      label: "Shops",
      value: "stores",
    }, "showType")
  }
  const onShowProductsResultsClick = () => {
    // if (showProductsResults) {
    //   return setShowProductsResults(false)
    // }
    onChange({
      label: "Products",
      value: "products",
    }, "showType")
    // setShowProductsResults(true)
  }
  const HorizontalSwiperParams = {
    breakpoints: {
      1024: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 2.5,
      },
      640: {
        slidesPerView: 1.04,
      },
      320: {
        slidesPerView: 1.04,
      },
    },
    navigation: {
      nextEl: '#js-prev1',
      prevEl: '#js-next1',
    },
    slidesPerView: 2.5,
  };
  const ProductsHorizontalSwiperParams = {
    breakpoints: {
      1024: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 2.5,
      },
      640: {
        slidesPerView: 1.04,
      },
      320: {
        slidesPerView: 1.04,
      },
    },
    navigation: {
      nextEl: '#js-prev2',
      prevEl: '#js-next2',
    },
    slidesPerView: 2.5,
  }
  return (
    <>
      {!loading ?
        <>
          {(products.length > 0 || stores && stores.length > 0) ?

            <S.ProductList>
              {/* first condition for filter */}
              {(activeSortTypeBase === "Shops" || activeSortTypeBase === "" || activeSortTypeBase === "All") && !showProductsResults ? stores.length > 0 ?
                <div>
                  <S.Shops>
                    <S.Carouseltitle>
                      <h3>Shops</h3>
                      {window.innerWidth >= 540 ? stores.length > 2 ? <p><span onClick={onShowShopsResultsClick}>{stores.length} results</span>{showShopResults ? <S.Span></S.Span> : <img src={Next} alt="next" />}</p> : <p><span>{stores.length} {stores.length === 1 ? "result" : "results"}</span><S.Span></S.Span></p>
                        : stores.length > 1 ? <p><span onClick={onShowShopsResultsClick}>{stores.length} results </span><img src={Next} alt="next" /></p> : <p><span>{stores.length} result</span><S.Span></S.Span></p>
                      }
                    </S.Carouseltitle>

                    <S.hrBorder></S.hrBorder>


                    <S.Slider>
                      {!showShopResults ?
                        <S.OnlyCarousel>
                          
                          <Swiper {...HorizontalSwiperParams}>
                            {/* <Carousel length={stores.length} dragging={false} productDetails={"productList"}> */}
                            {stores && stores.map(product => (
                              <SwiperSlide><BusinessTile redirectToShopPage={redirectToShopPage} product={product} /></SwiperSlide>
                            ))}
                          </Swiper>
                          {/* </Carousel> */}
                          <div id="js-prev1" className="swiper-button-prev"  role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-1ca5facc7b3713ec" aria-disabled="true"></div>
                          <div id="js-next1" className="swiper-button-next" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-40cee96a5dd35cf7" aria-disabled="false"></div>
                        </S.OnlyCarousel>
                        : <S.AllShops>
                          {stores && stores.map(product => (
                            <BusinessTile redirectToShopPage={redirectToShopPage} product={product} />
                          ))}
                        </S.AllShops>}
                    </S.Slider>
                  </S.Shops>
                </div> : "" : ""}

              {(activeSortTypeBase === "Products" || activeSortTypeBase === "" || activeSortTypeBase === "All") && !showShopResults ? products.length > 0 ?
                <div>
                  <S.ProductsShop>
                    <S.Shops>

                      <S.Carouseltitle>
                        <h3>Products</h3>
                        {window.innerWidth >= 540 ? products.length > 2 ? <p><span onClick={onShowProductsResultsClick}>{products.length} results </span>{showProductsResults ? <S.Span></S.Span> : <img src={Next} alt="next" />}</p> : <p><span>{products.length} {products.length === 1 ? "result" : "results"}</span><S.Span></S.Span></p>
                          : products.length > 1 ? <p><span onClick={onShowProductsResultsClick}>{products.length} results </span><img src={Next} alt="next" /></p> : <p><span>{products.length} result</span><S.Span></S.Span></p>
                        }
                      </S.Carouseltitle>

                      <S.hrBorder></S.hrBorder>

                      <S.Slider>
                        {!showProductsResults ?
                          <S.OnlyCarousel>
                            
                            <Swiper {...ProductsHorizontalSwiperParams}>
                              {/* <Carousel length={products.length} dragging={false} productDetails={"productList"}> */}
                              {products.map(product => (
                                <SwiperSlide><ProductTile redirectToProductPage={redirectToProductPage} product={product} /></SwiperSlide>
                              ))}
                            </Swiper>
                            {/* </Carousel> */}

                            <div id="js-prev2" className="swiper-button-prev"  role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-1ca5facc7b3713ec" aria-disabled="true"></div>
                            <div id="js-next2" className="swiper-button-next" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-40cee96a5dd35cf7" aria-disabled="false"></div>
                          </S.OnlyCarousel>
                          : <S.AllShops>
                            {products.map(product => (
                              <ProductTile redirectToProductPage={redirectToProductPage} product={product} />
                            ))}
                          </S.AllShops>}
                      </S.Slider>
                    </S.Shops>
                  </S.ProductsShop>
                </div> : <div></div> : <div></div>}

              {(activeSortTypeBase === "" || activeSortTypeBase === "Clear..." || activeSortTypeBase === "All") && (!showShopResults && !showProductsResults) ? stores.length > 0 ?

                <S.Shops>
                  <>
                    <S.Carouseltitle>
                      <h3>{stores && stores.length > 0 ? "All Results" : ""}</h3>
                      {window.innerWidth >= 540 ? <p>{stores.length} {stores.length === 1 ? "result" : "results"}</p>
                        : <p>{stores.length} {stores.length === 1 ? "result" : "results"}</p>
                      }
                    </S.Carouseltitle>

                    <S.hrBorder></S.hrBorder>

                    <S.List>
                      {stores && stores.map(product => (
                        <AllProducts redirectToShopPage={redirectToShopPage} product={product} />
                      ))}
                    </S.List>
                  </>
                </S.Shops>

                : "" : ""}
              {/* <S.Loader>
        {loading ? (
          <Loader />
        ) : (
            canLoadMore && (
              <Button
                data-cy="load-more_button"
                color="secondary"
                onClick={onLoadMore}
              >
                More +
              </Button>
            )
          )}
      </S.Loader> */}
            </S.ProductList >

            : <S.NoResult>No result found...</S.NoResult>}
        </>
        :
        <>
          {/* <Loader /> */}
          <div className="Loadingskeleton">
            <div className="Selectboxes">


              {/* skeleton-cards */}
              <S.Skeletoncards>
                <div className="SkeletonCardsCont">
                  <div className="CardsTitle">
                  </div>

                  <div className="SkeletonCardsbody">

                  </div>

                  {/* skeletonbar */}
                  <div className="SkeletonCardsbar">
                  </div>
                  {/* skeletonbar */}

                  <div className="SkeletonCardtext">

                  </div>
                </div>

                <div className="SkeletonCardsCont">
                  <div className="CardsTitle">
                  </div>

                  <div className="SkeletonCardsbody">

                  </div>

                  {/* skeletonbar */}
                  <div className="SkeletonCardsbar">
                  </div>
                  {/* skeletonbar */}

                  <div className="SkeletonCardtext">

                  </div>
                </div>

                <div className="SkeletonCardsCont">
                  <div className="CardsTitle">
                  </div>

                  <div className="SkeletonCardsbody">

                  </div>

                  {/* skeletonbar */}
                  <div className="SkeletonCardsbar">
                  </div>
                  {/* skeletonbar */}

                  <div className="SkeletonCardtext">

                  </div>
                </div>


              </S.Skeletoncards>
              {/* skeleton-cards */}


              {/* skeleton-cards */}
              <div className="Skeletoncards">
                <div className="SkeletonCardsCont">
                  <div className="CardsTitle">
                  </div>

                  <div className="SkeletonCardsbody">

                  </div>

                  {/* skeletonbar */}
                  <div className="SkeletonCardsbar">
                  </div>
                  {/* skeletonbar */}

                  <div className="SkeletonCardtext">

                  </div>
                </div>

                <div className="SkeletonCardsCont">
                  <div className="CardsTitle">
                  </div>

                  <div className="SkeletonCardsbody">

                  </div>

                  {/* skeletonbar */}
                  <div className="SkeletonCardsbar">
                  </div>
                  {/* skeletonbar */}

                  <div className="SkeletonCardtext">

                  </div>
                </div>

                <div className="SkeletonCardsCont">
                  <div className="CardsTitle">
                  </div>

                  <div className="SkeletonCardsbody">

                  </div>

                  {/* skeletonbar */}
                  <div className="SkeletonCardsbar">
                  </div>
                  {/* skeletonbar */}

                  <div className="SkeletonCardtext">

                  </div>
                </div>


              </div>
              {/* skeleton-cards */}


            </div>
          </div>
        </>
      }
    </>
  );
};
