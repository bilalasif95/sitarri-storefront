import * as React from "react";
import { Link } from "react-router-dom";

import { ProductListItem } from "..";
import { generateProductUrl, maybe } from "../../core/utils";
// import { maybe } from "../../core/utils";
import { TypedFeaturedProductsQuery } from "./queries";

import { Modal } from "@components/organisms/Modal";

import "./scss/index.scss";

interface ProductsFeaturedProps {
  title?: string;
}

const SpecificProductsFeatured: React.FC<ProductsFeaturedProps> = ({ title }) => {
  const [displayNewModal, setDisplayNewModal] = React.useState(false);
  const [product, setProduct] = React.useState({});
  const [show, setShow] = React.useState(true);
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
              <div className="s-products-featured">
                <div className="container">
                  <h3>{title}</h3>
                  {/* <Carousel> */}
                  <div className="pro-list">
                    {products.slice(0,4).map(({ node: product }) => (

                      <div className="modalDiv" onClick={() => {
                        setDisplayNewModal(true)
                        setProduct(product)
                      }}>
                        <Link
                          to={generateProductUrl(product.id, product.name)}
                          key={product.id}
                        >
                          <ProductListItem product={product} />
                        </Link>
                      </div>

                    ))}
                  </div>
                  {/* </Carousel> */}
                </div>
              </div>
            );
          } else {
            return null;
          }
        }}
      </TypedFeaturedProductsQuery>
      {
        displayNewModal && (
          <Modal
            title=""
            hide={() => {
              setDisplayNewModal(false);
              setShow(false);
            }}
            formId="product-form"
            disabled={false}
            show={show}
            submitBtnText=""
          >
            <ProductListItem product={product} />
          </Modal>
        )
      }
    </>
  );
};

SpecificProductsFeatured.defaultProps = {
  title: "Something more specific?",
};

export default SpecificProductsFeatured;
