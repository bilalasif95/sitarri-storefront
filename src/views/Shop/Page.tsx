// import { smallScreen } from "../../globalStyles/scss/variables.scss";
import 'react-toastify/dist/ReactToastify.css';

import classNames from "classnames";
import * as React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
// import webShare from 'react-web-share-api';
// import Media from "react-media";

// import ImageGallery from 'react-image-gallery';

import { CachedImage, Thumbnail } from "@components/molecules";

// import { Breadcrumbs, ProductDescription } from "../../components";
// import { ProductDescription } from "../../components";
import { generateCategoryUrl, generateShopUrl } from "../../core/utils";
import GalleryCarousel from "./GalleryCarousel";
import { ProductDetails_product } from "./gqlTypes/ProductDetails";
import OtherProducts from "./Other";

import { ICheckoutModelLine } from "@sdk/repository";
import { ProductDescription as NewProductDescription } from "../../@next/components/molecules";
// import { ProductGallery } from "../../@next/components/organisms/";
// import { structuredData } from "../../core/SEO/Product/structuredData";

import ReactSVG from "react-svg";
import backIcon from "../../images/back.svg";
import facebook from "../../images/facebook.svg";
import delivery from "../../images/food-bike-delivery.svg";
import direction from "../../images/iconmonstr-crosshair-6.svg";
import location from "../../images/iconmonstr-location-1.svg";
import phone from "../../images/iconmonstr-phone-1.svg";
import instagram from "../../images/instagram.svg";
import clock from "../../images/schedule-24px.svg";
import Search from "../../images/search.svg";
// import Share from "../../images/share.svg";
import twitter from "../../images/twitter.svg";

import website from "../../images/Icon_metro-earth.svg";

import {
  // MenuDropdown,
  // Offline,
  // Online,
  Carousel,
  OverlayContext,
  OverlayTheme,
  OverlayType,
  ProductDescription,
} from "../../components";

