import * as React from "react";
import { Link } from "react-router-dom";

import { ProductListItem } from "..";
// import { generateProductUrl, maybe } from "../../core/utils";
import { maybe } from "../../core/utils";
import { TypedFeaturedProductsQuery } from "./queries";

import { searchUrl } from "../../app/routes";

import { stringify } from "query-string";

import { BusinessTile, ProductTile } from "@components/molecules";
// import { Modal } from "@components/organisms/Modal";

import Carousel from "../Carousel";

import Next from "../../images/next.svg"

import "./scss/index.scss";

interface ProductsFeaturedProps {
  title?: string;
  SeeDetails: any
}

const ProductsFeatured: React.FC<ProductsFeaturedProps> = ({ SeeDetails, title }) => {
  // const [displayNewModal, setDisplayNewModal] = React.useState(false);
  // const [showAllResults, setShowAllResults] = React.useState(false);
  // const [showProductResults, setShowProductResults] = React.useState(false);
  const [latitude, setLatitude] = React.useState(0)
  const [longitude, setLongitude] = React.useState(0)
  // const [product] = React.useState({});
  // const [show, setShow] = React.useState(true);
  // const onShowAllResultsClick = () => {
  //   if (showAllResults) {
  //     return setShowAllResults(false)
  //   }
  //   setShowAllResults(true)
  // }

  // const onShowProductResultsClick = () => {
  //   if (showProductResults) {
  //     return setShowProductResults(false)
  //   }
  //   setShowProductResults(true)
  // }

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
    <>
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
                    {/* skeletonbar */}
                    <div className="Skeletonbar">
                    </div>
                    {/* skeletonbar */}

                    {/* TOPBOXES */}
                    <div className="">
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
                    {/* TOPBOXES */}


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
              </div>
            )
          }
          if (products.length) {
            return (
              <div className="products-featured">
                <div className="container">
                  <div className="categoryCarousel">
                    <h3>{title}</h3>
                    <div className="hrBorder"></div>
                    {/* <Carousel> */}
                    <div className="pro-list">
                      <Carousel renderCenterLeftControls={() => null} renderCenterRightControls={() => null} className="customSlider" productDetails={"categoryList"}>
                        {products.map(({ node: product }) => (

                          <div className="modalDivcategories"
                            onClick={() => {
                              // setDisplayNewModal(true)
                              // setProduct(product)
                              SeeDetails(product.name)
                            }}
                          >
                            {/* <Link
                          to={generateProductUrl(product.id, product.name)}
                          key={product.id}
                        > */}
                            <ProductListItem product={product} />
                            {/* </Link> */}
                          </div>

                        ))}
                      </Carousel>
                    </div>
                    {/* </Carousel> */}
                  </div>

                  <div className="shopsCarousel">
                    <div className="Carouseltitle">
                      <h3>Popular Shops</h3>
                      <p><Link to={`${searchUrl}?${searchQs("a")}`}>123 results </Link><img src={Next} alt="next" /></p>
                    </div>
                    < div className="hrBorder"></div>
                    {/* <Carousel> */}
                    <div className="pro-list">
                      <Carousel length={4} className="customSlider" productDetails={"productList"}>
                        {/* {products.map(({ node: product }) => ( */}

                        <div className="modalDiv"
                          onClick={() => {
                            // setDisplayNewModal(true)
                            // setProduct(product)
                            // SeeDetails(product.name)
                          }}
                        >
                          {/* <Link
                          to={generateProductUrl(product.id, product.name)}
                          key={product.id}
                        > */}
                          <BusinessTile product={{
                            __typename: "Store",
                            address: { id: "U3RvcmVBZGRyZXNzOjE2", address: null, __typename: "StoreAddress" },
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
                          {/* <ProductListItem product={product} /> */}
                          {/* </Link> */}
                        </div>
                        <div className="modalDiv"
                          onClick={() => {
                            // setDisplayNewModal(true)
                            // setProduct(product)
                            // SeeDetails(product.name)
                          }}
                        >
                          {/* <Link
                          to={generateProductUrl(product.id, product.name)}
                          key={product.id}
                        > */}
                          <BusinessTile product={{
                            __typename: "Store",
                            address: { id: "U3RvcmVBZGRyZXNzOjE2", address: null, __typename: "StoreAddress" },
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
                          {/* <ProductListItem product={product} /> */}
                          {/* </Link> */}
                        </div>
                        <div className="modalDiv"
                          onClick={() => {
                            // setDisplayNewModal(true)
                            // setProduct(product)
                            // SeeDetails(product.name)
                          }}
                        >
                          {/* <Link
                          to={generateProductUrl(product.id, product.name)}
                          key={product.id}
                        > */}
                          <BusinessTile product={{
                            __typename: "Store",
                            address: { id: "U3RvcmVBZGRyZXNzOjE2", address: null, __typename: "StoreAddress" },
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
                          {/* <ProductListItem product={product} /> */}
                          {/* </Link> */}
                        </div>
                        <div className="modalDiv"
                          onClick={() => {
                            // setDisplayNewModal(true)
                            // setProduct(product)
                            // SeeDetails(product.name)
                          }}
                        >
                          {/* <Link
                          to={generateProductUrl(product.id, product.name)}
                          key={product.id}
                        > */}
                          <BusinessTile product={{
                            __typename: "Store",
                            address: { id: "U3RvcmVBZGRyZXNzOjE2", address: null, __typename: "StoreAddress" },
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
                          {/* <ProductListItem product={product} /> */}
                          {/* </Link> */}
                        </div>


                        {/* ))} */}
                      </Carousel>

                    </div>
                    {/* </Carousel> */}
                  </div>

                          <div className="productCarousel">
                  <div className="shopsCarousel">
                    <div className="Carouseltitle">
                      <h3>Popular Products</h3>
                      <p><Link to={`${searchUrl}?${searchQs("a")}`}>123 results </Link><img src={Next} alt="next" /></p>
                    </div>
                    <div className="hrBorder"></div>
                    {/* <Carousel> */}
                    <div className="pro-list">
                      <Carousel length={4} className="customSlider" productDetails={"productList"}>
                        {/* {products.map(({ node: product }) => ( */}

                        <div className="modalDiv"
                          onClick={() => {
                            // setDisplayNewModal(true)
                            // setProduct(product)
                            // SeeDetails(product.name)
                          }}
                        >
                          {/* <Link
                          to={generateProductUrl(product.id, product.name)}
                          key={product.id}
                        > */}
                          <ProductTile product={{
                            __typename: "Product",
                            category: { id: "Q2F0ZWdvcnk6MTE=", name: "Summer Cloths", __typename: "Category" },
                            description: "Our regular two-patty burger with two slices of melted american cheese added.",
                            // descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "ASOS DESIGN festival pork pie hat in beige straw with band", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
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
                          {/* <ProductListItem product={product} /> */}
                          {/* </Link> */}
                        </div>

                        <div className="modalDiv"
                          onClick={() => {
                            // setDisplayNewModal(true)
                            // setProduct(product)
                            // SeeDetails(product.name)
                          }}
                        >
                          {/* <Link
                          to={generateProductUrl(product.id, product.name)}
                          key={product.id}
                        > */}
                          <ProductTile product={{
                            __typename: "Product",
                            category: { id: "Q2F0ZWdvcnk6MTE=", name: "Summer Cloths", __typename: "Category" },
                            description: "This is such a great product and you should definitely buy it cause it is so great.",
                            // descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "ASOS DESIGN festival pork pie hat in beige straw with band", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
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
                          {/* <ProductListItem product={product} /> */}
                          {/* </Link> */}
                        </div>


                        <div className="modalDiv"
                          onClick={() => {
                            // setDisplayNewModal(true)
                            // setProduct(product)
                            // SeeDetails(product.name)
                          }}
                        >
                          {/* <Link
                          to={generateProductUrl(product.id, product.name)}
                          key={product.id}
                        > */}
                          <ProductTile product={{
                            __typename: "Product",
                            category: { id: "Q2F0ZWdvcnk6MTE=", name: "Summer Cloths", __typename: "Category" },
                            description: "Our regular two-patty burger with two slices of melted american cheese added.",
                            // descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "ASOS DESIGN festival pork pie hat in beige straw with band", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
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
                          {/* <ProductListItem product={product} /> */}
                          {/* </Link> */}
                        </div>


                        <div className="modalDiv"
                          onClick={() => {
                            // setDisplayNewModal(true)
                            // setProduct(product)
                            // SeeDetails(product.name)
                          }}
                        >
                          {/* <Link
                          to={generateProductUrl(product.id, product.name)}
                          key={product.id}
                        > */}
                          <ProductTile product={{
                            __typename: "Product",
                            category: { id: "Q2F0ZWdvcnk6MTE=", name: "Summer Cloths", __typename: "Category" },
                            description: "This is such a great product and you should definitely buy it cause it is so great.",
                            // descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "ASOS DESIGN festival pork pie hat in beige straw with band", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
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
                          {/* <ProductListItem product={product} /> */}
                          {/* </Link> */}
                        </div>


                        {/* ))} */}
                      </Carousel>
                    </div>
                    {/* </Carousel> */}
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
      {/* {
        displayNewModal && (
          <Modal
            title=""
            hide={() => {
              setDisplayNewModal(false);
              setShow(false);
            }}
            formId="product-form"
            disabled={false}
            show={show}
            submitBtnText=""
          >
            <ProductListItem product={product} />
          </Modal>
        )
      } */}
    </>
  );
};

ProductsFeatured.defaultProps = {
  title: "Categories",
};

export default ProductsFeatured;
