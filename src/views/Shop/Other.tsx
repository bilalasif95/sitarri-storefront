import * as React from "react";
import ReactSVG from "react-svg";
import webShare, { WebShareInterface } from 'react-web-share-api';
// import { ProductList } from "@components/organisms";
import Share from "../../images/share.svg";
// import { ProductDetails_product_category_products_edges } from "./gqlTypes/ProductDetails";
export interface OwnProps {
  style: object;
}

const OtherProducts: React.StatelessComponent<WebShareInterface & OwnProps> = ({ share, isSupported, style }) => isSupported
  ? <div className="icon ShareIcon">
    <ReactSVG onClick={share} path={Share} />
  </div>
  : <div></div>;
//   <div className="product-page__other-products">
//     <div className="container">
//       <h4 className="product-page__other-products__title">
//         Other products in this category
//       </h4>
//       <ProductList products={products.map(({ node }) => node)}  stores={[]}/>
//     </div>
//   </div>
// );

export default webShare<OwnProps>()(OtherProducts);
