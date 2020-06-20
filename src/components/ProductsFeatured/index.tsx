import * as React from "react";
// import { Link } from "react-router-dom";

import { Carousel, ProductListItem } from "..";
// import { generateProductUrl, maybe } from "../../core/utils";
import { maybe } from "../../core/utils";
import { TypedFeaturedProductsQuery } from "./queries";

import { AddressFormModal } from "@components/organisms";

import { ShopContext } from "../../components/ShopProvider/context";

import "./scss/index.scss";

interface ProductsFeaturedProps {
  title?: string;
}

const ProductsFeatured: React.FC<ProductsFeaturedProps> = ({ title }) => {
  const { defaultCountry, countries } = React.useContext(ShopContext);
  const [displayNewModal, setDisplayNewModal] = React.useState(false);
  return (
    <>
    <TypedFeaturedProductsQuery displayError={false}>
      {({ data }) => {
        const products = maybe(
          () => data.shop.homepageCollection.products.edges,
          []
        );

        if (products.length) {
          return (
            <div className="products-featured">
              <div className="container">
                <h3>{title}</h3>
                <Carousel>
                  {products.map(({ node: product }) => (
                    <div className="modalDiv" onClick={()=> setDisplayNewModal(true)}>
                    {/* <Link
                      to={generateProductUrl(product.id, product.name)}
                      key={product.id}
                    > */}
                      <ProductListItem product={product} />
                      </div>
                    // </Link>
                  ))}
                </Carousel>
              </div>
            </div>
          );
        } else {
          return null;
        }
      }}
    </TypedFeaturedProductsQuery>
    {displayNewModal && (
        <AddressFormModal
          hideModal={() => {
            setDisplayNewModal(false);
          }}
          userId={"1"}
          {...{ defaultValue: defaultCountry ? defaultCountry : {} }}
          submitBtnText={"Add"}
          title={"Add new address"}
          {...{ countriesOptions: countries }}
          formId="address-form"
        />
    )}
    </>
  );
};

ProductsFeatured.defaultProps = {
  title: "Category 1",
};

export default ProductsFeatured;
