import { ProductList_products_edges_node } from "@sdk/queries/gqlTypes/ProductList";

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export interface IProps {
  products: Array<PartialBy<ProductList_products_edges_node, "category">>;
  stores:Array<PartialBy<ProductList_products_edges_node, "category">>;
  canLoadMore?: boolean;
  redirectToProductPage?: any;
  redirectToShopPage?: any;
  showProductsResults?: boolean;
  showShopResults?: boolean;
  loading?: boolean;
  onLoadMore?: () => void;
  activeSortTypeBase?: any;
  onChange?: (value: {label: string, value: string}, type?: string) => void;
}
