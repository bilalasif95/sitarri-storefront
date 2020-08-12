import React from "react";
// import { Link } from "react-router-dom";

// import { Button, Loader } from "@components/atoms";
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
  loading = false,
  onLoadMore = () => null,
}: IProps) => {

  return (
    <>
      {(products.length > 0 || stores.length > 0) ?
        <S.ProductList>
          {/* first condation for filter */}
          {activeSortTypeBase === "Only Products" || activeSortTypeBase === "" || activeSortTypeBase === "Clear..." ? products.length > 0 ?
            <div>
              <h3>Products</h3>
              <Carousel productDetails={"productList"}>
                {products.map(product => (
                  <ProductTile product={product} />
                ))}
              </Carousel></div> : <div></div> : <div></div>}
          {activeSortTypeBase === "Only Stores" || activeSortTypeBase === "" || activeSortTypeBase === "Clear..." ? stores.length > 0 ?
            <div>
              <h3>Business</h3>
              <Carousel productDetails={"productList"}>
                {stores.map(product => (
                  <BusinessTile product={product} />
                ))}
              </Carousel>
            </div> : "" : ""}
          {(activeSortTypeBase === "" || activeSortTypeBase === "Clear...") &&
            <>
              < h3 > {stores.length > 0 ? "All Results" : ""}</h3>
              <S.List>
                {stores.map(product => (
                  <AllProducts product={product} />
                ))}
              </S.List>
            </>
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
  );
};
