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
  productId: string;
  productVariants: ProductDetails_product_variants[];
  name: string;
  pricing: ProductDetails_product_pricing;
  items: ICheckoutModelLine[];
  addToCart(varinatId: string, quantity?: number): void;
  setVariantId(variantId: string);
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
  ProductDescriptionState
  > {
  constructor(props: ProductDescriptionProps) {
    super(props);

    this.state = {
      quantity: 1,
      variant: "",
      variantPricing: null,
      variantPricingRange: {
        max: props.pricing.priceRange.stop,
        min: props.pricing.priceRange.start,
      },
      variantStock: null,
    };
  }

  getProductPrice = () => {
    const { variantPricingRange, variantPricing } = this.state;

    const { min, max } = variantPricingRange;
    if (variantPricing) {
      if (isEqual(variantPricing.priceUndiscounted, variantPricing.price)) {
        return <TaxedMoney taxedMoney={variantPricing.price} />;
      } else {
        return (
          <>
            <span className="product-description__undiscounted_price">
              <TaxedMoney taxedMoney={variantPricing.priceUndiscounted} />
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <TaxedMoney taxedMoney={variantPricing.price} />
          </>
        );
      }
    }
    if (isEqual(min, max)) {
      return <TaxedMoney taxedMoney={min} />;
    } else {
      return (
        <>
          <TaxedMoney taxedMoney={min} /> - <TaxedMoney taxedMoney={max} />
        </>
      );
    }
  };

  onVariantPickerChange = (
    _selectedAttributesValues?: IProductVariantsAttributesSelectedValues,
    selectedVariant?: ProductDetails_product_variants
  ) => {
    if (selectedVariant) {
      this.setState({
        variant: selectedVariant.id,
        variantPricing: selectedVariant.pricing,
        variantStock: selectedVariant.quantityAvailable,
      });
      this.props.setVariantId(selectedVariant.id);
    } else {
      this.setState({ variant: "", variantPricing: null });
      this.props.setVariantId("");
    }
  };

  canAddToCart = () => {
    const { items } = this.props;
    const { variant, quantity, variantStock } = this.state;

    const cartItem = items?.find(item => item.variant.id === variant);
    const syncedQuantityWithCart = cartItem
      ? quantity + (cartItem?.quantity || 0)
      : quantity;
    return quantity !== 0 && variant && variantStock >= syncedQuantityWithCart;
  };

  handleSubmit = () => {
    this.props.addToCart(this.state.variant, this.state.quantity);
    this.setState({ quantity: 0 });
  };

  getAvailableQuantity = () => {
    const { items } = this.props;
    const { variant, variantStock } = this.state;

    const cartItem = items?.find(item => item.variant.id === variant);
    const quantityInCart = cartItem?.quantity || 0;
    return variantStock - quantityInCart;
  };

  handleQuantityChange = (quantity: number) => {
    this.setState({
      quantity,
    });
  };

  renderErrorMessage = (message: string) => (
    <p className="product-description__error-message">{message}</p>
  );

  render() {
    const { name } = this.props;
    const { variant, variantStock } = this.state;

    const availableQuantity = this.getAvailableQuantity();
    const isOutOfStock = !!variant && variantStock === 0;
    const isNoItemsAvailable = !!variant && !isOutOfStock && !availableQuantity;
    const isLowStock =
      !!variant &&
      !isOutOfStock &&
      !isNoItemsAvailable &&
      availableQuantity < LOW_STOCK_QUANTITY;

    return (
      <div className="product-description">
        <h3>{name}</h3>
        <div className="cat-price">
          <p>Category</p>
          <span className="dot" />
          {isOutOfStock ? (
            this.renderErrorMessage("Out of stock")
          ) : (
              <p>{this.getProductPrice()}</p>
            )}
        </div>
        <div className="likes">
          <p className="nos">4.0</p>
          <div className="stars">
            {/* <ReactSVG path={star} /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
          </div>
          <p className="tl">(600)</p>
        </div>
        <p className="desc">Description of the business that can be as long as it needs to be..... no truncation....</p>


        {isLowStock && this.renderErrorMessage("Low stock")}
        {isNoItemsAvailable && this.renderErrorMessage("No items available")}
        {/* <div className="product-description__variant-picker">
          <ProductVariantPicker
            productVariants={this.props.productVariants}
            onChange={this.onVariantPickerChange}
            selectSidebar={true}
          />
        </div> */}
        {/* <div className="product-description__quantity-input">
          <QuantityTextField
            quantity={quantity}
            maxQuantity={availableQuantity}
            disabled={isOutOfStock || isNoItemsAvailable}
            onQuantityChange={this.handleQuantityChange}
            hideErrors={!variant || isOutOfStock || isNoItemsAvailable}
          />
        </div> */}
        {/* <AddToCart
          onSubmit={this.handleSubmit}
          disabled={!this.canAddToCart()}
        /> */}
      </div>
    );
  }
}

export default ProductDescription;
