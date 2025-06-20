// interface SortOptions {
//   value?: string;
//   label: string;
// }

// interface ActiveFiltersAttribute {
//   attributeSlug: string;
//   valueSlug: string;
//   valueName: string;
// }

export interface IProps {
  // activeSortOption?: string;
  // activeFilters: number;
  // activeFiltersAttributes: ActiveFiltersAttribute[];
  // numberOfProducts: number;
  // sortOptions: SortOptions[];
  onChange: (value: string, type?: string) => void;
  // onCloseFilterAttribute: (attributeSlug: string, valueSlug: string) => void;
  // openFiltersMenu: () => void;
  // clearFilters: () => void;
  activeSortOption?: any;
  categories?: any;
  activeSortBusinessType: any;
  activeSortTypeBase: any;
  activeSortedField: any;
  activeRatingFilter: any;
  acitveSortDistanceBase: any;
}
