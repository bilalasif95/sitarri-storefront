import React from "react";
// import { Link } from "react-router-dom";

// import { Loader } from "@components/atoms";
import { BusinessTile, ProductTile } from "@components/molecules";
import Carousel from "../../../../../src/components/Carousel";

// import { generateProductUrl } from "../../../../core/utils";


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

  return (
    <>
      {!loading ?
        <>
          {(products.length > 0 || stores && stores.length > 0) ?
            <S.ProductList>
              {/* first condition for filter */}
              {activeSortTypeBase === "Shops" || activeSortTypeBase === "" || activeSortTypeBase === "All" ? stores.length > 0 ?
                <div>
                  <S.Shops>
                  <h3>Shops</h3>
                  <S.Slider>
                  <Carousel productDetails={"productList"}>
                    
                    {stores && stores.map(product => (
                      <BusinessTile product={product} />
                    ))}
                    
                  </Carousel>
                  </S.Slider>
                  </S.Shops>
                </div> : "" : ""}

              {activeSortTypeBase === "Products" || activeSortTypeBase === "" || activeSortTypeBase === "All" ? products.length > 0 ?
                <div>
                  <S.Shops>
                  <h3>Products</h3>
                  <S.Slider>
                  <Carousel productDetails={"productList"}>
                    {products.map(product => (
                      <ProductTile product={product} />
                    ))}
                  </Carousel>
                  </S.Slider>
                  </S.Shops>
                  </div> : <div></div> : <div></div>}
              
              {(activeSortTypeBase === "" || activeSortTypeBase === "Clear...") &&
              <S.Shops>
                <>
                
                  < h3 > {stores && stores.length > 0 ? "All Results" : ""}</h3>
                  <S.List>
                    {stores && stores.map(product => (
                      <AllProducts product={product} />
                    ))}
                  </S.List>
                </>
                </S.Shops>
              }
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
