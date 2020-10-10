import "./scss/index.scss";

import * as React from "react";

// import { IFilterAttributes, IFilters } from "@types";
// import { DebounceChange, ProductsFeatured, TextField } from "../../components";

import { ProductListHeader } from "../../@next/components/molecules";
import { ProductList } from "../../@next/components/organisms";
// import { FilterSidebar } from "../../@next/components/organisms/FilterSidebar";

import { maybe } from "../../core/utils";

import { SearchProducts_products } from "./gqlTypes/SearchProducts";

import { BusinessesQuery } from "../../../src/@next/components/molecules/ProductListHeader/queries";
// interface SortItem {
//   label: string;
//   value?: string;
// }

// interface SortOptions extends Array<SortItem> { }

interface PageProps {
  activeSortBusinessType: any;
  activeSortTypeBase: any;
  activeSortedField: any;
  acitveSortDistanceBase: any;
  // activeFilters: number;
  // attributes: IFilterAttributes[];
  activeSortOption: any;
  displayLoader: boolean;
  showShopResults: boolean;
  redirectToShopPage: any;
  redirectToProductPage: any;
  showProductsResults: boolean;
  // filters: IFilters;
  // hasNextPage: boolean;
  search?: string;
  setSearch?: (
    newValue: string,
    updateType?: "replace" | "replaceIn" | "push" | "pushIn"
  ) => void;
  products: SearchProducts_products;
  stores: any;
  // sortOptions: SortOptions;
  // clearFilters: () => void;
  // onLoadMore: () => void;
  // onAttributeFiltersChange: (attributeSlug: string, value: string) => void;
  onOrder: any;
}

const Page: React.FC<PageProps> = ({
  activeSortOption,
  activeSortBusinessType,
  activeSortTypeBase,
  activeSortedField,
  acitveSortDistanceBase,
  displayLoader,
  redirectToShopPage,
  redirectToProductPage,
  showShopResults,
  showProductsResults,
  products,
  stores,
  onOrder,
}) => {
  const canDisplayProducts = maybe(
    () => !!products.edges && products.totalCount !== undefined
  );

  return (
    <div className="category">
      
        <div className="FilterHeader">
          <div className="container">
        <BusinessesQuery>
          {({ data }) =>
            <ProductListHeader
              activeSortOption={activeSortOption}
              activeSortBusinessType={activeSortBusinessType}
              activeSortTypeBase={activeSortTypeBase}
              acitveSortDistanceBase={acitveSortDistanceBase}
              activeSortedField={activeSortedField}
              categories={data && data.storesCategories}
              onChange={onOrder}
            />
          }
        </BusinessesQuery>
        </div>
        </div>
        <div className="container">
        {canDisplayProducts && (
          <ProductList
            activeSortTypeBase={activeSortTypeBase}
            showShopResults={showShopResults}
            redirectToShopPage={redirectToShopPage}
            redirectToProductPage={redirectToProductPage}
            showProductsResults={showProductsResults}
            products={products.edges.map(edge => edge.node)}
            stores={stores && stores.edges.map(edge => edge.node)}
            loading={displayLoader}
            onChange={onOrder}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
