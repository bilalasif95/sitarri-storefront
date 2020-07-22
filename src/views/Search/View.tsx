import * as React from "react";
import { RouteComponentProps } from "react-router";
import { StringParam, useQueryParam } from "use-query-params";
import { NotFound, OfflinePlaceholder } from "../../components";
import NetworkStatus from "../../components/NetworkStatus";
import { PRODUCTS_PER_PAGE } from "../../core/config";
import {
  convertSortByFromString,
  getGraphqlIdFromDBId,
} from "../../core/utils";
import Page from "./Page";
import { TypedSearchProductsQuery } from "./queries";

type ViewProps = RouteComponentProps<{
  id: string;
}>;

export const View: React.FC<ViewProps> = ({ match }) => {
  const [sortPriceBase, setSortPriceBase] = React.useState({ label: "", value: { gte: 0, lte: 10 } });
  const [sortBusinessBase, setSortBusinessBase] = React.useState({ label: "hardware", value: "hardware" });
  const [sortTypeBase, setSortTypeBase] = React.useState({ label: "only stores", value: "stores" });
  const [sortDistanceBase, setSortDistanceBase] = React.useState({
    label: "0-100",
    value: { value: 100, symbol: "M" },
  });

  const [sort] = useQueryParam("sortBy", StringParam);
  const [search, setSearch] = useQueryParam("q", StringParam);

  const variables = {

    businessCategory: sortBusinessBase.value,
    id: getGraphqlIdFromDBId(match.params.id, "Category"),
    location: {
      distance: sortDistanceBase.value,
      latitude: 20.3,
      longitude: 30.4,

    },

    Price: sortPriceBase.value,

    pageSize: PRODUCTS_PER_PAGE,

    query: search || null,
    sortBy: convertSortByFromString(sort),

  };


  return (
    <NetworkStatus>
      {isOnline => (
        <TypedSearchProductsQuery
          variables={variables}
          errorPolicy="all"
          loaderFull
        >
          {({ loading, data, loadMore, refetch }) => {

            const CallApi = () => {
              refetch()
            }

            return (
              <Page
                displayLoader={loading}
                setSearch={setSearch}
                search={search}
                activeSortOption={sortPriceBase.label}
                activeSortBusinessType={sortBusinessBase}
                activeSortTypeBase={sortTypeBase}
                acitveSortDistanceBase={sortDistanceBase.label}
                products={data.search.products}
                stores={data.search.stores}
                onOrder={(value,type) => {

                  if (type === "PriceBase") {
                    setSortPriceBase(value)
                    CallApi()
                  }
                  else if (type === "BusinessBase") {
                    setSortBusinessBase(value)
                    CallApi()

                  }
                  else if (type === "showType") {
                    setSortTypeBase(value)
                  }
                  else if (type === "DistanceBase") {

                    setSortDistanceBase(value)
                    CallApi()
                  }
                }}
              />
            );


            if (data && data.products === null) {
              return <NotFound />;
            }

            if (!isOnline) {
              return <OfflinePlaceholder />;
            }
          }}
        </TypedSearchProductsQuery>
      )}
    </NetworkStatus>
  );
};

export default View;
