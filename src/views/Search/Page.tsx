import "./scss/index.scss";

import * as React from "react";

// import { IFilterAttributes, IFilters } from "@types";
// import { DebounceChange, ProductsFeatured, TextField } from "../../components";

import { ProductListHeader } from "../../@next/components/molecules";
import { ProductList } from "../../@next/components/organisms";
// import { FilterSidebar } from "../../@next/components/organisms/FilterSidebar";

import { maybe } from "../../core/utils";

import { SearchProducts_products } from "./gqlTypes/SearchProducts";

// interface SortItem {
//   label: string;
//   value?: string;
// }

// interface SortOptions extends Array<SortItem> { }

interface PageProps {
  activeSortBusinessType: any;
  activeSortTypeBase: any;
  acitveSortDistanceBase: any;
  // activeFilters: number;
  // attributes: IFilterAttributes[];
  activeSortOption: any;
  displayLoader: boolean;
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
  acitveSortDistanceBase,
  displayLoader,
  products,
  stores,
  onOrder,
  
  
}) => {
  const canDisplayProducts = maybe(
    () => !!products.edges && products.totalCount !== undefined
  );
 
  return (
    <div className="category">

      <div className="container">

        <ProductListHeader
          activeSortOption={activeSortOption}
          activeSortBusinessType={activeSortBusinessType}
          activeSortTypeBase={activeSortTypeBase}
          acitveSortDistanceBase={acitveSortDistanceBase}
        
          onChange={onOrder}
         
        />
        {canDisplayProducts && (
          <ProductList
            activeSortTypeBase={activeSortTypeBase}
            products={products.edges.map(edge => edge.node)}
            stores={stores.edges.map(edge => edge.node)}
            loading={displayLoader}
          />
        )}
      </div>
    </div>
  );
};

export default Page;
