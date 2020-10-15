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
  return (
    <TypedFeaturedProductsQuery displayError={false}>
      {({ data, loading }) => {
        const products = maybe(
          () => data.shop.homepageCollection.products.edges,
          []
        );
        if (loading) {
          return (
            <div className="container">
              <div className="Loadingskeleton">
                <div className="Selectboxes">
                  <div className="Skeletonbar">
                  </div>
                  <div className="container">
                    <ul className="Topboxes">
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
        if (products.length) {
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
                </div>
                <div className="shopsCarousel">
                  <div className="Carouseltitle">
                    <h3>Popular Shops</h3>
                    <p><Link to={`${searchUrl}?${searchQs("a")}`}>123 results </Link><img src={Next} alt="next" /></p>
                  </div>
                  < div className="hrBorder"></div>
                  <div  className="pro-list">
                  
                    <Swiper {...HorizontalSwiperParams}>
                      {/* {products.map(({ node: product }) => ( */}
                      <SwiperSlide>
                        <div className="modalDiv">
                          <BusinessTile redirectToShopPage={redirectToShopPage} product={{
                            __typename: "Store",
                            address: { id: "U3RvcmVBZGRyZXNzOjE2", address: null, __typename: "StoreAddress" },
                            category: "Mexican Resturant . ££",
                            closingHours: "12:42 PM",
                            description: "Mexican Resturant . ££",
                            distance: "5 mi",
                            id: "U3RvcmU6Njg=",
                            images: [{
                              id: "",
                              url: "https://dev-backend.sitarri.co.uk/media/products/image_bNIIwsF.png",
                            },
                            {
                              id: "",
                              url: "https://dev-backend.sitarri.co.uk/media/products/header-image.png",
                            }, {
                              id: "",
                              url: "https://dev-backend.sitarri.co.uk/media/products/image_bNIIwsF.png",
                            }],
                            logo: "https://dev-backend.sitarri.co.uk/media/products/54277565_2025471117576200_2283093649778540544_n.png",
                            name: "Taqueria",
                            openingHours: "09:00 AM",
                            rating: 4.0,
                            storeProduct: {
                              __typename: "ProductCountableConnection",
                              edges: [],
                            },
                            tags: [
                              {
                                name: "Mexican",
                              },
                              {
                                name: "Taco",
                              },
                              {
                                name: "Tequila",
                              },
                            ],
                            totalReviews: 600,
                          }} />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="modalDiv">
                          <BusinessTile redirectToShopPage={redirectToShopPage} product={{
                            __typename: "Store",
                            address: { id: "U3RvcmVBZGRyZXNzOjE2", address: null, __typename: "StoreAddress" },
                            category: "Burger Resturant . ££",
                            closingHours: "12:42 PM",
                            description: "Burger Resturant . ££",
                            distance: "5.9 mi",
                            id: "U3RvcmU6Njg=",
                            images: [{
                              id: "",
                              url: "https://dev-backend.sitarri.co.uk/media/products/header-image.png",
                            },
                            {
                              id: "",
                              url: "https://dev-backend.sitarri.co.uk/media/products/image_bNIIwsF.png",
                            }, {
                              id: "",
                              url: "https://dev-backend.sitarri.co.uk/media/products/header-image.png",
                            }],
                            logo: "https://dev-backend.sitarri.co.uk/media/products/12940200_1057056874332958_365933657_a.png",
                            name: "Five Guys",
                            openingHours: "09:00 AM",
                            rating: 4.6,
                            storeProduct: {
                              __typename: "ProductCountableConnection",
                              edges: [],
                            },
                            tags: [
                              {
                                name: "Burger",
                              },
                              {
                                name: "American",
                              },
                              {
                                name: "Milkshakes",
                              },
                            ],
                            totalReviews: 578,
                          }} />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="modalDiv">
                          <BusinessTile redirectToShopPage={redirectToShopPage} product={{
                            __typename: "Store",
                            address: { id: "U3RvcmVBZGRyZXNzOjE2", address: null, __typename: "StoreAddress" },
                            category: "Mexican Resturant . ££",
                            closingHours: "12:42 PM",
                            description: "Mexican Resturant . ££",
                            distance: "5 mi",
                            id: "U3RvcmU6Njg=",
                            images: [{
                              id: "",
                              url: "https://dev-backend.sitarri.co.uk/media/products/image_bNIIwsF.png",
                            },
                            {
                              id: "",
                              url: "https://dev-backend.sitarri.co.uk/media/products/header-image.png",
                            }, {
                              id: "",
                              url: "https://dev-backend.sitarri.co.uk/media/products/image_bNIIwsF.png",
                            }],
                            logo: "https://dev-backend.sitarri.co.uk/media/products/54277565_2025471117576200_2283093649778540544_n.png",
                            name: "Taqueria",
                            openingHours: "09:00 AM",
                            rating: 4.0,
                            storeProduct: {
                              __typename: "ProductCountableConnection",
                              edges: [],
                            },
                            tags: [
                              {
                                name: "Mexican",
                              },
                              {
                                name: "Taco",
                              },
                              {
                                name: "Tequila",
                              },
                            ],
                            totalReviews: 600,
                          }} />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="modalDiv">
                          <BusinessTile redirectToShopPage={redirectToShopPage} product={{
                            __typename: "Store",
                            address: { id: "U3RvcmVBZGRyZXNzOjE2", address: null, __typename: "StoreAddress" },
                            category: "Burger Resturant . ££",
                            closingHours: "12:42 PM",
                            description: "Burger Resturant . ££",
                            distance: "5.9 mi",
                            id: "U3RvcmU6Njg=",
                            images: [{
                              id: "",
                              url: "https://dev-backend.sitarri.co.uk/media/products/header-image.png",
                            },
                            {
                              id: "",
                              url: "https://dev-backend.sitarri.co.uk/media/products/image_bNIIwsF.png",
                            }, {
                              id: "",
                              url: "https://dev-backend.sitarri.co.uk/media/products/header-image.png",
                            }],
                            logo: "https://dev-backend.sitarri.co.uk/media/products/12940200_1057056874332958_365933657_a.png",
                            name: "Five Guys",
                            openingHours: "09:00 AM",
                            rating: 4.6,
                            storeProduct: {
                              __typename: "ProductCountableConnection",
                              edges: [],
                            },
                            tags: [
                              {
                                name: "Burger",
                              },
                              {
                                name: "American",
                              },
                              {
                                name: "Milkshakes",
                              },
                            ],
                            totalReviews: 578,
                          }} />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <div id="js-prev1" className="swiper-button-prev"  role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-1ca5facc7b3713ec" aria-disabled="true"></div>
                  <div id="js-next1" className="swiper-button-next" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-40cee96a5dd35cf7" aria-disabled="false"></div>
                  </div>
                </div>
                <div className="productCarousel">
                  <div className="shopsCarousel">
                    <div className="Carouseltitle">
                      <h3>Popular Products</h3>
                      <p><Link to={`${searchUrl}?${searchQs("a")}`}>123 results </Link><img src={Next} alt="next" /></p>
                    </div>
                    <div className="hrBorder"></div>
                    <div className="pro-list ProductsSwiper">
                    
                      <Swiper {...ProductsHorizontalSwiperParams}>
                        <SwiperSlide>
                          <div className="modalDiv">
                            <ProductTile redirectToProductPage={redirectToProductPage} product={{
                              __typename: "Product",
                              category: { id: "Q2F0ZWdvcnk6MTE=", name: "Summer Cloths", __typename: "Category" },
                              description: "Our regular two-patty burger with two slices of melted american cheese added.",
                              descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "Our regular two-patty burger with two slices of melted american cheese added.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                              id: "UHJvZHVjdDozMQ==",
                              images: [{
                                id: "",
                                url: "https://dev-backend.sitarri.co.uk/media/products/item-image.png",
                              },
                              {
                                id: "",
                                url: "https://dev-backend.sitarri.co.uk/media/products/image_1_2.png",
                              }, {
                                id: "",
                                url: "https://dev-backend.sitarri.co.uk/media/products/item-image.png",
                              }],
                              name: "Cheeseburger",
                              pricing: {
                                __typename: "ProductPricingInfo",
                                onSale: false,
                                priceRange: {
                                  __typename: "TaxedMoneyRange",
                                  start: {
                                    __typename: "TaxedMoney",
                                    gross: {
                                      __typename: "Money",
                                      amount: 9.95,
                                      currency: "GBP",
                                    },
                                    net: {
                                      __typename: "Money",
                                      amount: 9.95,
                                      currency: "GBP",
                                    },
                                  },
                                  stop: {
                                    __typename: "TaxedMoney",
                                    gross: {
                                      __typename: "Money",
                                      amount: 9.95,
                                      currency: "GBP",
                                    },
                                    net: {
                                      __typename: "Money",
                                      amount: 9.95,
                                      currency: "GBP",
                                    },
                                  },
                                },
                                priceRangeUndiscounted: {
                                  __typename: "TaxedMoneyRange",
                                  start: {
                                    __typename: "TaxedMoney",
                                    gross: {
                                      __typename: "Money",
                                      amount: 9.95,
                                      currency: "GBP",
                                    },
                                    net: {
                                      __typename: "Money",
                                      amount: 9.95,
                                      currency: "GBP",
                                    },
                                  },
                                  stop: {
                                    __typename: "TaxedMoney",
                                    gross: {
                                      __typename: "Money",
                                      amount: 9.95,
                                      currency: "GBP",
                                    },
                                    net: {
                                      __typename: "Money",
                                      amount: 9.95,
                                      currency: "GBP",
                                    },
                                  },
                                },
                              },
                              store: {
                                __typename: "Store",
                                closingHours: "12:42 PM",
                                distance: "5 mi",
                                id: "U3RvcmU6NTk=",
                                images: [
                                  {
                                    __typename: "StoreImage",
                                    url: "https://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                                  },
                                ],
                                logo: "https://dev-backend.sitarri.co.uk/media/products/12940200_1057056874332958_365933657_a.png",
                                name: "Five Guys",
                                openingHours: "09:00 AM",
                                rating: 4.6,
                                tags: [
                                  {
                                    name: "Vegetables",
                                  },
                                  {
                                    name: "Food",
                                  },
                                  {
                                    name: "Drinks",
                                  },
                                ],
                                totalReviews: 395,
                              },
                              thumbnail: {
                                __typename: "Image",
                                alt: "",
                                url: "https://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                              },
                              thumbnail2x: {
                                __typename: "Image",
                                url: "https://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                              },
                            }} />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="modalDiv">
                            <ProductTile redirectToProductPage={redirectToProductPage} product={{
                              __typename: "Product",
                              category: { id: "Q2F0ZWdvcnk6MTE=", name: "Summer Cloths", __typename: "Category" },
                              description: "This is such a great product and you should definitely buy it cause it is so great.",
                              descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "This is such a great product and you should definitely buy it cause it is so great.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                              id: "UHJvZHVjdDozMQ==",
                              images: [{
                                id: "",
                                url: "https://dev-backend.sitarri.co.uk/media/products/image_1_2.png",
                              },
                              {
                                id: "",
                                url: "https://dev-backend.sitarri.co.uk/media/products/item-image.png",
                              }, {
                                id: "",
                                url: "https://dev-backend.sitarri.co.uk/media/products/image_1_2.png",
                              }],
                              name: "Black Bean Tostada (V)",
                              pricing: {
                                __typename: "ProductPricingInfo",
                                onSale: false,
                                priceRange: {
                                  __typename: "TaxedMoneyRange",
                                  start: {
                                    __typename: "TaxedMoney",
                                    gross: {
                                      __typename: "Money",
                                      amount: 4.20,
                                      currency: "GBP",
                                    },
                                    net: {
                                      __typename: "Money",
                                      amount: 4.20,
                                      currency: "GBP",
                                    },
                                  },
                                  stop: {
                                    __typename: "TaxedMoney",
                                    gross: {
                                      __typename: "Money",
                                      amount: 4.20,
                                      currency: "GBP",
                                    },
                                    net: {
                                      __typename: "Money",
                                      amount: 4.20,
                                      currency: "GBP",
                                    },
                                  },
                                },
                                priceRangeUndiscounted: {
                                  __typename: "TaxedMoneyRange",
                                  start: {
                                    __typename: "TaxedMoney",
                                    gross: {
                                      __typename: "Money",
                                      amount: 4.20,
                                      currency: "GBP",
                                    },
                                    net: {
                                      __typename: "Money",
                                      amount: 4.20,
                                      currency: "GBP",
                                    },
                                  },
                                  stop: {
                                    __typename: "TaxedMoney",
                                    gross: {
                                      __typename: "Money",
                                      amount: 4.20,
                                      currency: "GBP",
                                    },
                                    net: {
                                      __typename: "Money",
                                      amount: 4.20,
                                      currency: "GBP",
                                    },
                                  },
                                },
                              },
                              store: {
                                __typename: "Store",
                                closingHours: "12:42 PM",
                                distance: "5 mi",
                                id: "U3RvcmU6NTk=",
                                images: [
                                  {
                                    __typename: "StoreImage",
                                    url: "https://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                                  },
                                ],
                                logo: "https://dev-backend.sitarri.co.uk/media/products/54277565_2025471117576200_2283093649778540544_n.png",
                                name: "Taqueria",
                                openingHours: "09:00 AM",
                                rating: 4.0,
                                tags: [
                                  {
                                    name: "Vegetables",
                                  },
                                  {
                                    name: "Food",
                                  },
                                  {
                                    name: "Drinks",
                                  },
                                ],
                                totalReviews: 600,
                              },
                              thumbnail: {
                                __typename: "Image",
                                alt: "",
                                url: "https://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                              },
                              thumbnail2x: {
                                __typename: "Image",
                                url: "https://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                              },
                            }} />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="modalDiv">
                            <ProductTile redirectToProductPage={redirectToProductPage} product={{
                              __typename: "Product",
                              category: { id: "Q2F0ZWdvcnk6MTE=", name: "Summer Cloths", __typename: "Category" },
                              description: "Our regular two-patty burger with two slices of melted american cheese added.",
                              descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "Our regular two-patty burger with two slices of melted american cheese added.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                              id: "UHJvZHVjdDozMQ==",
                              images: [{
                                id: "",
                                url: "https://dev-backend.sitarri.co.uk/media/products/item-image.png",
                              },
                              {
                                id: "",
                                url: "https://dev-backend.sitarri.co.uk/media/products/image_1_2.png",
                              }, {
                                id: "",
                                url: "https://dev-backend.sitarri.co.uk/media/products/item-image.png",
                              }],
                              name: "Cheeseburger",
                              pricing: {
                                __typename: "ProductPricingInfo",
                                onSale: false,
                                priceRange: {
                                  __typename: "TaxedMoneyRange",
                                  start: {
                                    __typename: "TaxedMoney",
                                    gross: {
                                      __typename: "Money",
                                      amount: 9.95,
                                      currency: "GBP",
                                    },
                                    net: {
                                      __typename: "Money",
                                      amount: 9.95,
                                      currency: "GBP",
                                    },
                                  },
                                  stop: {
                                    __typename: "TaxedMoney",
                                    gross: {
                                      __typename: "Money",
                                      amount: 9.95,
                                      currency: "GBP",
                                    },
                                    net: {
                                      __typename: "Money",
                                      amount: 9.95,
                                      currency: "GBP",
                                    },
                                  },
                                },
                                priceRangeUndiscounted: {
                                  __typename: "TaxedMoneyRange",
                                  start: {
                                    __typename: "TaxedMoney",
                                    gross: {
                                      __typename: "Money",
                                      amount: 9.95,
                                      currency: "GBP",
                                    },
                                    net: {
                                      __typename: "Money",
                                      amount: 9.95,
                                      currency: "GBP",
                                    },
                                  },
                                  stop: {
                                    __typename: "TaxedMoney",
                                    gross: {
                                      __typename: "Money",
                                      amount: 9.95,
                                      currency: "GBP",
                                    },
                                    net: {
                                      __typename: "Money",
                                      amount: 9.95,
                                      currency: "GBP",
                                    },
                                  },
                                },
                              },
                              store: {
                                __typename: "Store",
                                closingHours: "12:42 PM",
                                distance: "5 mi",
                                id: "U3RvcmU6NTk=",
                                images: [
                                  {
                                    __typename: "StoreImage",
                                    url: "https://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                                  },
                                ],
                                logo: "https://dev-backend.sitarri.co.uk/media/products/12940200_1057056874332958_365933657_a.png",
                                name: "Five Guys",
                                openingHours: "09:00 AM",
                                rating: 4.6,
                                tags: [
                                  {
                                    name: "Vegetables",
                                  },
                                  {
                                    name: "Food",
                                  },
                                  {
                                    name: "Drinks",
                                  },
                                ],
                                totalReviews: 395,
                              },
                              thumbnail: {
                                __typename: "Image",
                                alt: "",
                                url: "https://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                              },
                              thumbnail2x: {
                                __typename: "Image",
                                url: "https://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                              },
                            }} />
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="modalDiv">
                            <ProductTile redirectToProductPage={redirectToProductPage} product={{
                              __typename: "Product",
                              category: { id: "Q2F0ZWdvcnk6MTE=", name: "Summer Cloths", __typename: "Category" },
                              description: "This is such a great product and you should definitely buy it cause it is so great.",
                              descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "This is such a great product and you should definitely buy it cause it is so great.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                              id: "UHJvZHVjdDozMQ==",
                              images: [{
                                id: "",
                                url: "https://dev-backend.sitarri.co.uk/media/products/image_1_2.png",
                              },
                              {
                                id: "",
                                url: "https://dev-backend.sitarri.co.uk/media/products/item-image.png",
                              }, {
                                id: "",
                                url: "https://dev-backend.sitarri.co.uk/media/products/image_1_2.png",
                              }],
                              name: "Black Bean Tostada (V)",
                              pricing: {
                                __typename: "ProductPricingInfo",
                                onSale: false,
                                priceRange: {
                                  __typename: "TaxedMoneyRange",
                                  start: {
                                    __typename: "TaxedMoney",
                                    gross: {
                                      __typename: "Money",
                                      amount: 4.20,
                                      currency: "GBP",
                                    },
                                    net: {
                                      __typename: "Money",
                                      amount: 4.20,
                                      currency: "GBP",
                                    },
                                  },
                                  stop: {
                                    __typename: "TaxedMoney",
                                    gross: {
                                      __typename: "Money",
                                      amount: 4.20,
                                      currency: "GBP",
                                    },
                                    net: {
                                      __typename: "Money",
                                      amount: 4.20,
                                      currency: "GBP",
                                    },
                                  },
                                },
                                priceRangeUndiscounted: {
                                  __typename: "TaxedMoneyRange",
                                  start: {
                                    __typename: "TaxedMoney",
                                    gross: {
                                      __typename: "Money",
                                      amount: 4.20,
                                      currency: "GBP",
                                    },
                                    net: {
                                      __typename: "Money",
                                      amount: 4.20,
                                      currency: "GBP",
                                    },
                                  },
                                  stop: {
                                    __typename: "TaxedMoney",
                                    gross: {
                                      __typename: "Money",
                                      amount: 4.20,
                                      currency: "GBP",
                                    },
                                    net: {
                                      __typename: "Money",
                                      amount: 4.20,
                                      currency: "GBP",
                                    },
                                  },
                                },
                              },
                              store: {
                                __typename: "Store",
                                closingHours: "12:42 PM",
                                distance: "5 mi",
                                id: "U3RvcmU6NTk=",
                                images: [
                                  {
                                    __typename: "StoreImage",
                                    url: "https://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                                  },
                                ],
                                logo: "https://dev-backend.sitarri.co.uk/media/products/54277565_2025471117576200_2283093649778540544_n.png",
                                name: "Taqueria",
                                openingHours: "09:00 AM",
                                rating: 4.0,
                                tags: [
                                  {
                                    name: "Vegetables",
                                  },
                                  {
                                    name: "Food",
                                  },
                                  {
                                    name: "Drinks",
                                  },
                                ],
                                totalReviews: 600,
                              },
                              thumbnail: {
                                __typename: "Image",
                                alt: "",
                                url: "https://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                              },
                              thumbnail2x: {
                                __typename: "Image",
                                url: "https://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                              },
                            }} />
                          </div>
                        </SwiperSlide>
                      </Swiper>
                      <div id="js-prev2" className="swiper-button-prev"  role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-1ca5facc7b3713ec" aria-disabled="true"></div>
                    <div id="js-next2" className="swiper-button-next" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-40cee96a5dd35cf7" aria-disabled="false"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          return null;
        }
      }}
    </TypedFeaturedProductsQuery>
  );
};

ProductsFeatured.defaultProps = {
  title: "Categories",
};

export default ProductsFeatured;
