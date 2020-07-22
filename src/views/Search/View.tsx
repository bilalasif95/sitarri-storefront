import * as React from "react";
import { RouteComponentProps } from "react-router";

import { IFilters } from "@types";
import { StringParam, useQueryParam } from "use-query-params";
import { NotFound, OfflinePlaceholder } from "../../components";
import NetworkStatus from "../../components/NetworkStatus";
import { PRODUCTS_PER_PAGE } from "../../core/config";
import {
  convertSortByFromString,
  convertToAttributeScalar,
  getGraphqlIdFromDBId,
  maybe,
} from "../../core/utils";
import Page from "./Page";
import { TypedSearchProductsQuery } from "./queries";

type ViewProps = RouteComponentProps<{
  id: string;
}>;

export const FilterQuerySet = {
  encode(valueObj) {
    const str = [];
    Object.keys(valueObj).forEach(value => {
      str.push(value + "_" + valueObj[value].join("_"));
    });
    return str.join(".");
  },

  decode(strValue) {
    const obj = {};
    const propsWithValues = strValue.split(".").filter(n => n);
    propsWithValues.map(value => {
      const propWithValues = value.split("_").filter(n => n);
      obj[propWithValues[0]] = propWithValues.slice(1);
    });
    return obj;
  },
};

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
  const [attributeFilters, setAttributeFilters] = useQueryParam(
    "filters",
    FilterQuerySet
  );

  const clearFilters = () => {
    setAttributeFilters({});
  };

  const onFiltersChange = (name, value) => {
    if (attributeFilters && attributeFilters.hasOwnProperty(name)) {
      if (attributeFilters[name].includes(value)) {
        if (filters.attributes[`${name}`].length === 1) {
          const att = { ...attributeFilters };
          delete att[`${name}`];
          setAttributeFilters({
            ...att,
          });
        } else {
          setAttributeFilters({
            ...attributeFilters,
            [`${name}`]: attributeFilters[`${name}`].filter(
              item => item !== value
            ),
          });
        }
      } else {
        setAttributeFilters({
          ...attributeFilters,
          [`${name}`]: [...attributeFilters[`${name}`], value],
        });
      }
    } else {
      setAttributeFilters({ ...attributeFilters, [`${name}`]: [value] });
    }
  };

  const filters: IFilters = {
    attributes: attributeFilters,
    pageSize: PRODUCTS_PER_PAGE,
    priceGte: null,
    priceLte: null,
    sortBy: sort || null,
  };
  const variables = {
    ...filters,
    attributes: filters.attributes
      ? convertToAttributeScalar(filters.attributes)
      : {},
    businessCategory: sortBusinessBase.value,
    id: getGraphqlIdFromDBId(match.params.id, "Category"),
    location: {
      distance: sortDistanceBase.value,
      latitude: 20.3,
      longitude: 30.4,

    },

    Price: sortPriceBase.value,

    query: search || null,
    sortBy: convertSortByFromString(filters.sortBy),



  };

  const sortOptions = [
    {
      label: "Clear...",
      value: null,
    },
    {
      label: "Price Low-High",
      value: "price",
    },
    {
      label: "Price High-Low",
      value: "-price",
    },
    {
      label: "Name Increasing",
      value: "name",
    },
    {
      label: "Name Decreasing",
      value: "-name",
    },
    {
      label: "Last updated Ascending",
      value: "updated_at",
    },
    {
      label: "Last updated Descending",
      value: "-updated_at",
    },
  ];

  return (
    <NetworkStatus>
      {isOnline => (
        <TypedSearchProductsQuery
          variables={variables}
          errorPolicy="all"
          loaderFull
        >
          {({ loading, data, loadMore, refetch }) => {


            const canDisplayFilters = maybe(
              () => !!data.attributes.edges && !!data.products.edges,
              true
            );

            if (canDisplayFilters) {

              const CallApi = () => {
                refetch()
              }

              return (
                <Page
                  clearFilters={clearFilters}
                  attributes={data.attributes.edges.map(edge => edge.node)}
                  displayLoader={loading}
                  hasNextPage={maybe(
                    () => data.products.pageInfo.hasNextPage,
                    false
                  )}
                  sortOptions={sortOptions}
                  setSearch={setSearch}
                  search={search}
                  activeSortOption={sortPriceBase.label}
                  activeSortBusinessType={sortBusinessBase}
                  activeSortTypeBase={sortTypeBase}
                  acitveSortDistanceBase={sortDistanceBase.label}
                  filters={filters}
                  products={data.search.products}
                  stores={data.search.stores}
                  onAttributeFiltersChange={onFiltersChange}

                  activeFilters={
                    filters!.attributes
                      ? Object.keys(filters!.attributes).length
                      : 0
                  }
                  onOrder={(value, type) => {

                    if (type === "PriceBase") {
                      setSortPriceBase(value)
                      CallApi()
                    }
                    else if (type === "BusinessBase") {
                      CallApi()
                      setSortBusinessBase(value)
                    }
                    else if (type === "showType") {
                      setSortTypeBase(value)
                    }
                    else if (type === "DistanceBase") {
                      CallApi()
                      setSortDistanceBase(value)
                    }
                  }}
                />
              );
            }

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
