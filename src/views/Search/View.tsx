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
  const [sortPriceBase, setSortPriceBase] = React.useState({ label: "", value: { gte: 0, lte: 0 } });
  const [sortBusinessBase, setSortBusinessBase] = React.useState({ label: "", value: "" });
  const [sortTypeBase, setSortTypeBase] = React.useState({ label: "", value: "" });
  const [sortDistanceBase, setSortDistanceBase] = React.useState({
    label: "",
    value: { value: -1, symbol: "KILOMETER" },
  });

  const [sort] = useQueryParam("sortBy", StringParam);
  const [lat] = useQueryParam("lat", StringParam);
  const [long] = useQueryParam("long", StringParam);
  // const [location, setLocation] = React.useState({ latitude: 0, longitude: 0 })
  const [search, setSearch] = useQueryParam("q", StringParam);

  // const getCurrentLocation = () => {
  //   navigator.geolocation.watchPosition(
  //     (position) => {
  //       setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude })
  //     },
  //     (error) => {
  //       setLocation({ latitude: 0, longitude: 0 })
  //     },
  //     {

  //       enableHighAccuracy: true,
  //       maximumAge: 250,
  //     }
  //   );
  // }

  const variables = {
    businessCategory: sortBusinessBase.value,
    id: getGraphqlIdFromDBId(match.params.id, "Category"),
    latitude: lat,
    location: {
      distance: sortDistanceBase.value ? sortDistanceBase.value : { value: -1, symbol: "KILOMETER" },
      latitude: lat,
      longitude: long,
    },
    longitude: long,
    pageSize: PRODUCTS_PER_PAGE,

    Price: sortPriceBase.value,
    
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
                activeSortBusinessType={sortBusinessBase.label}
                activeSortTypeBase={sortTypeBase.label}
                acitveSortDistanceBase={sortDistanceBase.label}
                products={data.search && data.search.products}
                stores={data.search && data.search.stores}
                onOrder={(value, type) => {

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
                    // getCurrentLocation()
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
