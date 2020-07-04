import "./scss/index.scss";

import * as React from "react";
import { RouteComponentProps } from "react-router";

import { CountryCode } from "@sdk/gqlTypes/globalTypes";
import { useCart, useUserDetails } from "@sdk/react";

import { MetaWrapper, NotFound, OfflinePlaceholder } from "../../components";
import NetworkStatus from "../../components/NetworkStatus";
import { getGraphqlIdFromDBId, maybe } from "../../core/utils";
import { ProductDetails_product } from "./gqlTypes/ProductDetails";
import Page from "./Page";
import { TypedProductDetailsQuery } from "./queries";

const canDisplay = (product: ProductDetails_product) =>
  maybe(
    () =>
      !!product.descriptionJson &&
      !!product.name &&
      !!product.pricing &&
      !!product.variants
  );
const extractMeta = (product: ProductDetails_product) => ({
  custom: [
    {
      content: product.pricing.priceRange.start.gross.amount.toString(),
      property: "product:price:amount",
    },
    {
      content: product.pricing.priceRange.start.gross.currency,
      property: "product:price:currency",
    },
    {
      content: product.isAvailable ? "in stock" : "out off stock",
      property: "product:isAvailable",
    },
    {
      content: product.category.name,
      property: "product:category",
    },
  ],
  description: product.seoDescription || product.descriptionJson,
  image: maybe(() => product.thumbnail.url, null),
  title: product.seoTitle || product.name,
  type: "product.item",
  url: window.location.href,
});

const View: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { addItem, items } = useCart();
  const { data: user } = useUserDetails();

  return (
    <TypedProductDetailsQuery
      loaderFull
      variables={{
        id: "1223",
      }}
    >
      {({ data, loading, error }) => {

        console.log("dataaaaaaa", data)
        if (loading) {
          return <h3>loading....</h3>
        }

        return <NetworkStatus>
          {isOnline => {
            const { stores } = data;

            // if (canDisplay(product)) {
              return (
                // <MetaWrapper meta={extractMeta(product)}>
                <Page product={stores} add={addItem} items={items} />
                // </MetaWrapper>
              );
            // }

            if (stores === null) {
              return <NotFound />;
            }

            if (!isOnline) {
              return <OfflinePlaceholder />;
            }
          }}
        </NetworkStatus>
      }}
    </TypedProductDetailsQuery>
  );
};

export default View;
