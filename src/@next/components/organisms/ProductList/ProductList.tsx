import React from "react";
// import { Link } from "react-router-dom";

// import { Loader } from "@components/atoms";
import { BusinessTile, ProductTile } from "@components/molecules";
import Carousel from "../../../../../src/components/Carousel";

// import { generateProductUrl } from "../../../../core/utils";

import Next from "../../../../images/next.svg";

import * as S from "./styles";
import { IProps } from "./types";

import { AllProducts } from "../../molecules/AllProducts";

export const ProductList: React.FC<IProps> = ({
  activeSortTypeBase,
  products,
  stores,
  canLoadMore = false,
  loading,
  onLoadMore = () => null,
}: IProps) => {
  const [showShopResults, setShowShopResults] = React.useState(false);
  const [showProductsResults, setShowProductsResults] = React.useState(false);
  const onShowShopsResultsClick = () => {
    if (showShopResults) {
      return setShowShopResults(false)
    }
    setShowShopResults(true)
  }
  const onShowProductsResultsClick = () => {
    if (showProductsResults) {
      return setShowProductsResults(false)
    }
    setShowProductsResults(true)
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
                      {window.innerWidth >= 540 ? stores.length > 3 && <p><span onClick={onShowShopsResultsClick}>{showShopResults ? "Hide" : "Show"} {stores.length} results </span><img src={Next} alt="next" /></p>
                        : stores.length > 2 && <p><span onClick={onShowShopsResultsClick}>{showShopResults ? "Hide" : "Show"} {stores.length} results </span><img src={Next} alt="next" /></p>
                      }
                    </S.Carouseltitle>
                    <S.Slider>
                      {!showShopResults ?
                        <S.OnlyCarousel>
                          <Carousel productDetails={"productList"}>

                            {stores && stores.map(product => (
                              <BusinessTile product={product} />
                            ))}

                          </Carousel>
                        </S.OnlyCarousel>
                        : <S.AllShops>
                          {stores && stores.map(product => (
                            <BusinessTile product={product} />
                          ))}
                        </S.AllShops>}
                    </S.Slider>
                  </S.Shops>
                </div> : "" : ""}

              {(activeSortTypeBase === "Products" || activeSortTypeBase === "" || activeSortTypeBase === "All") && !showShopResults ? products.length > 0 ?
                <div>
                  <S.Shops>
                    <S.Carouseltitle>
                      <h3>Products</h3>
                      {window.innerWidth >= 540 ? products.length > 3 && <p><span onClick={onShowProductsResultsClick}>{showProductsResults ? "Hide" : "Show"} {products.length} results </span><img src={Next} alt="next" /></p>
                        : products.length > 2 && <p><span onClick={onShowProductsResultsClick}>{showProductsResults ? "Hide" : "Show"} {products.length} results </span><img src={Next} alt="next" /></p>
                      }
                    </S.Carouseltitle>
                    <S.Slider>
                      {!showProductsResults ?
                        <S.OnlyCarousel>
                          <Carousel productDetails={"productList"}>
                            {products.map(product => (
                              <ProductTile product={product} />
                            ))}
                          </Carousel>
                        </S.OnlyCarousel>
                        : <S.AllShops>
                          {products.map(product => (
                            <ProductTile product={product} />
                          ))}
                        </S.AllShops>}
                    </S.Slider>
                  </S.Shops>
                </div> : <div></div> : <div></div>}

              {(activeSortTypeBase === "" || activeSortTypeBase === "Clear..." || activeSortTypeBase === "All") && (!showShopResults && !showProductsResults) ? stores.length > 0 ?
                <S.Shops>
                  <>
                    <S.Carouseltitle>
                      <h3>{stores && stores.length > 0 ? "All Results" : ""}</h3>
                      {window.innerWidth >= 540 ? stores.length > 3 && <p>{stores.length} results </p>
                        : stores.length > 2 && <p>{stores.length} results </p>
                      }
                    </S.Carouseltitle>
                    <S.List>
                      {stores && stores.map(product => (
                        <AllProducts product={product} />
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
