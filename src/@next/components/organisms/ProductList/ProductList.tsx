import React from "react";
// import { Link } from "react-router-dom";

import { Button, Loader } from "@components/atoms";
import { BusinessTile, ProductTile } from "@components/molecules";
import Carousel from "../../../../../src/components/Carousel";

// import { generateProductUrl } from "../../../../core/utils";


import * as S from "./styles";
import { IProps } from "./types";

import { AllProducts } from "../../molecules/AllProducts";

export const ProductList: React.FC<IProps> = ({
  products,
  canLoadMore = false,
  loading = false,
  onLoadMore = () => null,
}: IProps) => {
  return (
    <>
      <h4>Products</h4>
      <Carousel>
        {products.map(product => (
          <ProductTile product={product} />
        ))}
      </Carousel>

      {/* <S.List>
        {products.map(product => (
          <Link
            to={generateProductUrl(product.id, product.name)}
            key={product.id}
          >
          <ProductTile product={product} />
        </Link>
        ))}
      </S.List> */}

      <h4>Business</h4>
      {/* <S.List> */}
      <Carousel>
        {products.map(product => (

          <BusinessTile product={product} />
        ))}
      </Carousel>
      {/* </S.List> */}
      <h4>All Results</h4>
      <S.List>
        {products.map(product => (
          // <Link
          //   to={generateProductUrl(product.id, product.name)}
          //   key={product.id}
          // >
          <AllProducts product={product} />
          // </Link>
        ))}
      </S.List>
      <S.Loader>
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
      </S.Loader>
    </>
  );
};
