// import { smallScreen } from "../../globalStyles/scss/variables.scss";

import classNames from "classnames";
import * as React from "react";
// import Media from "react-media";
// import { Link } from "react-router-dom";

import { CachedImage, Thumbnail } from "@components/molecules";

// import { Breadcrumbs, ProductDescription } from "../../components";
import { ProductDescription } from "../../components";
import { generateCategoryUrl, generateProductUrl } from "../../core/utils";
import GalleryCarousel from "./GalleryCarousel";
import { ProductDetails_product } from "./gqlTypes/ProductDetails";
// import OtherProducts from "./Other";

import { ICheckoutModelLine } from "@sdk/repository";
import { ProductDescription as NewProductDescription } from "../../@next/components/molecules";
// import { ProductGallery } from "../../@next/components/organisms/";

// import { structuredData } from "../../core/SEO/Product/structuredData";

import ReactSVG from "react-svg";
import delivery from "../../images/iconmonstr-bicycle-4.svg";
import direction from "../../images/iconmonstr-crosshair-6.svg";
import facebook from "../../images/iconmonstr-facebook-3.svg";
import website from "../../images/iconmonstr-globe-5.svg";
import instagram from "../../images/iconmonstr-instagram-11.svg";
import location from "../../images/iconmonstr-location-1.svg";
import phone from "../../images/iconmonstr-phone-1.svg";
import clock from "../../images/iconmonstr-time-2.svg";
import twitter from "../../images/iconmonstr-twitter-1.svg";
// import youtube from "../../images/iconmonstr-youtube-6.svg";
class Page extends React.PureComponent<
  {
    product: ProductDetails_product;
    add: (variantId: string, quantity: number) => any;
    items: ICheckoutModelLine[];
  },
  { variantId: string }
  > {
  fixedElement: React.RefObject<HTMLDivElement> = React.createRef();
  productGallery: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      variantId: "",
    };
  }

  setVariantId = (id: string) => {
    this.setState({ variantId: id });
  };

  get showCarousel() {
    return this.props.product.images.length > 1;
  }

  populateBreadcrumbs = product => [
    {
      link: generateCategoryUrl(product.category.id, product.category.name),
      value: product.category.name,
    },
    {
      link: generateProductUrl(product.id, product.name),
      value: product.name,
    },
  ];

  getImages = () => {
    const { product } = this.props;

    // if (product.variants && this.state.variantId) {
    //   const variant = product.variants
    //     .filter(variant => variant.id === this.state.variantId)
    //     .pop();
    //   if (variant.images.length > 0) {
    //     return variant.images;
    //   } else {
    //     return product.images;
    //   }
    // } else {
    //   return product.images;
    // }

    return product.images && product.images;
    // return product.logo && product.logo;
  };

  renderImages = product => {
    const images = this.getImages();
    if (images && images.length) {
      return images.map(image => (
        <a href={image.url} target="_blank">
          <CachedImage url={image.url} key={image.id}>
            <Thumbnail source={product} />
          </CachedImage>
        </a>
      ));
    }
    //  if (images && images) {
    //   return <a href={images} target="_blank">
    //       <CachedImage url={images}>
    //         <Thumbnail source={product} />
    //       </CachedImage>
    //     </a>
    // }
    return <CachedImage />;
  };

  openTab = (url) => {
    window.open(url);
  }
  render() {
    const { product } = this.props;
    const productInfo = product;
    const productDescription = (
      <ProductDescription
        items={productInfo}
      />
    );
    const today = new Date();
    const start = new Date();
    const end = new Date();
    const [openTime,openFormat] = productInfo.openingHours.split(" ")
    const openHoursMinutes = openTime.split(":")
    const openHours = openFormat === "PM" && Number(openHoursMinutes[0]) < 12 ? Number(openHoursMinutes[0])+12 : Number(openHoursMinutes[0])
    const openMinutes = Number(openHoursMinutes[1])
    
    const [closingTime,closingFormat] = productInfo.closingHours.split(" ")
    const closingHoursMinutes = closingTime.split(":")
    const closingHours = closingFormat === "PM" && Number(closingHoursMinutes[0]) < 12 ? Number(closingHoursMinutes[0])+12 : Number(closingHoursMinutes[0])
    const closingMinutes = Number(closingHoursMinutes[1])
    start.setHours(openHours);
    start.setMinutes(openMinutes);
    end.setHours(closingHours);
    end.setMinutes(closingMinutes);

    return (
      <div className="product-page">

        <div className="product-page__product">

          <script className="structured-data-list" type="application/ld+json">
            {/* {structuredData(product)} */}
          </script>
          {productInfo.images.length > 1 ? <GalleryCarousel images={this.getImages()} />
          // {productInfo.logo && productInfo.logo ? <GalleryCarousel images={this.getImages()} />
          : <div className="noPicText">No photo available</div>}

        </div>
        <div className="container">
          <div className="product-page__product">
            {/* Add script here */}
            <script className="structured-data-list" type="application/ld+json">
              {/* {structuredData(product)} */}
            </script>

            <div className="product-page__product__info">
              <div
                className={classNames(
                  "product-page__product__info--fixed"
                )}
              >
                {productDescription}
              </div>
              <div className="useful-links">
                {productInfo.phone !== "" &&
                  <a className="item" href={`tel:${productInfo.phone}`} target="_blank" rel="noopener noreferrer">
                    <div className="icon">
                      <ReactSVG path={phone} />
                    </div>
                    <p>Phone</p>
                  </a>}
                {productInfo.websiteUrl !== "" &&
                  <a className="item" href={productInfo.websiteUrl} target="_blank" rel="noopener noreferrer">
                    <div className="icon">
                      <ReactSVG path={website} />
                    </div>
                    <p>Website</p>
                  </a>}
                {productInfo.address &&
                  <a className="item" href={`https://www.google.com/maps/place/${productInfo.address.latitude},${productInfo.address.longitude}`} target="_blank" rel="noopener noreferrer">
                    <div className="icon">
                      <ReactSVG path={direction} />
                    </div>
                    <p>Direction</p>
                  </a>}
                {productInfo.instagramUrl !== "" &&
                  <a className="item dNone" href={productInfo.instagramUrl} target="_blank" rel="noopener noreferrer">
                    <div className="icon">
                      <ReactSVG path={instagram} />
                    </div>
                    <p>Instagram</p>
                  </a>}
                {productInfo.facebookUrl !== "" &&
                  <a className="item dNone" href={productInfo.facebookUrl} target="_blank" rel="noopener noreferrer">
                    <div className="icon">
                      <ReactSVG path={facebook} />
                    </div>
                    <p>Facebook</p>
                  </a>}
                {productInfo.twitterUrl !== "" &&
                  <a className="item dNone" href={productInfo.twitterUrl} target="_blank" rel="noopener noreferrer">
                    <div className="icon">
                      <ReactSVG path={twitter} />
                    </div>
                    <p>Twitter</p>
                  </a>}
                {productInfo.deliverooUrl !== "" &&
                  <a className="item" href={productInfo.deliverooUrl} target="_blank" rel="noopener noreferrer">
                    <div className="icon">
                      <ReactSVG path={delivery} />
                    </div>
                    <p>Delivery</p>
                  </a>}
              </div>
            </div>
            {productInfo.address && productInfo.openingHours !== "" && productInfo.closingHours !== "" ?
              <div className="shop-at">
                {productInfo.address && (productInfo.address.streetAddress || productInfo.address.city) &&
                  <div className="shop-address">
                    <ReactSVG path={location} />
                    <p>{productInfo.address && productInfo.address.streetAddress + " , " + productInfo.address.city}</p>
                  </div>}
                {productInfo.openingHours !== "" && productInfo.closingHours !== "" &&
                  <div className="open-time">
                    <ReactSVG path={clock} />
                    {(today.getTime() >= start.getTime() && today.getTime() <= end.getTime()) ?
                      <div className="timing">
                        <p style={{color: "green"}}>Open</p>
                        <span />
                        <p>Closes {productInfo.closingHours}</p>
                      </div>
                      : 
                      <div className="timing">
                        <p style={{color: "red"}}>Closed</p>
                        <span />
                        <p>Opens {productInfo.openingHours}</p>
                      </div>}
                  </div>}
              </div>
            : <>
            {productInfo.address && (productInfo.address.streetAddress || productInfo.address.city) &&
              <div className="shop-at">
              <div className="shop-address">
                <ReactSVG path={location} />
                <p>{productInfo.address && productInfo.address.streetAddress + " , " + productInfo.address.city}</p>
              </div></div>}</>
            }
            {productInfo.instagramUrl !== "" && productInfo.facebookUrl !== "" && productInfo.twitterUrl !== "" &&
              <div className="useful-links-res">
                {productInfo.instagramUrl !== "" &&
                  <a className="item" href={productInfo.instagramUrl} target="_blank" rel="noopener noreferrer">
                    <div className="icon">
                      <ReactSVG path={instagram} />
                    </div>
                    <p>Instagram</p>
                  </a>}
                {productInfo.facebookUrl !== "" &&
                  <a className="item" href={productInfo.facebookUrl} target="_blank" rel="noopener noreferrer">
                    <div className="icon">
                      <ReactSVG path={facebook} />
                    </div>
                    <p>Facebook</p>
                  </a>}
                {productInfo.twitterUrl !== "" &&
                  <a className="item" href={productInfo.twitterUrl} target="_blank" rel="noopener noreferrer">
                    <div className="icon">
                      <ReactSVG path={twitter} />
                    </div>
                    <p>Twitter</p>
                  </a>}
              </div>}
          </div>
        </div>
        {productInfo.storeCategory.edges.length !== 0 &&
          <div className="container">
            <div className="product-page__product__description">
              <NewProductDescription
                storeCategory={productInfo.storeCategory}
              />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Page;