class Page extends React.PureComponent<
  {
    product: ProductDetails_product;
    redirectToPhotoGalleryPage: any;
    add: (variantId: string, quantity: number) => any;
    items: ICheckoutModelLine[];
  },
  { add: string; seeMore: boolean; variantId: string }
  > {
  fixedElement: React.RefObject<HTMLDivElement> = React.createRef();
  productGallery: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      add: this.props.product && this.props.product.address && this.props.product.address.streetAddress + " , " + this.props.product.address.city,
      seeMore: false,
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
    const { product, redirectToPhotoGalleryPage } = this.props;
    const productInfo = product;
    const productDescription = (
      <ProductDescription
        items={productInfo}
      />
    );

    const tempArray: any = [];
    productInfo.images.map((image: any) => tempArray.push({ original: image.url }));

    const today = new Date();
    const start = new Date();
    const days = new Array(7);
    days[0] = "Sunday";
    days[1] = "Monday";
    days[2] = "Tuesday";
    days[3] = "Wednesday";
    days[4] = "Thursday";
    days[5] = "Friday";
    days[6] = "Saturday";
    const todayDay = days[start.getDay()];

    const end = new Date();
    const [openTime, openFormat] = productInfo.openingHours.split(" ")
    const openHoursMinutes = openTime.split(":")
    const openHours = openFormat === "PM" && Number(openHoursMinutes[0]) < 12 ? Number(openHoursMinutes[0]) + 12 : Number(openHoursMinutes[0])
    const openMinutes = Number(openHoursMinutes[1])

    const [closingTime, closingFormat] = productInfo.closingHours.split(" ")
    const closingHoursMinutes = closingTime.split(":")
    const closingHours = closingFormat === "PM" && Number(closingHoursMinutes[0]) < 12 ? Number(closingHoursMinutes[0]) + 12 : Number(closingHoursMinutes[0])
    const closingMinutes = Number(closingHoursMinutes[1])
    start.setHours(openHours);
    start.setMinutes(openMinutes);
    end.setHours(closingHours);
    end.setMinutes(closingMinutes);

    const seeMoreCat = () => {
      this.setState({ seeMore: !this.state.seeMore });
    }

    return <OverlayContext.Consumer>
      {overlayContext => (
        <>
          <ToastContainer />
          <div className="Shop-page">
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
                {productInfo.images.length > 0 ?
                  <>
                    {window.innerWidth >= 540 ?
                      <GalleryCarousel redirectToPhotoGalleryPage={redirectToPhotoGalleryPage} productInfo={productInfo} images={this.getImages()} />
                      // {productInfo.logo && productInfo.logo ? <GalleryCarousel images={this.getImages()} />
                      :
                      <Carousel productDetails={"Tiles"} length={tempArray.length} renderCenterLeftControls={() => null} renderCenterRightControls={() => null}
                        renderBottomCenterControls={props => {
                          const indexes = [];
                          for (let i = 0; i < props.slideCount; i++) {
                            indexes.push(i);
                          }
                          return (
                            <ul className="product-page__product__gallery__nav">
                              {indexes.map(index => (
                                <li
                                  key={index}
                                  onClick={props.goToSlide.bind(null, index)}
                                  className={props.currentSlide === index ? "active" : ""}
                                >
                                  <span />
                                </li>
                              ))}
                            </ul>
                          );
                        }}>
                        {tempArray.map((img: any) => (
                          <img onClick={() => redirectToPhotoGalleryPage(productInfo.id, productInfo.name)} src={img.original} />
                        ))}
                      </Carousel>
                      // : <Link to={generatePhotoGalleryUrl(productInfo.id, productInfo.name)}><ImageGallery items={tempArray} showFullscreenButton={false} showThumbnails={false} showBullets={true} showPlayButton={false} showNav={false} /></Link>
                    }
                  </>
                  : <div className="noPicText"></div>}

              </div>
            </div>


            {/* icons */}
            <div className="container">
              <div className="SocialContent">

                <div className="shopBrand">
                  {productInfo.logo ?
                    <img src={productInfo.logo} />
                    : ""}
                </div>
                <div className="SocialIcons">

                  <OtherProducts config={{
                    params: {
                      text: productInfo.description,
                      title: productInfo.name,
                      url: window.location.href,
                    },
                    /* tslint:disable-next-line:no-console */
                    // onShareSuccess: () => console.log('Success'),
                    /* tslint:disable-next-line:no-console */
                    // onShareError: (error: Error) => console.log('error', error)
                  }} />
                  {/* <div className="icon ShareIcon">
                    <ReactSVG path={Share} />
                  </div> */}


                  {productInfo.instagramUrl !== "" &&
                    <a className="item dNone" href={productInfo.instagramUrl} target="_blank" rel="noopener noreferrer">
                      <div className="icon">
                        <ReactSVG path={instagram} />
                      </div>
                    </a>
                  }
                  {productInfo.facebookUrl !== "" &&
                    <a className="item dNone" href={productInfo.facebookUrl} target="_blank" rel="noopener noreferrer">
                      <div className="icon">
                        <ReactSVG path={facebook} />
                      </div>
                    </a>
                  }
                  {productInfo.twitterUrl !== "" &&
                    <a className="item dNone" href={productInfo.twitterUrl} target="_blank" rel="noopener noreferrer">
                      <div className="icon">
                        <ReactSVG path={twitter} />
                      </div>
                    </a>
                  }
                </div>
              </div>
            </div>
            {/* icons */}


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
                        <p>Call</p>
                      </a>}
                    {productInfo.websiteUrl !== "" &&
                      <a className="item" href={productInfo.websiteUrl} target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                          <ReactSVG path={website} />
                        </div>
                        <p>Website</p>
                      </a>
                    }
                    {productInfo.address &&
                      <a className="item"
                        href={`https://www.google.com/maps/place/${productInfo.address.latitude},${productInfo.address.longitude}`}
                        target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                          <ReactSVG path={direction} />
                        </div>
                        <p>Direction</p>
                      </a>
                    }



                    {productInfo.deliverooUrl !== "" &&
                      <a className="item" href={productInfo.deliverooUrl} target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                          <ReactSVG path={delivery} />
                        </div>
                        <p>Delivery</p>
                      </a>
                    }
                  </div>
                </div>


                {productInfo.uberEatsUrl !== "" && <div className="ReservationBox">
                  <div className="makeReservation">
                    <div className=" container">
                      <div className="Resevations">
                        <a className="ReservationBtn" href={productInfo.uberEatsUrl}>Make a reservation</a>
                      </div>
                    </div>
                  </div>
                </div>
                }

                {productInfo.address && productInfo.openingHours !== "" && productInfo.closingHours !== "" ?
                  <div className="shop-at">
                    {productInfo.address && (productInfo.address.streetAddress || productInfo.address.city) &&
                      <div className="shop-address m-0">
                        <ReactSVG path={location} />
                        <p><CopyToClipboard onCopy={() => toast.success("Address Copied", {
                          position: toast.POSITION.TOP_RIGHT,
                        })} text={productInfo.address && productInfo.address.streetAddress + " , " + productInfo.address.city}><span>{productInfo.address && productInfo.address.streetAddress + " , " + productInfo.address.city}</span></CopyToClipboard></p>
                      </div>}

                    <div className="hrBorder"></div>

                    {productInfo.openingHours !== "" && productInfo.closingHours !== "" &&
                      <div className="open-time">
                        <ReactSVG path={clock} />
                        {(today.getTime() >= start.getTime() && today.getTime() <= end.getTime()) ?
                          <div className="timing">
                            <p style={{ color: "#58C829" }}>Open</p>
                            <span />
                            <p>Closes {productInfo.closingHours}</p>
                          </div>
                          :
                          <div className="timing">
                            <p style={{ color: "#FF2F2D" }}>Closed</p>
                            <span />
                            <p>Opens {productInfo.openingHours}</p>
                          </div>}

                        <div className="TimeDropDown">
                          <button onClick={() => seeMoreCat()}>
                            {this.state.seeMore ? <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="#000" d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg>
                              : <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="#000" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                            } </button>
                        </div>

                      </div>}
                    {this.state.seeMore &&
                      <div className="WeekDays">
                        <div className="Days">
                          <p className={todayDay === "Monday" ? "activeDay" : ""}>Monday</p>
                          <p className={todayDay === "Tuesday" ? "activeDay" : ""}>Tuesday</p>
                          <p className={todayDay === "Wednesday" ? "activeDay" : ""}>Wednesday</p>
                          <p className={todayDay === "Thursday" ? "activeDay" : ""}>Thursday</p>
                          <p className={todayDay === "Friday" ? "activeDay" : ""}>Friday</p>
                          <p className={todayDay === "Saturday" ? "activeDay" : ""}>Saturday</p>
                          <p className={todayDay === "Sunday" ? "activeDay" : ""}>Sunday</p>
                        </div>
                        <div className="Time">
                          <p className={todayDay === "Monday" ? "activeDay" : ""}><span>11:00 am </span> - <span>1:00am</span></p>
                          <p className={todayDay === "Tuesday" ? "activeDay" : ""}><span>11:00 am </span> - <span>1:00am</span></p>
                          <p className={todayDay === "Wednesday" ? "activeDay" : ""}><span>11:00 am </span> - <span>1:00am</span></p>
                          <p className={todayDay === "Thursday" ? "activeDay" : ""}><span>11:00 am </span> - <span>1:00am</span></p>
                          <p className={todayDay === "Friday" ? "activeDay" : ""}><span>11:00 am </span> - <span>1:00am</span></p>
                          <p className={todayDay === "Saturday" ? "activeDay" : ""}><span>11:00 am </span> - <span>1:00am</span></p>
                          <p className={todayDay === "Sunday" ? "activeDay" : ""}><span>11:00 am </span> - <span>1:00am</span></p>

                        </div>
                      </div>

                    }
                  </div>
                  : <>
                    {productInfo.address && (productInfo.address.streetAddress || productInfo.address.city) &&
                      <div className="shop-at">
                        <div className="shop-address m-0">
                          <ReactSVG path={location} />
                          <p><CopyToClipboard onCopy={() => toast.success("Address Copied", {
                            position: toast.POSITION.TOP_RIGHT,
                          })} text={productInfo.address && productInfo.address.streetAddress + " , " + productInfo.address.city}><span>{productInfo.address && productInfo.address.streetAddress + " , " + productInfo.address.city}</span></CopyToClipboard></p>
                        </div></div>}</>
                }
                {/* {productInfo.instagramUrl !== "" && productInfo.facebookUrl !== "" && productInfo.twitterUrl !== "" &&
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
                  </div>} */}
              </div>
            </div>
            {productInfo.storeCategory.edges.length !== 0 &&
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
