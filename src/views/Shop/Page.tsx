// import { smallScreen } from "../../globalStyles/scss/variables.scss";
import 'react-toastify/dist/ReactToastify.css';

import classNames from "classnames";
import * as React from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import webShare from 'react-web-share-api';
// import Media from "react-media";

// import ImageGallery from 'react-image-gallery';

import { CachedImage, Thumbnail } from "@components/molecules";

// import { Breadcrumbs, ProductDescription } from "../../components";
// import { ProductDescription } from "../../components";
import { generateCategoryUrl, generateShopUrl } from "../../core/utils";
import GalleryCarousel from "./GalleryCarousel";
// import { ProductDetails_product } from "./gqlTypes/ProductDetails";
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
  // Carousel,
  OverlayContext,
  OverlayTheme,
  OverlayType,
  ProductDescription,
} from "../../components";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class Page extends React.PureComponent<
  {
    product: any;
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
    const productInfo = product && product;
    const productDescription = (
      <ProductDescription
        items={productInfo}
      />
    );

    const tempArray: any = [];
    productInfo.images.map((image: any) => tempArray.push({ original: image.url }));

    const today = new Date();
    const mondayStart = new Date();
    const mondayEnd = new Date();
    const tuesdayStart = new Date();
    const tuesdayEnd = new Date();
    const wednesdayStart = new Date();
    const wednesdayEnd = new Date();
    const thursdayStart = new Date();
    const thursdayEnd = new Date();
    const fridayStart = new Date();
    const fridayEnd = new Date();
    const saturdayStart = new Date();
    const saturdayEnd = new Date();
    const sundayStart = new Date();
    const sundayEnd = new Date();
    const days = new Array(7);
    days[0] = "Sunday";
    days[1] = "Monday";
    days[2] = "Tuesday";
    days[3] = "Wednesday";
    days[4] = "Thursday";
    days[5] = "Friday";
    days[6] = "Saturday";
    const todayDay = days[today.getDay()];

    const mondayOpeningTime = secondsToHms(productInfo && productInfo.mondayOpeningTime);
    const [mondayOpenTime] = mondayOpeningTime.split(" ")
    const mondayOpenHoursMinutes = mondayOpenTime.split(":")
    const mondayOpenHours = Number(mondayOpenHoursMinutes[0])
    const mondayOpenMinutes = Number(mondayOpenHoursMinutes[1])

    const mondayClosingTime = secondsToHms(productInfo && productInfo.mondayClosingTime);
    const [mondayCloseTime] = mondayClosingTime.split(" ")
    const mondayClosingHoursMinutes = mondayCloseTime.split(":")
    const mondayClosingHours = Number(mondayClosingHoursMinutes[0])
    const mondayClosingMinutes = Number(mondayClosingHoursMinutes[1])
    mondayStart.setHours(mondayOpenHours);
    mondayStart.setMinutes(mondayOpenMinutes);
    mondayEnd.setHours(mondayClosingHours);
    mondayEnd.setMinutes(mondayClosingMinutes);


    const tuesdayOpeningTime = secondsToHms(productInfo && productInfo.tuesdayOpeningTime);
    const [tuesdayOpenTime] = tuesdayOpeningTime.split(" ")
    const tuesdayOpenHoursMinutes = tuesdayOpenTime.split(":")
    const tuesdayOpenHours = Number(tuesdayOpenHoursMinutes[0])
    const tuesdayOpenMinutes = Number(tuesdayOpenHoursMinutes[1])

    const tuesdayClosingTime = secondsToHms(productInfo && productInfo.tuesdayClosingTime);
    const [tuesdayCloseTime] = tuesdayClosingTime.split(" ")
    const tuesdayClosingHoursMinutes = tuesdayCloseTime.split(":")
    const tuesdayClosingHours = Number(tuesdayClosingHoursMinutes[0])
    const tuesdayClosingMinutes = Number(tuesdayClosingHoursMinutes[1])
    tuesdayStart.setHours(tuesdayOpenHours);
    tuesdayStart.setMinutes(tuesdayOpenMinutes);
    tuesdayEnd.setHours(tuesdayClosingHours);
    tuesdayEnd.setMinutes(tuesdayClosingMinutes);


    const wednesdayOpeningTime = secondsToHms(productInfo && productInfo.wednesdayOpeningTime);
    const [wednesdayOpenTime] = wednesdayOpeningTime.split(" ")
    const wednesdayOpenHoursMinutes = wednesdayOpenTime.split(":")
    const wednesdayOpenHours = Number(wednesdayOpenHoursMinutes[0])
    const wednesdayOpenMinutes = Number(wednesdayOpenHoursMinutes[1])

    const wednesdayClosingTime = secondsToHms(productInfo && productInfo.wednesdayClosingTime);
    const [wednesdayCloseTime] = wednesdayClosingTime.split(" ")
    const wednesdayClosingHoursMinutes = wednesdayCloseTime.split(":")
    const wednesdayClosingHours = Number(wednesdayClosingHoursMinutes[0])
    const wednesdayClosingMinutes = Number(wednesdayClosingHoursMinutes[1])
    wednesdayStart.setHours(wednesdayOpenHours);
    wednesdayStart.setMinutes(wednesdayOpenMinutes);
    wednesdayEnd.setHours(wednesdayClosingHours);
    wednesdayEnd.setMinutes(wednesdayClosingMinutes);


    const thursdayOpeningTime = secondsToHms(productInfo && productInfo.thursdayOpeningTime);
    const [thursdayOpenTime] = thursdayOpeningTime.split(" ")
    const thursdayOpenHoursMinutes = thursdayOpenTime.split(":")
    const thursdayOpenHours = Number(thursdayOpenHoursMinutes[0])
    const thursdayOpenMinutes = Number(thursdayOpenHoursMinutes[1])

    const thursdayClosingTime = secondsToHms(productInfo && productInfo.thursdayClosingTime);
    const [thursdayCloseTime] = thursdayClosingTime.split(" ")
    const thursdayClosingHoursMinutes = thursdayCloseTime.split(":")
    const thursdayClosingHours = Number(thursdayClosingHoursMinutes[0])
    const thursdayClosingMinutes = Number(thursdayClosingHoursMinutes[1])
    thursdayStart.setHours(thursdayOpenHours);
    thursdayStart.setMinutes(thursdayOpenMinutes);
    thursdayEnd.setHours(thursdayClosingHours);
    thursdayEnd.setMinutes(thursdayClosingMinutes);


    const fridayOpeningTime = secondsToHms(productInfo && productInfo.fridayOpeningTime);
    const [fridayOpenTime] = fridayOpeningTime.split(" ")
    const fridayOpenHoursMinutes = fridayOpenTime.split(":")
    const fridayOpenHours = Number(fridayOpenHoursMinutes[0])
    const fridayOpenMinutes = Number(fridayOpenHoursMinutes[1])

    const fridayClosingTime = secondsToHms(productInfo && productInfo.fridayClosingTime);
    const [fridayCloseTime] = fridayClosingTime.split(" ")
    const fridayClosingHoursMinutes = fridayCloseTime.split(":")
    const fridayClosingHours = Number(fridayClosingHoursMinutes[0])
    const fridayClosingMinutes = Number(fridayClosingHoursMinutes[1])
    fridayStart.setHours(fridayOpenHours);
    fridayStart.setMinutes(fridayOpenMinutes);
    fridayEnd.setHours(fridayClosingHours);
    fridayEnd.setMinutes(fridayClosingMinutes);


    const saturdayOpeningTime = secondsToHms(productInfo && productInfo.saturdayOpeningTime);
    const [saturdayOpenTime] = saturdayOpeningTime.split(" ")
    const saturdayOpenHoursMinutes = saturdayOpenTime.split(":")
    const saturdayOpenHours = Number(saturdayOpenHoursMinutes[0])
    const saturdayOpenMinutes = Number(saturdayOpenHoursMinutes[1])

    const saturdayClosingTime = secondsToHms(productInfo && productInfo.saturdayClosingTime);
    const [saturdayCloseTime] = saturdayClosingTime.split(" ")
    const saturdayClosingHoursMinutes = saturdayCloseTime.split(":")
    const saturdayClosingHours = Number(saturdayClosingHoursMinutes[0])
    const saturdayClosingMinutes = Number(saturdayClosingHoursMinutes[1])
    saturdayStart.setHours(saturdayOpenHours);
    saturdayStart.setMinutes(saturdayOpenMinutes);
    saturdayEnd.setHours(saturdayClosingHours);
    saturdayEnd.setMinutes(saturdayClosingMinutes);


    const sundayOpeningTime = secondsToHms(productInfo && productInfo.sundayOpeningTime);
    const [sundayOpenTime] = sundayOpeningTime.split(" ")
    const sundayOpenHoursMinutes = sundayOpenTime.split(":")
    const sundayOpenHours = Number(sundayOpenHoursMinutes[0])
    const sundayOpenMinutes = Number(sundayOpenHoursMinutes[1])

    const sundayClosingTime = secondsToHms(productInfo && productInfo.sundayClosingTime);
    const [sundayCloseTime] = sundayClosingTime.split(" ")
    const sundayClosingHoursMinutes = sundayCloseTime.split(":")
    const sundayClosingHours = Number(sundayClosingHoursMinutes[0])
    const sundayClosingMinutes = Number(sundayClosingHoursMinutes[1])
    sundayStart.setHours(sundayOpenHours);
    sundayStart.setMinutes(sundayOpenMinutes);
    sundayEnd.setHours(sundayClosingHours);
    sundayEnd.setMinutes(sundayClosingMinutes);

    const seeMoreCat = () => {
      this.setState({ seeMore: !this.state.seeMore });
    }

    function secondsToHms(d) {
      d = Number(d);
      const h = Math.floor(d / 3600);
      const m = Math.floor(d % 3600 / 60);
      const s = Math.floor(d % 3600 % 60);

      const hDisplay = h > 0 ? h + (h === 1 ? ":" : ":") : "";
      const mDisplay = m > 0 ? m < 10 ? "0" + m + ":" : m + ":" : "00:";
      const sDisplay = s > 0 ? s < 10 ? "0" + s : s : "00";
      return hDisplay + mDisplay + sDisplay;
    }

    return <OverlayContext.Consumer>
      {overlayContext => (
        <>

          <div className="Shop-page">
            <div className="container">
              <div className="product-page__shop">

                <div className="SkeletonHeader">
                  <div className="SkeletonbackIcon" onClick={() => { window.history.go(-1); return false; }}><ReactSVG path={backIcon} onClick={() => { window.history.go(-1); return false; }} /></div>

                  <div className="SkeletonbackIcon" onClick={() =>
                    overlayContext.show(OverlayType.search, OverlayTheme.right)
                  }><ReactSVG path={Search} /></div>
                </div>

                <script className="structured-data-list" type="application/ld+json">
                  {/* {structuredData(product)} */}
                </script>
                {productInfo && productInfo.images.length > 0 ?
                  <>
                    {window.innerWidth >= 540 ?
                      <GalleryCarousel redirectToPhotoGalleryPage={redirectToPhotoGalleryPage} productInfo={productInfo} images={this.getImages()} />
                      // {productInfo.logo && productInfo.logo ? <GalleryCarousel images={this.getImages()} />
                      :
                      <div className="swipperImages">
                        <Swiper pagination={{ clickable: true, dynamicBullets: true }} slidesPerView={1}>
                          {tempArray.map((img: any) => (
                            <SwiperSlide><img onClick={() => redirectToPhotoGalleryPage(product.id, product.name)} src={img.original} alt={img.alt} /></SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                      // <Carousel productDetails={"Tiles"} length={tempArray.length} renderCenterLeftControls={() => null} renderCenterRightControls={() => null}
                      //   renderBottomCenterControls={props => {
                      //     const indexes = [];
                      //     for (let i = 0; i < props.slideCount; i++) {
                      //       indexes.push(i);
                      //     }
                      //     return (
                      //       <ul className="product-page__product__gallery__nav">
                      //         {indexes.map(index => (
                      //           <li
                      //             key={index}
                      //             onClick={props.goToSlide.bind(null, index)}
                      //             className={props.currentSlide === index ? "active" : ""}
                      //           >
                      //             <span />
                      //           </li>
                      //         ))}
                      //       </ul>
                      //     );
                      //   }}>
                      //   {tempArray.map((img: any) => (
                      //     <img onClick={() => redirectToPhotoGalleryPage(productInfo.id, productInfo.name)} src={img.original} />
                      //   ))}
                      // </Carousel>
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
                  {productInfo && productInfo.business && productInfo.business.logo ?
                    <img src={productInfo && productInfo.business && productInfo.business.logo} />
                    : ""}
                </div>
                <div className="SocialIcons">

                  <OtherProducts config={{
                    params: {
                      text: productInfo && productInfo.description,
                      title: productInfo && productInfo.name,
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


                  {productInfo && productInfo.business && productInfo.business.instagramUrl !== "" &&
                    <a className="item dNone" href={productInfo && productInfo.business && productInfo.business.instagramUrl} target="_blank" rel="noopener noreferrer">
                      <div className="icon">
                        <ReactSVG path={instagram} />
                      </div>
                    </a>
                  }
                  {productInfo && productInfo.business && productInfo.business.facebookUrl !== "" &&
                    <a className="item dNone" href={productInfo && productInfo.business && productInfo.business.facebookUrl} target="_blank" rel="noopener noreferrer">
                      <div className="icon">
                        <ReactSVG path={facebook} />
                      </div>
                    </a>
                  }
                  {productInfo && productInfo.business && productInfo.business.twitterUrl !== "" &&
                    <a className="item dNone" href={productInfo && productInfo.business && productInfo.business.twitterUrl} target="_blank" rel="noopener noreferrer">
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
                  {productInfo && productInfo.phone !== "" && productInfo && productInfo.business && productInfo.business.websiteUrl !== "" && productInfo && productInfo.address && productInfo && productInfo.business && productInfo.business.deliverooUrl !== "" ?
                    <div className="four-useful-links">
                      {productInfo.phone !== "" &&
                        <a className="item" href={`tel:${productInfo.phone}`} target="_blank" rel="noopener noreferrer">
                          <div className="icon">
                            <ReactSVG path={phone} />
                          </div>
                          <p>Call</p>
                        </a>}
                      {productInfo && productInfo.business && productInfo.business.websiteUrl !== "" &&
                        <a className="item" href={productInfo && productInfo.business && productInfo.business.websiteUrl} target="_blank" rel="noopener noreferrer">
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
                      {productInfo && productInfo.business && productInfo.business.deliverooUrl !== "" &&
                        <a className="item" href={productInfo && productInfo.business && productInfo.business.deliverooUrl} target="_blank" rel="noopener noreferrer">
                          <div className="icon">
                            <ReactSVG path={delivery} />
                          </div>
                          <p>Delivery</p>
                        </a>
                      }
                    </div>
                    :
                    ((productInfo && productInfo.phone !== "") || (productInfo && productInfo.business && productInfo.business.websiteUrl !== "") || (productInfo && productInfo.address)) &&
                    <div className="useful-links">
                      {productInfo.phone !== "" &&
                        <a className="item" href={`tel:${productInfo.phone}`} target="_blank" rel="noopener noreferrer">
                          <div className="icon">
                            <ReactSVG path={phone} />
                          </div>
                          <p>Call</p>
                        </a>}
                      {productInfo && productInfo.business && productInfo.business.websiteUrl !== "" &&
                        <a className="item" href={productInfo && productInfo.business && productInfo.business.websiteUrl} target="_blank" rel="noopener noreferrer">
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
                    </div>
                  }
                </div>


                {productInfo && productInfo.business && productInfo.business.uberEatsUrl !== "" && <div className="ReservationBox">
                  <div className="makeReservation">
                    <div className=" container">
                      <div className="Resevations">
                        <a className="ReservationBtn" href={productInfo && productInfo.business && productInfo.business.uberEatsUrl} target="_blank" rel="noopener noreferrer">Make a reservation</a>
                      </div>
                    </div>
                  </div>
                </div>
                }

                {productInfo && productInfo.address ?
                  <div className="shop-at">
                    {productInfo.address && (productInfo.address.streetAddress || productInfo.address.city || productInfo.address.streetAddress2 || productInfo.address.country.country) &&
                      <div className="shop-address m-0">
                        <ReactSVG path={location} />
                        <p><CopyToClipboard onCopy={() => toast.success("Address Copied", {
                          position: toast.POSITION.TOP_RIGHT,
                        })} text={productInfo.address && productInfo.address.streetAddress + " , " + productInfo.address.streetAddress2 + " , " + productInfo.address.city + " , " + productInfo.address.country.country}><span>{productInfo.address && productInfo.address.streetAddress + " , " + productInfo.address.streetAddress2 + " , " + productInfo.address.city + " , " + productInfo.address.country.country}</span></CopyToClipboard></p>
                      </div>}

                    <div className="hrBorder"></div>


                    <div className="open-time">
                      <ReactSVG path={clock} />
                      {
                        todayDay === "Monday" && (
                          productInfo.mondayOpeningStatus ?
                            (today.getTime() >= mondayStart.getTime() && today.getTime() <= mondayEnd.getTime()) ?
                              <div className="timing">
                                <p style={{ color: "#58C829" }}>Open</p>
                                <span />
                                <p>Closes {productInfo.mondayClosingTime <= 0 ? <>00:00</> : secondsToHms(productInfo.mondayClosingTime)}</p>
                              </div>
                              :
                              <div className="timing">
                                <p style={{ color: "#FF2F2D" }}>Closed</p>
                                <span />
                                <p>Opens {productInfo.mondayOpeningTime <= 0 ? <>00:00</> : secondsToHms(productInfo.mondayOpeningTime)}</p>
                              </div>
                            : <div className="timing">
                              <p style={{ color: "#FF2F2D" }}>Closed</p>
                            </div>
                        )
                      }
                      {
                        todayDay === "Tuesday" && (
                          productInfo.tuesdayOpeningStatus ?
                            (today.getTime() >= tuesdayStart.getTime() && today.getTime() <= tuesdayEnd.getTime()) ?
                              <div className="timing">
                                <p style={{ color: "#58C829" }}>Open</p>
                                <span />
                                <p>Closes {productInfo.tuesdayClosingTime <= 0 ? <>00:00</> : secondsToHms(productInfo.tuesdayClosingTime)}</p>
                              </div>
                              :
                              <div className="timing">
                                <p style={{ color: "#FF2F2D" }}>Closed</p>
                                <span />
                                <p>Opens {productInfo.tuesdayOpeningTime <= 0 ? <>00:00</> : secondsToHms(productInfo.tuesdayOpeningTime)}</p>
                              </div>
                            : <div className="timing">
                              <p style={{ color: "#FF2F2D" }}>Closed</p>
                            </div>
                        )
                      }
                      {
                        todayDay === "Wednesday" && (
                          productInfo.wednesdayOpeningStatus ?
                            (today.getTime() >= wednesdayStart.getTime() && today.getTime() <= wednesdayEnd.getTime()) ?
                              <div className="timing">
                                <p style={{ color: "#58C829" }}>Open</p>
                                <span />
                                <p>Closes {productInfo.wednesdayClosingTime <= 0 ? <>00:00</> : secondsToHms(productInfo.wednesdayClosingTime)}</p>
                              </div>
                              :
                              <div className="timing">
                                <p style={{ color: "#FF2F2D" }}>Closed</p>
                                <span />
                                <p>Opens {productInfo.wednesdayOpeningTime <= 0 ? <>00:00</> : secondsToHms(productInfo.wednesdayOpeningTime)}</p>
                              </div>
                            : <div className="timing">
                              <p style={{ color: "#FF2F2D" }}>Closed</p>
                            </div>
                        )
                      }
                      {
                        todayDay === "Thursday" && (productInfo.thursdayOpeningStatus ?
                          (today.getTime() >= thursdayStart.getTime() && today.getTime() <= thursdayEnd.getTime()) ?
                            <div className="timing">
                              <p style={{ color: "#58C829" }}>Open</p>
                              <span />
                              <p>Closes {productInfo.thursdayClosingTime <= 0 ? <>00:00</> : secondsToHms(productInfo.thursdayClosingTime)}</p>
                            </div>
                            :
                            <div className="timing">
                              <p style={{ color: "#FF2F2D" }}>Closed</p>
                              <span />
                              <p>Opens {productInfo.thursdayOpeningTime <= 0 ? <>00:00</> : secondsToHms(productInfo.thursdayOpeningTime)}</p>
                            </div>
                          : <div className="timing">
                            <p style={{ color: "#FF2F2D" }}>Closed</p>
                          </div>
                        )
                      }
                      {
                        todayDay === "Friday" && (productInfo.fridayOpeningStatus ?
                          (today.getTime() >= fridayStart.getTime() && today.getTime() <= fridayEnd.getTime()) ?
                            <div className="timing">
                              <p style={{ color: "#58C829" }}>Open</p>
                              <span />
                              <p>Closes {productInfo.fridayClosingTime <= 0 ? <>00:00</> : secondsToHms(productInfo.fridayClosingTime)}</p>
                            </div>
                            :
                            <div className="timing">
                              <p style={{ color: "#FF2F2D" }}>Closed</p>
                              <span />
                              <p>Opens {productInfo.fridayOpeningTime <= 0 ? <>00:00</> : secondsToHms(productInfo.fridayOpeningTime)}</p>
                            </div>
                          : <div className="timing">
                            <p style={{ color: "#FF2F2D" }}>Closed</p>
                          </div>
                        )
                      }
                      {
                        todayDay === "Saturday" && (productInfo.saturdayOpeningStatus ?
                          (today.getTime() >= saturdayStart.getTime() && today.getTime() <= saturdayEnd.getTime()) ?
                            <div className="timing">
                              <p style={{ color: "#58C829" }}>Open</p>
                              <span />
                              <p>Closes {productInfo.saturdayClosingTime <= 0 ? <>00:00</> : secondsToHms(productInfo.saturdayClosingTime)}</p>
                            </div>
                            :
                            <div className="timing">
                              <p style={{ color: "#FF2F2D" }}>Closed</p>
                              <span />
                              <p>Opens {productInfo.saturdayOpeningTime <= 0 ? <>00:00</> : secondsToHms(productInfo.saturdayOpeningTime)}</p>
                            </div>
                          : <div className="timing">
                            <p style={{ color: "#FF2F2D" }}>Closed</p>
                          </div>
                        )
                      }
                      {
                        todayDay === "Sunday" && (productInfo.sundayOpeningStatus ?
                          (today.getTime() >= sundayStart.getTime() && today.getTime() <= sundayEnd.getTime()) ?
                            <div className="timing">
                              <p style={{ color: "#58C829" }}>Open</p>
                              <span />
                              <p>Closes {productInfo.sundayClosingTime <= 0 ? <>00:00</> : secondsToHms(productInfo.sundayClosingTime)}</p>
                            </div>
                            :
                            <div className="timing">
                              <p style={{ color: "#FF2F2D" }}>Closed</p>
                              <span />
                              <p>Opens {productInfo.sundayOpeningTime <= 0 ? <>00:00</> : secondsToHms(productInfo.sundayOpeningTime)}</p>
                            </div>
                          : <div className="timing">
                            <p style={{ color: "#FF2F2D" }}>Closed</p>
                          </div>
                        )
                      }

                      <div className="TimeDropDown">
                        <button onClick={() => seeMoreCat()}>
                          {this.state.seeMore ? <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="#000" d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg>
                            : <svg xmlns="https://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="#000" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                          } </button>
                      </div>

                    </div>

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
                          <p className={todayDay === "Monday" ? "activeDay" : ""}>{productInfo.mondayOpeningStatus ? <><span>{secondsToHms(productInfo.mondayOpeningTime)}</span> - <span>{secondsToHms(productInfo.mondayClosingTime)}</span></> : <span>Closed</span>}</p>
                          <p className={todayDay === "Tuesday" ? "activeDay" : ""}>{productInfo.tuesdayOpeningStatus ? <><span>{secondsToHms(productInfo.tuesdayOpeningTime)}</span> - <span>{secondsToHms(productInfo.tuesdayClosingTime)}</span> </> : <span>Closed</span>}</p>
                          <p className={todayDay === "Wednesday" ? "activeDay" : ""}>{productInfo.wednesdayOpeningStatus ? <><span>{secondsToHms(productInfo.wednesdayOpeningTime)}</span> - <span>{secondsToHms(productInfo.wednesdayClosingTime)}</span> </> : <span>Closed</span>}</p>
                          <p className={todayDay === "Thursday" ? "activeDay" : ""}>{productInfo.thursdayOpeningStatus ? <><span>{secondsToHms(productInfo.thursdayOpeningTime)}</span> - <span>{secondsToHms(productInfo.thursdayClosingTime)}</span> </> : <span>Closed</span>}</p>
                          <p className={todayDay === "Friday" ? "activeDay" : ""}>{productInfo.fridayOpeningStatus ? <><span>{secondsToHms(productInfo.fridayOpeningTime)}</span> - <span>{secondsToHms(productInfo.fridayClosingTime)}</span> </> : <span>Closed</span>}</p>
                          <p className={todayDay === "Saturday" ? "activeDay" : ""}>{productInfo.saturdayOpeningStatus ? <><span>{secondsToHms(productInfo.saturdayOpeningTime)}</span> - <span>{secondsToHms(productInfo.saturdayClosingTime)}</span> </> : <span>Closed</span>}</p>
                          <p className={todayDay === "Sunday" ? "activeDay" : ""}>{productInfo.sundayOpeningStatus ? <><span>{secondsToHms(productInfo.sundayOpeningTime)}</span> - <span>{secondsToHms(productInfo.sundayClosingTime)}</span> </> : <span>Closed</span>}</p>

                        </div>
                      </div>

                    }
                  </div>
                  : <>
                    {productInfo && productInfo.address && (productInfo.address.streetAddress || productInfo.address.city || productInfo.address.streetAddress2 || productInfo.address.country.country) &&
                      <div className="shop-at">
                        <div className="shop-address m-0">
                          <ReactSVG path={location} />
                          <p><CopyToClipboard onCopy={() => toast.success("Address Copied", {
                            position: toast.POSITION.TOP_RIGHT,
                          })} text={productInfo.address && productInfo.address.streetAddress + " , " + productInfo.address.streetAddress2 + " , " + productInfo.address.city + " , " + productInfo.address.country.country}><span>{productInfo.address && productInfo.address.streetAddress + " , " + productInfo.address.streetAddress2 + " , " + productInfo.address.city + " , " + productInfo.address.country.country}</span></CopyToClipboard></p>
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
            {productInfo && productInfo.business.productCategoryBusiness.edges.length !== 0 &&
              <div className="container">
                <div className="product-page__product__description">
                  <NewProductDescription
                    categoryName={productInfo.name}
                    storeCategory={productInfo.business.productCategoryBusiness}
                  />
                </div>
              </div>
            }
          </div>
          <ToastContainer />
        </>
      )
      }
    </OverlayContext.Consumer>
  }
}

export default Page;
