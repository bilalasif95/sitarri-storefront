import * as React from "react";
// import { Link } from "react-router-dom";

import { ProductListItem } from "..";
// import { generateProductUrl, maybe } from "../../core/utils";
import { maybe } from "../../core/utils";
import { TypedFeaturedProductsQuery } from "./queries";

import { BusinessTile, ProductTile } from "@components/molecules";
import { Modal } from "@components/organisms/Modal";

import Carousel from "../Carousel";

import Next from "../../images/next.svg"

import "./scss/index.scss";

interface ProductsFeaturedProps {
  title?: string;
  SeeDetails: any
}

const ProductsFeatured: React.FC<ProductsFeaturedProps> = ({ SeeDetails, title }) => {
  const [displayNewModal, setDisplayNewModal] = React.useState(false);
  const [showAllResults, setShowAllResults] = React.useState(false);
  const [showProductResults, setShowProductResults] = React.useState(false);
  const [product] = React.useState({});
  const [show, setShow] = React.useState(true);
  const onShowAllResultsClick = () => {
    if (showAllResults) {
      return setShowAllResults(false)
    }
    setShowAllResults(true)
  }

  const onShowProductResultsClick = () => {
    if (showProductResults) {
      return setShowProductResults(false)
    }
    setShowProductResults(true)
  }

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
                      {window.innerWidth >= 540 ? 123 > 3 && <p><span onClick={onShowProductResultsClick}>{showProductResults ? "Hide" : "Show"} 123 results </span><img src={Next} alt="next" /></p>
                        : 123 > 2 && <p><span onClick={onShowProductResultsClick}>{showProductResults ? "Hide" : "Show"} 123 results </span><img src={Next} alt="next" /></p>
                      }
                    </div>
                    < div className="hrBorder"></div>
                    {/* <Carousel> */}
                    {!showProductResults ? < div className="pro-list">
                      <Carousel className="customSlider" productDetails={"productList"}>
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
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-1-beige.jpeg",
                            },
                            {
                              id: "",
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                            }, {
                              id: "",
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                            }],
                            logo: "http://backend.sitarri.rnssol.com/media/store/404Page.jpg",
                            name: "Taqueria",
                            openingHours: "09:00 AM",
                            rating: 0,
                            storeProduct: {
                              __typename: "ProductCountableConnection",
                              edges: [],
                            },
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
                            totalReviews: 10,
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
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-1-beige.jpeg",
                            },
                            {
                              id: "",
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                            }, {
                              id: "",
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                            }],
                            logo: "http://backend.sitarri.rnssol.com/media/store/404Page.jpg",
                            name: "Five Guys",
                            openingHours: "09:00 AM",
                            rating: 0,
                            storeProduct: {
                              __typename: "ProductCountableConnection",
                              edges: [],
                            },
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
                            totalReviews: 10,
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
                            distance: "52 mi",
                            id: "U3RvcmU6Njg=",
                            images: [],
                            logo: "http://backend.sitarri.rnssol.com/media/store/404Page.jpg",
                            name: "Taqueria",
                            openingHours: "09:00 AM",
                            rating: 0,
                            storeProduct: {
                              __typename: "ProductCountableConnection",
                              edges: [],
                            },
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
                            totalReviews: 10,
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
                            distance: "52 mi",
                            id: "U3RvcmU6Njg=",
                            images: [],
                            logo: "http://backend.sitarri.rnssol.com/media/store/404Page.jpg",
                            name: "Taqueria",
                            openingHours: "09:00 AM",
                            rating: 0,
                            storeProduct: {
                              __typename: "ProductCountableConnection",
                              edges: [],


                            },
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
                            totalReviews: 10,
                          }} />
                          {/* <ProductListItem product={product} /> */}
                          {/* </Link> */}
                        </div>


                        {/* ))} */}
                      </Carousel>

                    </div>
                      : <div className="allResults">
                        <BusinessTile product={{
                          __typename: "Store",
                          address: { id: "U3RvcmVBZGRyZXNzOjE2", address: null, __typename: "StoreAddress" },
                          closingHours: "12:42 PM",
                          description: "Mexican Resturant . ££",
                          distance: "52 mi",
                          id: "U3RvcmU6Njg=",
                          images: [],
                          logo: "http://backend.sitarri.rnssol.com/media/store/404Page.jpg",
                          name: "Taqueria",
                          openingHours: "09:00 AM",
                          rating: 0,
                          storeProduct: {
                            __typename: "ProductCountableConnection",
                            edges: [],
                          },
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
                          totalReviews: 10,
                        }} />

                        <BusinessTile product={{
                          __typename: "Store",
                          address: { id: "U3RvcmVBZGRyZXNzOjE2", address: null, __typename: "StoreAddress" },
                          closingHours: "12:42 PM",
                          description: "Mexican Resturant . ££",
                          distance: "52 mi",
                          id: "U3RvcmU6Njg=",
                          images: [],
                          logo: "http://backend.sitarri.rnssol.com/media/store/404Page.jpg",
                          name: "Taqueria",
                          openingHours: "09:00 AM",
                          rating: 0,
                          storeProduct: {
                            __typename: "ProductCountableConnection",
                            edges: [],
                          },
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
                          totalReviews: 10,
                        }} />

                        <BusinessTile product={{
                          __typename: "Store",
                          address: { id: "U3RvcmVBZGRyZXNzOjE2", address: null, __typename: "StoreAddress" },
                          closingHours: "12:42 PM",
                          description: "Mexican Resturant . ££",
                          distance: "52 mi",
                          id: "U3RvcmU6Njg=",
                          images: [],
                          logo: "http://backend.sitarri.rnssol.com/media/store/404Page.jpg",
                          name: "Taqueria",
                          openingHours: "09:00 AM",
                          rating: 0,
                          storeProduct: {
                            __typename: "ProductCountableConnection",
                            edges: [],


                          },
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
                          totalReviews: 10,
                        }} />

                        <BusinessTile product={{
                          __typename: "Store",
                          address: { id: "U3RvcmVBZGRyZXNzOjE2", address: null, __typename: "StoreAddress" },
                          closingHours: "12:42 PM",
                          description: "Mexican Resturant . ££",
                          distance: "52 mi",
                          id: "U3RvcmU6Njg=",
                          images: [],
                          logo: "http://backend.sitarri.rnssol.com/media/store/404Page.jpg",
                          name: "Taqueria",
                          openingHours: "09:00 AM",
                          rating: 0,
                          storeProduct: {
                            __typename: "ProductCountableConnection",
                            edges: [],
                          },
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
                          totalReviews: 10,
                        }} />
                      </div>
                    }
                    {/* </Carousel> */}
                  </div>


                  <div className="shopsCarousel">
                    <div className="Carouseltitle">
                      <h3>Popular Products</h3>
                      {window.innerWidth >= 540 ? 123 > 3 && <p><span onClick={onShowAllResultsClick}>{showAllResults ? "Hide" : "Show"} 123 results </span><img src={Next} alt="next" /></p>
                        : 123 > 2 && <p><span onClick={onShowAllResultsClick}>{showAllResults ? "Hide" : "Show"} 123 results </span><img src={Next} alt="next" /></p>
                      }
                    </div>
                    <div className="hrBorder"></div>
                    {/* <Carousel> */}
                    {!showAllResults ? <div className="pro-list">
                      <Carousel className="customSlider" productDetails={"productList"}>
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
                            // description: "",
                            // descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "ASOS DESIGN festival pork pie hat in beige straw with band", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                            id: "UHJvZHVjdDozMQ==",
                            images: [{
                              id: "",
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-1-beige.jpeg",
                            },
                            {
                              id: "",
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                            }, {
                              id: "",
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                            }],
                            name: "ASOS DESIGN festival pork pie hat in beige straw with band",
                            pricing: {
                              __typename: "ProductPricingInfo",
                              onSale: false,
                              priceRange: {

                                __typename: "TaxedMoneyRange",
                                start: {
                                  __typename: "TaxedMoney",
                                  gross: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                  net: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                },
                                stop: {
                                  __typename: "TaxedMoney",
                                  gross: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                  net: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                },
                              },
                              priceRangeUndiscounted: {
                                __typename: "TaxedMoneyRange",
                                start: {
                                  __typename: "TaxedMoney",
                                  gross: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                  net: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                },
                                stop: {

                                  __typename: "TaxedMoney",
                                  gross: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                  net: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

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
                                  url: "http://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                                },
                              ],
                              logo: null,
                              name: "Amazon",
                              openingHours: "09:00 AM",
                              rating: 4.5,
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
                              totalReviews: 15000,
                            },
                            thumbnail: {
                              __typename: "Image",
                              alt: "",
                              url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-255x255-70.jpeg",
                            },
                            thumbnail2x: {
                              __typename: "Image",
                              url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-510x510-70.jpeg",
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
                            // description: "",
                            // descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "ASOS DESIGN festival pork pie hat in beige straw with band", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                            id: "UHJvZHVjdDozMQ==",
                            images: [{
                              id: "",
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-1-beige.jpeg",
                            },
                            {
                              id: "",
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                            }, {
                              id: "",
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                            }],
                            name: "ASOS DESIGN festival pork pie hat in beige straw with band",
                            pricing: {
                              __typename: "ProductPricingInfo",
                              onSale: false,
                              priceRange: {

                                __typename: "TaxedMoneyRange",
                                start: {
                                  __typename: "TaxedMoney",
                                  gross: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                  net: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                },
                                stop: {
                                  __typename: "TaxedMoney",
                                  gross: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                  net: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                },
                              },
                              priceRangeUndiscounted: {
                                __typename: "TaxedMoneyRange",
                                start: {
                                  __typename: "TaxedMoney",
                                  gross: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                  net: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                },
                                stop: {

                                  __typename: "TaxedMoney",
                                  gross: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                  net: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

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
                                  url: "http://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                                },
                              ],
                              logo: null,
                              name: "Amazon",
                              openingHours: "09:00 AM",
                              rating: 4.5,
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
                              totalReviews: 15000,
                            },
                            thumbnail: {
                              __typename: "Image",
                              alt: "",
                              url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-255x255-70.jpeg",
                            },
                            thumbnail2x: {
                              __typename: "Image",
                              url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-510x510-70.jpeg",
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
                            // description: "",
                            // descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "ASOS DESIGN festival pork pie hat in beige straw with band", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                            id: "UHJvZHVjdDozMQ==",
                            images: [{
                              id: "",
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-1-beige.jpeg",
                            },
                            {
                              id: "",
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                            }, {
                              id: "",
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                            }],
                            name: "ASOS DESIGN festival pork pie hat in beige straw with band",
                            pricing: {
                              __typename: "ProductPricingInfo",
                              onSale: false,
                              priceRange: {

                                __typename: "TaxedMoneyRange",
                                start: {
                                  __typename: "TaxedMoney",
                                  gross: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                  net: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                },
                                stop: {
                                  __typename: "TaxedMoney",
                                  gross: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                  net: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                },
                              },
                              priceRangeUndiscounted: {
                                __typename: "TaxedMoneyRange",
                                start: {
                                  __typename: "TaxedMoney",
                                  gross: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                  net: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                },
                                stop: {

                                  __typename: "TaxedMoney",
                                  gross: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                  net: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

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
                                  url: "http://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                                },
                              ],
                              logo: null,
                              name: "Amazon",
                              openingHours: "09:00 AM",
                              rating: 4.5,
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
                              totalReviews: 15000,
                            },
                            thumbnail: {
                              __typename: "Image",
                              alt: "",
                              url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-255x255-70.jpeg",
                            },
                            thumbnail2x: {
                              __typename: "Image",
                              url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-510x510-70.jpeg",
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
                            // description: "",
                            // descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "ASOS DESIGN festival pork pie hat in beige straw with band", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                            id: "UHJvZHVjdDozMQ==",
                            images: [{
                              id: "",
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-1-beige.jpeg",
                            },
                            {
                              id: "",
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                            }, {
                              id: "",
                              url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                            }],
                            name: "ASOS DESIGN festival pork pie hat in beige straw with band",
                            pricing: {
                              __typename: "ProductPricingInfo",
                              onSale: false,
                              priceRange: {

                                __typename: "TaxedMoneyRange",
                                start: {
                                  __typename: "TaxedMoney",
                                  gross: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                  net: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                },
                                stop: {
                                  __typename: "TaxedMoney",
                                  gross: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                  net: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                },
                              },
                              priceRangeUndiscounted: {
                                __typename: "TaxedMoneyRange",
                                start: {
                                  __typename: "TaxedMoney",
                                  gross: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                  net: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                },
                                stop: {

                                  __typename: "TaxedMoney",
                                  gross: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

                                  },
                                  net: {
                                    __typename: "Money",
                                    amount: 8,
                                    currency: "USD",

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
                                  url: "http://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                                },
                              ],
                              logo: null,
                              name: "Amazon",
                              openingHours: "09:00 AM",
                              rating: 4.5,
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
                              totalReviews: 15000,
                            },
                            thumbnail: {
                              __typename: "Image",
                              alt: "",
                              url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-255x255-70.jpeg",
                            },
                            thumbnail2x: {
                              __typename: "Image",
                              url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-510x510-70.jpeg",
                            },
                          }} />
                          {/* <ProductListItem product={product} /> */}
                          {/* </Link> */}
                        </div>


                        {/* ))} */}
                      </Carousel>
                    </div>
                      : <div className="allResults">

                        <ProductTile product={{

                          __typename: "Product",
                          category: { id: "Q2F0ZWdvcnk6MTE=", name: "Summer Cloths", __typename: "Category" },
                          // description: "",
                          // descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "ASOS DESIGN festival pork pie hat in beige straw with band", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                          id: "UHJvZHVjdDozMQ==",
                          images: [{
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-1-beige.jpeg",
                          },
                          {
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                          }, {
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                          }],
                          name: "ASOS DESIGN festival pork pie hat in beige straw with band",
                          pricing: {
                            __typename: "ProductPricingInfo",
                            onSale: false,
                            priceRange: {

                              __typename: "TaxedMoneyRange",
                              start: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                              stop: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                            },
                            priceRangeUndiscounted: {
                              __typename: "TaxedMoneyRange",
                              start: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                              stop: {

                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

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
                                url: "http://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                              },
                            ],
                            logo: null,
                            name: "Amazon",
                            openingHours: "09:00 AM",
                            rating: 4.5,
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
                            totalReviews: 15000,
                          },
                          thumbnail: {
                            __typename: "Image",
                            alt: "",
                            url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-255x255-70.jpeg",
                          },
                          thumbnail2x: {
                            __typename: "Image",
                            url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-510x510-70.jpeg",
                          },
                        }} />

                        <ProductTile product={{

                          __typename: "Product",
                          category: { id: "Q2F0ZWdvcnk6MTE=", name: "Summer Cloths", __typename: "Category" },
                          // description: "",
                          // descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "ASOS DESIGN festival pork pie hat in beige straw with band", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                          id: "UHJvZHVjdDozMQ==",
                          images: [{
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-1-beige.jpeg",
                          },
                          {
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                          }, {
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                          }],
                          name: "ASOS DESIGN festival pork pie hat in beige straw with band",
                          pricing: {
                            __typename: "ProductPricingInfo",
                            onSale: false,
                            priceRange: {

                              __typename: "TaxedMoneyRange",
                              start: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                              stop: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                            },
                            priceRangeUndiscounted: {
                              __typename: "TaxedMoneyRange",
                              start: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                              stop: {

                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

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
                                url: "http://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                              },
                            ],
                            logo: null,
                            name: "Amazon",
                            openingHours: "09:00 AM",
                            rating: 4.5,
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
                            totalReviews: 15000,
                          },
                          thumbnail: {
                            __typename: "Image",
                            alt: "",
                            url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-255x255-70.jpeg",
                          },
                          thumbnail2x: {
                            __typename: "Image",
                            url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-510x510-70.jpeg",
                          },
                        }} />

                        <ProductTile product={{

                          __typename: "Product",
                          category: { id: "Q2F0ZWdvcnk6MTE=", name: "Summer Cloths", __typename: "Category" },
                          // description: "",
                          // descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "ASOS DESIGN festival pork pie hat in beige straw with band", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                          id: "UHJvZHVjdDozMQ==",
                          images: [{
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-1-beige.jpeg",
                          },
                          {
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                          }, {
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                          }],
                          name: "ASOS DESIGN festival pork pie hat in beige straw with band",
                          pricing: {
                            __typename: "ProductPricingInfo",
                            onSale: false,
                            priceRange: {

                              __typename: "TaxedMoneyRange",
                              start: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                              stop: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                            },
                            priceRangeUndiscounted: {
                              __typename: "TaxedMoneyRange",
                              start: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                              stop: {

                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

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
                                url: "http://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                              },
                            ],
                            logo: null,
                            name: "Amazon",
                            openingHours: "09:00 AM",
                            rating: 4.5,
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
                            totalReviews: 15000,
                          },
                          thumbnail: {
                            __typename: "Image",
                            alt: "",
                            url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-255x255-70.jpeg",
                          },
                          thumbnail2x: {
                            __typename: "Image",
                            url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-510x510-70.jpeg",
                          },
                        }} />

                        <ProductTile product={{

                          __typename: "Product",
                          category: { id: "Q2F0ZWdvcnk6MTE=", name: "Summer Cloths", __typename: "Category" },
                          // description: "",
                          // descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "ASOS DESIGN festival pork pie hat in beige straw with band", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                          id: "UHJvZHVjdDozMQ==",
                          images: [{
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-1-beige.jpeg",
                          },
                          {
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                          }, {
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                          }],
                          name: "ASOS DESIGN festival pork pie hat in beige straw with band",
                          pricing: {
                            __typename: "ProductPricingInfo",
                            onSale: false,
                            priceRange: {

                              __typename: "TaxedMoneyRange",
                              start: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                              stop: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                            },
                            priceRangeUndiscounted: {
                              __typename: "TaxedMoneyRange",
                              start: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                              stop: {

                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

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
                                url: "http://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                              },
                            ],
                            logo: null,
                            name: "Amazon",
                            openingHours: "09:00 AM",
                            rating: 4.5,
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
                            totalReviews: 15000,
                          },
                          thumbnail: {
                            __typename: "Image",
                            alt: "",
                            url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-255x255-70.jpeg",
                          },
                          thumbnail2x: {
                            __typename: "Image",
                            url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-510x510-70.jpeg",
                          },
                        }} />

                        <ProductTile product={{

                          __typename: "Product",
                          category: { id: "Q2F0ZWdvcnk6MTE=", name: "Summer Cloths", __typename: "Category" },
                          // description: "",
                          // descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "ASOS DESIGN festival pork pie hat in beige straw with band", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                          id: "UHJvZHVjdDozMQ==",
                          images: [{
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-1-beige.jpeg",
                          },
                          {
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                          }, {
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                          }],
                          name: "ASOS DESIGN festival pork pie hat in beige straw with band",
                          pricing: {
                            __typename: "ProductPricingInfo",
                            onSale: false,
                            priceRange: {

                              __typename: "TaxedMoneyRange",
                              start: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                              stop: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                            },
                            priceRangeUndiscounted: {
                              __typename: "TaxedMoneyRange",
                              start: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                              stop: {

                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

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
                                url: "http://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                              },
                            ],
                            logo: null,
                            name: "Amazon",
                            openingHours: "09:00 AM",
                            rating: 4.5,
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
                            totalReviews: 15000,
                          },
                          thumbnail: {
                            __typename: "Image",
                            alt: "",
                            url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-255x255-70.jpeg",
                          },
                          thumbnail2x: {
                            __typename: "Image",
                            url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-510x510-70.jpeg",
                          },
                        }} />

                        <ProductTile product={{

                          __typename: "Product",
                          category: { id: "Q2F0ZWdvcnk6MTE=", name: "Summer Cloths", __typename: "Category" },
                          // description: "",
                          // descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "ASOS DESIGN festival pork pie hat in beige straw with band", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                          id: "UHJvZHVjdDozMQ==",
                          images: [{
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-1-beige.jpeg",
                          },
                          {
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                          }, {
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                          }],
                          name: "ASOS DESIGN festival pork pie hat in beige straw with band",
                          pricing: {
                            __typename: "ProductPricingInfo",
                            onSale: false,
                            priceRange: {

                              __typename: "TaxedMoneyRange",
                              start: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                              stop: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                            },
                            priceRangeUndiscounted: {
                              __typename: "TaxedMoneyRange",
                              start: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                              stop: {

                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

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
                                url: "http://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                              },
                            ],
                            logo: null,
                            name: "Amazon",
                            openingHours: "09:00 AM",
                            rating: 4.5,
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
                            totalReviews: 15000,
                          },
                          thumbnail: {
                            __typename: "Image",
                            alt: "",
                            url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-255x255-70.jpeg",
                          },
                          thumbnail2x: {
                            __typename: "Image",
                            url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-510x510-70.jpeg",
                          },
                        }} />

                        <ProductTile product={{

                          __typename: "Product",
                          category: { id: "Q2F0ZWdvcnk6MTE=", name: "Summer Cloths", __typename: "Category" },
                          // description: "",
                          // descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "ASOS DESIGN festival pork pie hat in beige straw with band", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                          id: "UHJvZHVjdDozMQ==",
                          images: [{
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-1-beige.jpeg",
                          },
                          {
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                          }, {
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                          }],
                          name: "ASOS DESIGN festival pork pie hat in beige straw with band",
                          pricing: {
                            __typename: "ProductPricingInfo",
                            onSale: false,
                            priceRange: {

                              __typename: "TaxedMoneyRange",
                              start: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                              stop: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                            },
                            priceRangeUndiscounted: {
                              __typename: "TaxedMoneyRange",
                              start: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                              stop: {

                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

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
                                url: "http://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                              },
                            ],
                            logo: null,
                            name: "Amazon",
                            openingHours: "09:00 AM",
                            rating: 4.5,
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
                            totalReviews: 15000,
                          },
                          thumbnail: {
                            __typename: "Image",
                            alt: "",
                            url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-255x255-70.jpeg",
                          },
                          thumbnail2x: {
                            __typename: "Image",
                            url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-510x510-70.jpeg",
                          },
                        }} />

                        <ProductTile product={{

                          __typename: "Product",
                          category: { id: "Q2F0ZWdvcnk6MTE=", name: "Summer Cloths", __typename: "Category" },
                          // description: "",
                          // descriptionJson: '{"blocks": [{"key": "eud25", "data": {}, "text": "ASOS DESIGN festival pork pie hat in beige straw with band", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
                          id: "UHJvZHVjdDozMQ==",
                          images: [{
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-1-beige.jpeg",
                          },
                          {
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                          }, {
                            id: "",
                            url: "http://backend.sitarri.rnssol.com/media/products/7133996-2_RBEiIzF.jpeg",
                          }],
                          name: "ASOS DESIGN festival pork pie hat in beige straw with band",
                          pricing: {
                            __typename: "ProductPricingInfo",
                            onSale: false,
                            priceRange: {

                              __typename: "TaxedMoneyRange",
                              start: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                              stop: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                            },
                            priceRangeUndiscounted: {
                              __typename: "TaxedMoneyRange",
                              start: {
                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                              },
                              stop: {

                                __typename: "TaxedMoney",
                                gross: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

                                },
                                net: {
                                  __typename: "Money",
                                  amount: 8,
                                  currency: "USD",

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
                                url: "http://lh5.googleusercontent.com/p/AF1QipOubwoQei4d1cUQd8oWDUZOzoP0YszGv4tioXHZ=w515-k-no",
                              },
                            ],
                            logo: null,
                            name: "Amazon",
                            openingHours: "09:00 AM",
                            rating: 4.5,
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
                            totalReviews: 15000,
                          },
                          thumbnail: {
                            __typename: "Image",
                            alt: "",
                            url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-255x255-70.jpeg",
                          },
                          thumbnail2x: {
                            __typename: "Image",
                            url: "http://backend.sitarri.rnssol.com/media/__sized__/products/7133996-1-beige-thumbnail-510x510-70.jpeg",
                          },
                        }} />




                      </div>
                    }
                    {/* </Carousel> */}
                  </div>


                </div>
              </div>
            );
          } else {
            return null;
          }
        }}
      </TypedFeaturedProductsQuery>
      {
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
      }
    </>
  );
};

ProductsFeatured.defaultProps = {
  title: "Categories",
};

export default ProductsFeatured;
