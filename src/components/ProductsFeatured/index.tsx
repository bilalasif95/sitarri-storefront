import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';

import * as React from "react";
import { Link } from "react-router-dom";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductListItem } from "..";
import { maybe } from "../../core/utils";
import { TypedFeaturedProductsQuery } from "./queries";

import { searchUrl } from "../../app/routes";

import { stringify } from "query-string";

import { BusinessTile, ProductTile } from "@components/molecules";

import Carousel from "../Carousel";

import Next from "../../images/next.svg"

import "./scss/index.scss";

interface ProductsFeaturedProps {
  title?: string;
  SeeDetails: any;
  redirectToShopPage?: any;
  redirectToProductPage?: any;
}

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductsFeatured: React.FC<ProductsFeaturedProps> = ({ SeeDetails, redirectToShopPage, redirectToProductPage, title }) => {
  const [latitude, setLatitude] = React.useState(0)
  const [longitude, setLongitude] = React.useState(0)
  const searchQs = (searchWord) => {
    return stringify({ q: searchWord, lat: latitude, long: longitude });
  }
  const getCurrentLocation = () => {
    navigator.geolocation.watchPosition(
      (position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      },
      (error) => {
        setLatitude(0)
        setLongitude(0)
      },
      {
        enableHighAccuracy: true,
        maximumAge: 250,
      }
    );
  }
  React.useEffect(() => {
    getCurrentLocation()
  }, [latitude, longitude])
  React.useEffect(() => {
    getCurrentLocation()
  }, [])

  const variables = {
    latitude,
    location: {
      distance: { value: -1, symbol: "KILOMETER" },
      latitude,
      longitude,
    },
    longitude,
    rating: "4.5",
  }
  return (
    <TypedFeaturedProductsQuery variables={variables} displayError={false}>
      {({ data, loading }) => {
        const products = maybe(
          () => data.businessCategories.edges,
          []
        );
        const popularShops = maybe(() => data.stores.edges, []);
        const popularProducts = maybe(() => data.products.edges, []);
        if (loading) {
          return (
            <div className="container">
              <div className="Loadingskeleton">
                <div className="Selectboxes">
                  <div className="Skeletonbar categoriesSkeletonbar">
                  </div>
                  <div>
                    <ul className="Topboxes categoriesTopboxes">
                      <li className="TopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                    </ul>
                  </div>
                  <div className="Skeletoncards">
                    <div className="SkeletonCardsCont">
                      <div className="CardsTitle">
                      </div>
                      <div className="SkeletonCardsbody">
                      </div>
                      <div className="SkeletonCardsbar">
                      </div>
                      <div className="SkeletonCardtext">
                      </div>
                    </div>
                    <div className="SkeletonCardsCont">
                      <div className="CardsTitle">
                      </div>
                      <div className="SkeletonCardsbody">
                      </div>
                      <div className="SkeletonCardsbar">
                      </div>
                      <div className="SkeletonCardtext">
                      </div>
                    </div>
                    <div className="SkeletonCardsCont">
                      <div className="CardsTitle">
                      </div>
                      <div className="SkeletonCardsbody">
                      </div>
                      <div className="SkeletonCardsbar">
                      </div>
                      <div className="SkeletonCardtext">
                      </div>
                    </div>
                  </div>
                  <div className="Skeletoncards">
                    <div className="SkeletonCardsCont">
                      <div className="CardsTitle">
                      </div>
                      <div className="SkeletonCardsbody">
                      </div>
                      <div className="SkeletonCardsbar">
                      </div>
                      <div className="SkeletonCardtext">
                      </div>
                    </div>
                    <div className="SkeletonCardsCont">
                      <div className="CardsTitle">
                      </div>
                      <div className="SkeletonCardsbody">
                      </div>
                      <div className="SkeletonCardsbar">
                      </div>
                      <div className="SkeletonCardtext">
                      </div>
                    </div>
                    <div className="SkeletonCardsCont">
                      <div className="CardsTitle">
                      </div>
                      <div className="SkeletonCardsbody">
                      </div>
                      <div className="SkeletonCardsbar">
                      </div>
                      <div className="SkeletonCardtext">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        // if (products.length) {
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
            nextEl: '#js-next1',
            prevEl: '#js-prev1',
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
            nextEl: '#js-next2',
            prevEl: '#js-prev2',
          },
          slidesPerView: 2.5,
        }
        return (
          <div className="products-featured">
            <div className="container">
              <div className="categoryCarousel">
                <h3>{title}</h3>
                {products.length ?
                  <>
                    <div className="hrBorder"></div>
                    <div className="pro-list">
                      <Carousel renderCenterLeftControls={() => null} renderCenterRightControls={() => null} className="customSlider" productDetails={"categoryList"}>
                        {products.map(({ node: product }) => (
                          <div className="modalDivcategories"
                          // onClick={() => SeeDetails(product.name)}
                          >
                            <ProductListItem product={product} />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                  </>
                  :
                  <div>
                    <ul className="Topboxes categoriesTopboxes">
                      <li className="TopSkeletonboxes categoriesTopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes categoriesTopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes categoriesTopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes categoriesTopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes categoriesTopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes categoriesTopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes categoriesTopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes categoriesTopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes categoriesTopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                      <li className="TopSkeletonboxes categoriesTopSkeletonboxes">
                        <div className="Skeletonbox"></div>
                        <div className="SkeletonTitle"></div>
                      </li>
                    </ul>
                  </div>
                }
              </div>
              <div className="shopsCarousel">
                <div className="Carouseltitle">
                  <h3>Popular Shops</h3>
                  <p>{popularShops.length ? <Link to={`${searchUrl}?${searchQs("a")}`}>{popularShops && popularShops.length} {popularShops.length === 1 ? "result" : "results"} </Link> : <>{popularShops && popularShops.length} {popularShops.length === 1 ? "result" : "results"} </>}<img src={Next} alt="next" /></p>
                </div>
                {popularShops.length ?
                  <>
                    {window.innerWidth >= 540 && popularShops.length > 2 ?
                      <>
                        <div className="hrBorder"></div>
                        <div className="pro-list">
                          <Swiper {...HorizontalSwiperParams}>
                            {popularShops && popularShops.map(({ node: product }) => (
                              <SwiperSlide>
                                <div className="modalDiv">
                                  <BusinessTile redirectToShopPage={redirectToShopPage} product={product} />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <div id="js-prev1" className="swiper-button-prev" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-1ca5facc7b3713ec" aria-disabled="true"></div>
                          <div id="js-next1" className="swiper-button-next" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-40cee96a5dd35cf7" aria-disabled="false"></div>
                        </div>
                      </>
                      :
                      <>
                        <div className="hrBorder"></div>
                        <div className="pro-list">
                          <Carousel length={popularShops.length} dragging={false} productDetails={"productList"}>
                            {popularShops && popularShops.map(({ node: product }) => (
                              <div className="modalDiv">
                                <BusinessTile redirectToShopPage={redirectToShopPage} product={product} />
                              </div>
                            ))}
                          </Carousel>
                        </div>
                      </>
                    }
                  </>
                  : <div className="Skeletoncards" style={{ marginTop: 0 }}>
                    <div className="SkeletonCardsCont">
                      <div className="SkeletonCardsbody" style={{ marginTop: 0 }}>
                      </div>
                      <div className="SkeletonCardsbar">
                      </div>
                      <div className="SkeletonCardtext">
                      </div>
                    </div>
                    <div className="SkeletonCardsCont">
                      <div className="SkeletonCardsbody" style={{ marginTop: 0 }}>
                      </div>
                      <div className="SkeletonCardsbar">
                      </div>
                      <div className="SkeletonCardtext">
                      </div>
                    </div>
                    <div className="SkeletonCardsCont">
                      <div className="SkeletonCardsbody" style={{ marginTop: 0 }}>
                      </div>
                      <div className="SkeletonCardsbar">
                      </div>
                      <div className="SkeletonCardtext">
                      </div>
                    </div>
                  </div>
                }
              </div>
              <div className="productCarousel">
                <div className="shopsCarousel">
                  <div className="Carouseltitle">
                    <h3>Popular Products</h3>
                    <p>{popularProducts.length ? <Link to={`${searchUrl}?${searchQs("a")}`}>{popularProducts && popularProducts.length} {popularProducts.length === 1 ? "result" : "results"} </Link> : <>{popularProducts && popularProducts.length} {popularProducts.length === 1 ? "result" : "results"} </>}<img src={Next} alt="next" /></p>
                  </div>
                  {popularProducts.length ?
                    <>
                      {window.innerWidth >= 540 && popularProducts.length > 2 ?
                        <>
                          <div className="hrBorder"></div>
                          <div className="pro-list ProductsSwiper">
                            <Swiper {...ProductsHorizontalSwiperParams}>
                              {popularProducts && popularProducts.map(({ node: product }) => (
                                <SwiperSlide>
                                  <div className="modalDiv">
                                    <ProductTile redirectToProductPage={redirectToProductPage} product={product} />
                                  </div>
                                </SwiperSlide>
                              ))}
                            </Swiper>
                            <div id="js-prev2" className="swiper-button-prev" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-1ca5facc7b3713ec" aria-disabled="true"></div>
                            <div id="js-next2" className="swiper-button-next" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-40cee96a5dd35cf7" aria-disabled="false"></div>
                          </div>
                        </>
                        :
                        <>
                          <div className="hrBorder"></div>
                          <div className="pro-list">
                            <Carousel length={popularProducts.length} dragging={false} productDetails={"productList"}>
                              {popularProducts && popularProducts.map(({ node: product }) => (
                                <div className="modalDiv">
                                  <ProductTile redirectToProductPage={redirectToProductPage} product={product} />
                                </div>
                              ))}
                            </Carousel>
                          </div>
                        </>
                      }
                    </>
                    : <div className="Skeletoncards" style={{ marginTop: 0 }}>
                      <div className="SkeletonCardsCont">
                        <div className="SkeletonCardsbody" style={{ marginTop: 0 }}>
                        </div>
                        <div className="SkeletonCardsbar">
                        </div>
                        <div className="SkeletonCardtext">
                        </div>
                      </div>
                      <div className="SkeletonCardsCont">
                        <div className="SkeletonCardsbody" style={{ marginTop: 0 }}>
                        </div>
                        <div className="SkeletonCardsbar">
                        </div>
                        <div className="SkeletonCardtext">
                        </div>
                      </div>
                      <div className="SkeletonCardsCont">
                        <div className="SkeletonCardsbody" style={{ marginTop: 0 }}>
                        </div>
                        <div className="SkeletonCardsbar">
                        </div>
                        <div className="SkeletonCardtext">
                        </div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
        );
        // } else {
        //   return null;
        // }
      }}
    </TypedFeaturedProductsQuery>
  );
};

ProductsFeatured.defaultProps = {
  title: "Categories",
};

export default ProductsFeatured;
