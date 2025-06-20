import * as React from "react";
import { RouteComponentProps } from "react-router";
import { withRouter } from "react-router-dom";
import { StringParam, useQueryParam } from "use-query-params";
// import { NotFound, OfflinePlaceholder } from "../../components";
// import NetworkStatus from "../../components/NetworkStatus";
import { TypedFeaturedProductsQuery } from "../../components/ProductsFeatured/queries";
import { PRODUCTS_PER_PAGE } from "../../core/config";
import {
  convertSortByFromString,
  convertSortByFromStringForRating,
  generateProductUrl,
  generateShopUrl,
  getGraphqlIdFromDBId,
} from "../../core/utils";
import Page from "./Page";
import { TypedSearchProductsQuery } from "./queries";

type ViewProps = RouteComponentProps<{
  id: string;
}>;

export const View: React.FC<ViewProps> = ({ match, history }) => {
  const [sortPriceBase, setSortPriceBase] = React.useState({ label: "", value: { gte: 0, lte: 0 } });
  const [sortBusinessBase, setSortBusinessBase] = React.useState({ label: "", value: "" });
  const [sortTypeBase, setSortTypeBase] = React.useState({ label: "All", value: null });
  const [sorting, setSorting] = React.useState({ label: "", value: "" });
  const [ratingFilter, setRatingFilter] = React.useState({ label: "", value: "0" });
  const [sortDistanceBase, setSortDistanceBase] = React.useState({
    label: "",
    value: { value: -1, symbol: "KILOMETER" },
  });

  const redirectToShopPage = (id, name) => {
    history.push(generateShopUrl(id, name))
  }

  const redirectToProductPage = (id, name) => {
    history.push(generateProductUrl(id, name))
  }

  const [sort, setSort] = useQueryParam("sortBy", StringParam);
  const [lat] = useQueryParam("lat", StringParam);
  const [long] = useQueryParam("long", StringParam);
  // const [location, setLocation] = React.useState({ latitude: 0, longitude: 0 })
  const [search, setSearch] = useQueryParam("q", StringParam);
  const [popularShopss] = useQueryParam("popular", StringParam);

  const [showShopResults, setShowShopResults] = React.useState(false);
  const [showProductsResults, setShowProductsResults] = React.useState(false);
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

    query: search || "",
    rating: ratingFilter.value,
    sortBy: convertSortByFromString(sort),
    sortByRating: convertSortByFromStringForRating(sort),
  };
  const popularVariables = {
    latitude: lat,
    location: {
      distance: { value: -1, symbol: "KILOMETER" },
      latitude: lat,
      longitude: long,
    },
    longitude: long,
    rating: "4.5",
  }

  return (
    <>
      {/* <NetworkStatus>
    {isOnline => ( */}
      {popularShopss === "shops" ?
        <TypedFeaturedProductsQuery variables={popularVariables} displayError={false}>
          {({ data, loading, refetch }) => {
            const popularShops = data && data.stores;
            // const popularProducts = data && data.products;
            const CallApi = () => {
              refetch()
            }
            return (
              <Page
                displayLoader={loading}
                setSearch={setSearch}
                search={search}
                redirectToShopPage={redirectToShopPage}
                redirectToProductPage={redirectToProductPage}
                activeSortOption={sortPriceBase.label}
                activeSortBusinessType={sortBusinessBase.label}
                activeSortedField={sorting.label}
                showShopResults={showShopResults}
                showProductsResults={showProductsResults}
                activeSortTypeBase={sortTypeBase.label}
                acitveSortDistanceBase={sortDistanceBase.label}
                activeRatingFilter={ratingFilter.label}
                products={{
                  __typename: "ProductCountableConnection",
                  edges: [],
                  pageInfo: {
                    __typename: "PageInfo",
                    endCursor: "",
                    hasNextPage: false,
                  },
                  totalCount: 0,
                }}
                stores={popularShops}
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
                    if (value.value === "products") {
                      setSortTypeBase(value)
                      setShowProductsResults(true)
                      setShowShopResults(false)
                    }
                    else if (value.value === "stores") {
                      setSortTypeBase(value)
                      setShowShopResults(true)
                      setShowProductsResults(false)
                    }
                    else {
                      setSortTypeBase(value)
                      setShowShopResults(false)
                      setShowProductsResults(false)
                    }
                  }
                  else if (type === "sorting") {
                    setSorting(value)
                    setSort(value.value)
                  }
                  else if (type === "DistanceBase") {
                    // getCurrentLocation()
                    setSortDistanceBase(value)
                    CallApi()
                  }
                  else if (type === "RatingBase") {
                    // getCurrentLocation()
                    setRatingFilter(value)
                    CallApi()
                  }
                  else if (type === "none") {
                    setSortBusinessBase({
                      label: "", value: "",
                    })
                    setSortDistanceBase({
                      label: "",
                      value: { value: -1, symbol: "KILOMETER" },
                    })
                    setSortPriceBase({
                      label: "", value: { gte: 0, lte: 0 },
                    })
                    setRatingFilter({
                      label: "",
                      value: "0",
                    })
                  }
                }}
              />
            )
          }}
        </TypedFeaturedProductsQuery>
        : popularShopss === "products" ?
          <TypedFeaturedProductsQuery variables={popularVariables} displayError={false}>
            {({ data, loading, refetch }) => {
              // const popularShops = data && data.stores;
              const popularProducts = data && data.products;
              const CallApi = () => {
                refetch()
              }
              return (
                <Page
                  displayLoader={loading}
                  setSearch={setSearch}
                  search={search}
                  redirectToShopPage={redirectToShopPage}
                  redirectToProductPage={redirectToProductPage}
                  activeSortOption={sortPriceBase.label}
                  activeSortBusinessType={sortBusinessBase.label}
                  activeSortedField={sorting.label}
                  showShopResults={showShopResults}
                  showProductsResults={showProductsResults}
                  activeSortTypeBase={sortTypeBase.label}
                  acitveSortDistanceBase={sortDistanceBase.label}
                  activeRatingFilter={ratingFilter.label}
                  products={popularProducts}
                  stores={{
                    __typename: "ProductCountableConnection",
                    edges: [],
                    pageInfo: {
                      __typename: "PageInfo",
                      endCursor: "",
                      hasNextPage: false,
                    },
                    totalCount: 0,
                  }}
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
                      if (value.value === "products") {
                        setSortTypeBase(value)
                        setShowProductsResults(true)
                        setShowShopResults(false)
                      }
                      else if (value.value === "stores") {
                        setSortTypeBase(value)
                        setShowShopResults(true)
                        setShowProductsResults(false)
                      }
                      else {
                        setSortTypeBase(value)
                        setShowShopResults(false)
                        setShowProductsResults(false)
                      }
                    }
                    else if (type === "sorting") {
                      setSorting(value)
                      setSort(value.value)
                    }
                    else if (type === "DistanceBase") {
                      // getCurrentLocation()
                      setSortDistanceBase(value)
                      CallApi()
                    }
                    else if (type === "RatingBase") {
                      // getCurrentLocation()
                      setRatingFilter(value)
                      CallApi()
                    }
                    else if (type === "none") {
                      setSortBusinessBase({
                        label: "", value: "",
                      })
                      setSortDistanceBase({
                        label: "",
                        value: { value: -1, symbol: "KILOMETER" },
                      })
                      setSortPriceBase({
                        label: "", value: { gte: 0, lte: 0 },
                      })
                      setRatingFilter({
                        label: "",
                        value: "0",
                      })
                    }
                  }}
                />
              )
            }}
          </TypedFeaturedProductsQuery>
          :
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
                  redirectToShopPage={redirectToShopPage}
                  redirectToProductPage={redirectToProductPage}
                  activeSortOption={sortPriceBase.label}
                  activeSortBusinessType={sortBusinessBase.label}
                  activeSortedField={sorting.label}
                  showShopResults={showShopResults}
                  showProductsResults={showProductsResults}
                  activeSortTypeBase={sortTypeBase.label}
                  acitveSortDistanceBase={sortDistanceBase.label}
                  activeRatingFilter={ratingFilter.label}
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
                      if (value.value === "products") {
                        setSortTypeBase(value)
                        setShowProductsResults(true)
                        setShowShopResults(false)
                      }
                      else if (value.value === "stores") {
                        setSortTypeBase(value)
                        setShowShopResults(true)
                        setShowProductsResults(false)
                      }
                      else {
                        setSortTypeBase(value)
                        setShowShopResults(false)
                        setShowProductsResults(false)
                      }
                    }
                    else if (type === "sorting") {
                      setSorting(value)
                      setSort(value.value)
                    }
                    else if (type === "DistanceBase") {
                      // getCurrentLocation()
                      setSortDistanceBase(value)
                      CallApi()
                    }
                    else if (type === "RatingBase") {
                      // getCurrentLocation()
                      setRatingFilter(value)
                      CallApi()
                    }
                    else if (type === "none") {
                      setSortBusinessBase({
                        label: "", value: "",
                      })
                      setSortDistanceBase({
                        label: "",
                        value: { value: -1, symbol: "KILOMETER" },
                      })
                      setSortPriceBase({
                        label: "", value: { gte: 0, lte: 0 },
                      })
                      setRatingFilter({
                        label: "",
                        value: "0",
                      })
                    }
                  }}
                />
              );
              // if (data && data.products === null) {
              //   return <NotFound />;
              // }
              // if (!isOnline) {
              //   return <OfflinePlaceholder />;
              // }
            }}
          </TypedSearchProductsQuery>
      }
      {/* )}
     </NetworkStatus> */}
    </>
  );
};

export default withRouter(View);
