import "./scss/index.scss";

import isEqual from "lodash/isEqual";
import * as React from "react";

// import { ProductVariantPicker } from "@components/organisms";
import {
  ProductDetails_product_pricing,
  ProductDetails_product_variants,
  ProductDetails_product_variants_pricing,
} from "@sdk/queries/gqlTypes/ProductDetails";
import { IProductVariantsAttributesSelectedValues, ITaxedMoney } from "@types";

import { ICheckoutModelLine } from "@sdk/repository";
import { TaxedMoney } from "../../@next/components/containers";
// import AddToCart from "./AddToCart";
// import { QuantityTextField } from "./QuantityTextField";


// import ReactSVG from "react-svg";
// import star from "../../images/iconmonstr-star-1.svg";

const LOW_STOCK_QUANTITY = 5;
interface ProductDescriptionProps {
  items: any
}

interface ProductDescriptionState {
  quantity: number;
  variant: string;
  variantStock: number;
  variantPricing: ProductDetails_product_variants_pricing;
  variantPricingRange: {
    min: ITaxedMoney;
    max: ITaxedMoney;
  };
}

class ProductDescription extends React.Component<
  ProductDescriptionProps,

  > {
  constructor(props: ProductDescriptionProps) {
    super(props);

    this.state = {

    }
  }


  render() {
    const { items } = this.props;

    console.log("itemmmmmmmmmmmmdd", items)
    return (
      <div className="product-description">
        <h3>{items.name}</h3>
        <div className="cat-price">
          <p>Category{items.category}</p>
          <span className="dot" />

        </div>
        <div className="likes">
          <p className="nos">{items.rating}</p>
          <div className="stars">
            {/* <ReactSVG path={star} /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
          </div>
          <p className="tl">{items.totalReviews}</p>
        </div>
        <p className="desc">Description of the business that can be as long as it needs to be..... no truncation....</p>



      </div>
    );
  }
}

export default ProductDescription;
