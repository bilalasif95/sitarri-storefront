// import { smallScreen } from "../../globalStyles/scss/variables.scss";

import classNames from "classnames";
import * as React from "react";
import ReactSVG from "react-svg";
// import Media from "react-media";
// import { Link } from "react-router-dom";

import { CachedImage, Thumbnail } from "@components/molecules";

// import { Breadcrumbs, ProductDescription } from "../../components";
// import { ProductDescription } from "../../components";
import { generateCategoryUrl, generateShopUrl } from "../../core/utils";
import GalleryCarousel from "./GalleryCarousel";
import { ProductDetails_product } from "./gqlTypes/ProductDetails";
// import OtherProducts from "./Other";

import { ICheckoutModelLine } from "@sdk/repository";
import { ProductDescription as NewProductDescription } from "../../@next/components/molecules";
import noPhotoImg from "../../images/no-photo.svg";
// import { ProductGallery } from "../../@next/components/organisms/";

// import { structuredData } from "../../core/SEO/Product/structuredData";
import {
  // MenuDropdown,
  // Offline,
  // Online,
  OverlayContext,
  OverlayTheme,
  OverlayType,
} from "../../components";

import backIcon from "../../images/back.svg";
// import clock from "../../images/iconmonstr-time-2.svg";
import Search from "../../images/search.svg";

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
      link: generateShopUrl(product.id, product.name),
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
    // const productDescription = (
    //   <ProductDescription
    //     items={productInfo}
    //   />
    // );
    // const today = new Date();
    // const start = new Date();
    // const end = new Date();
    // const [openTime, openFormat] = productInfo.openingHours.split(" ")
    // const openHoursMinutes = openTime.split(":")
    // const openHours = openFormat === "PM" && Number(openHoursMinutes[0]) < 12 ? Number(openHoursMinutes[0]) + 12 : Number(openHoursMinutes[0])
    // const openMinutes = Number(openHoursMinutes[1])

    // const [closingTime, closingFormat] = productInfo.closingHours.split(" ")
    // const closingHoursMinutes = closingTime.split(":")
    // const closingHours = closingFormat === "PM" && Number(closingHoursMinutes[0]) < 12 ? Number(closingHoursMinutes[0]) + 12 : Number(closingHoursMinutes[0])
    // const closingMinutes = Number(closingHoursMinutes[1])
    // start.setHours(openHours);
    // start.setMinutes(openMinutes);
    // end.setHours(closingHours);
    // end.setMinutes(closingMinutes);

    return <OverlayContext.Consumer>
      {overlayContext => (
        <>
          <div className="product-page">
            <div className="container">
              <div className="product-page__product">

                <div className="SkeletonHeader">
                  <div className="SkeletonbackIcon" onClick={() => { window.history.go(-1); return false; }}><ReactSVG path={backIcon} onClick={() => { window.history.go(-1); return false; }} /></div>

                  <div className="SkeletonbackIcon" onClick={() =>
                    overlayContext.show(OverlayType.search, OverlayTheme.right)
                  }><ReactSVG path={Search} /></div>
                </div>

                <script className="structured-data-list" type="application/ld+json">
                  {/* {structuredData(product)} */}
                </script>
                {productInfo && productInfo.images.length > 1 ? <GalleryCarousel images={this.getImages()} />
                  // {productInfo.logo && productInfo.logo ? <GalleryCarousel images={this.getImages()} />
                  : <div className="noPicText">No photo available</div>}

              </div>
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

                    <div className="desc">
                      <h4>Product_1_1</h4>
                      <p className="descr">
                        <div className="EmptySpace">
                        fsdgfsdgvsfd
                        </div>
                      </p>
                      <p className="price"><span>£101.00</span>
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="container">

              <div className="Bottom">
                <div className="Right">
                  <div className="Imgbox">
                    {/* {product.store.logo
                    && product.store.logo ? <img src={product.store.logo} />
                      : */}
                    <img src={noPhotoImg} />
                    {/* } */}
                  </div>
                </div>

                <div className="Left">

                  {/* {product.store.openingHours !== "" && product.store.closingHours !== "" && */}
                  <>
                    <div className="CardTitle">
                      <div className="StoreTitle">
                        {/* {product.store.name} */}
                              Amazon
                              </div>
                      <div className="CardDetails">
                        <div className="Nos">10
                                {/* {product.store.rating === 0 ?  */}
                          <div className="Star" ><svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" /></svg></div>
                          {/* : <div className="Star"><svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg></div>} */}
                          <div className="Close">

                            {/* ({product.store.totalReviews}) */}
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="CardTime">

                      {/* {(today.getTime() >= start.getTime() && today.getTime() <= end.getTime()) ? */}
                      <div className="Timing">
                        <div className="Open" style={{ color: "green" }}>Open </div>
                        <div className="Close">
                          <span />
Closes
{/* {product.store.closingHours} */}
                        </div>
                      </div>
                      {/* : */}
                      {/* <div className="Timing">
                                <div className="Open" style={{ color: "red" }}>Closed </div>
                                <div className="Close">
                                  <span />
Opens */}
                      {/* {product.store.openingHours} */}
                      {/* </div>
                              </div> */}
                      {/* } */}

                      {/* {product.store.distance && */}
                      <div className="Location">
                        <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                        <div className="Miles">
                          {/* {product.store.distance} */}
                        </div>
                      </div>
                      {/* } */}

                    </div>
                  </>
                  {/* } */}
                  {/* <S.Likes>
                       
                      </S.Likes> */}

                </div>
              </div>
            </div>
            {/* Bottom */}

            {productInfo && productInfo.storeCategory.edges.length !== 0 &&
              <div className="container">
                <div className="product-page__product__description">
                  <NewProductDescription
                    categoryName={productInfo.name}
                    storeCategory={productInfo.storeCategory}
                  />
                </div>
              </div>
            }
          </div>
        </>
      )
      }
    </OverlayContext.Consumer>
  }
}

export default Page;
