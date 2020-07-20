import "./scss/index.scss";

import * as React from "react";
import { RouteComponentProps } from "react-router";

import { useCart } from "@sdk/react";
// MetaWrapper
import { NotFound, OfflinePlaceholder } from "../../components";
import NetworkStatus from "../../components/NetworkStatus";
import { getGraphqlIdFromDBId } from "../../core/utils";
// import { ProductDetails_product } from "./gqlTypes/ProductDetails";
import Page from "./Page";
import { TypedProductDetailsQuery } from "./queries";



const View: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { addItem, items } = useCart();


  return (
    <TypedProductDetailsQuery
      loaderFull
      variables={{
        id: getGraphqlIdFromDBId(match.params.id, "Product"),
      }}
    >
      {({ data, loading }) => {


        if (loading) {
          return <h3>loading....</h3>
        }

        return <NetworkStatus>
          {isOnline => {
            const { stores } = data;


            return (
              // <MetaWrapper meta={extractMeta(product)}>
              <Page product={stores} add={addItem} items={items} />
              // </MetaWrapper>
            );


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
