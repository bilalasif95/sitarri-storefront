// import { smallScreen } from "../../globalStyles/scss/variables.scss";

import classNames from "classnames";
import * as React from "react";
// import ImageGallery from 'react-image-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";
// import Media from "react-media";

// import { RichTextContent } from "@components/atoms";
import { TaxedMoney } from "@components/containers";
import { CachedImage, Thumbnail } from "@components/molecules";
// import { Modal } from "@components/organisms/Modal";

// import { Breadcrumbs, ProductDescription } from "../../components";
// import { ProductDescription } from "../../components";
// import { generateCategoryUrl, generateProductUrl } from "../../core/utils";
// import GalleryCarousel from "./GalleryCarousel";
// import { ProductDetails_product } from "./gqlTypes/ProductDetails";
// import OtherProducts from "./Other";

import { ICheckoutModelLine } from "@sdk/repository";
import { ProductDescription as NewProductDescription } from "../../@next/components/molecules";
import ModalIcon from "../../images/favicon.svg";
import noPhotoImg from "../../images/no-photo.svg";
// import { ProductGallery } from "../../@next/components/organisms/";

import { generateShopUrl } from "../../core/utils";

// import { structuredData } from "../../core/SEO/Product/structuredData";
import {
  // MenuDropdown,
  // Offline,
  // Online,
  Carousel,
  OverlayContext,
  OverlayTheme,
  OverlayType,
} from "../../components";

import backIcon from "../../images/back.svg";
import Search from "../../images/search.svg";

class Page extends React.PureComponent<
  {
    product: any;
    add: (variantId: string, quantity: number) => any;
    items: ICheckoutModelLine[];
  },
  { displayNewModal: boolean, photoIndex: number, show: boolean, modalImagesArray: any, variantId: string }
  > {
  fixedElement: React.RefObject<HTMLDivElement> = React.createRef();
  productGallery: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      displayNewModal: false,
      modalImagesArray: [],
      photoIndex: 0,
      show: true,
      variantId: "",
    };
  }

  setVariantId = (id: string) => {
    this.setState({ variantId: id });
  };

  get showCarousel() {
    return this.props.product.product.images.length > 0;
  }

  // populateBreadcrumbs = product => [
  //   {
  //     link: generateCategoryUrl(product.category.id, product.category.name),
  //     value: product.category.name,
  //   },
  //   {
  //     link: generateProductUrl(product.id, product.name),
  //     value: product.name,
  //   },
  // ];

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

    return product.product.images && product.product.images;
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
  };

  onModalClicked = () => {
    this.setState({ photoIndex: 0 })
    // const image = this.props.product.images[index]
    // const filteredImages = this.props.product.images.filter(img => {
    //   return img.id !== image.id ? img : ""
    // })
    // filteredImages.unshift(image)
    // const tempArray2 = []
    // filteredImages.map(img => tempArray2.push({ original: img.url }))
    // this.setState({
    //   tempArray: tempArray2,
    // })
    const tempArray2: any = []
    this.props.product.product.images.map(img => tempArray2.push(img.url))
    this.setState({
      modalImagesArray: tempArray2,
    })
    if (this.state.displayNewModal) {
      this.setState({
        displayNewModal: false,
        show: false,
      })
    }
    else {
      this.setState({
        displayNewModal: true,
        show: true,
      })
    }
  };
  render() {
    const { product } = this.props;
    const productInfo = product.product;

    // const productDescription = (
    //   <ProductDescription
    //     items={productInfo}
    //   />
    // );
    const tempArray: any = [];
    productInfo.images.map((image: any) => tempArray.push({ original: image.url }));

    return <OverlayContext.Consumer>
      {overlayContext => (
        <>
          <div className="product-Page">
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
                <div className="DesktopBackIcon">
                  <div className="SkeletonbackIcon" onClick={() => { window.history.go(-1); return false; }}><ReactSVG path={backIcon} onClick={() => { window.history.go(-1); return false; }} /></div>
                </div>
                {productInfo && productInfo.images.length > 0 ?
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
                      <img onClick={() => this.onModalClicked()} src={img.original} />
                    ))}
                  </Carousel>
                  // <ImageGallery onClick={() => this.onModalClicked()} items={tempArray} showFullscreenButton={false} showThumbnails={false} showBullets={true} showPlayButton={false} showNav={false} />
                  // <GalleryCarousel images={this.getImages()} />
                  // {productInfo.logo && productInfo.logo ? <GalleryCarousel images={this.getImages()} />
                  : <div className="noPicText"></div>}

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
                      <h4>{productInfo.name}</h4>
                      <p className="descr">
                        {/* {productInfo.description === "" ? <div className="EmptySpace"></div> : */}
                        {/* <RichTextContent descriptionJson={productInfo.descriptionJson} /> */}
                        <div>{productInfo.description}</div>
                        {/* } */}
                      </p>
                      <p className="price"><span><TaxedMoney taxedMoney={productInfo.pricing && productInfo.pricing.priceRange && productInfo.pricing.priceRange.start ? productInfo.pricing.priceRange.start : undefined} /></span>
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}

            {productInfo.storess && productInfo.storess.edges.slice(0, 1).map(({ node: store }) => {
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

              const mondayOpeningTime = secondsToHms(store.mondayOpeningTime);
              const [mondayOpenTime] = mondayOpeningTime.split(" ")
              const mondayOpenHoursMinutes = mondayOpenTime.split(":")
              const mondayOpenHours = Number(mondayOpenHoursMinutes[0])
              const mondayOpenMinutes = Number(mondayOpenHoursMinutes[1])

              const mondayClosingTime = secondsToHms(store.mondayClosingTime);
              const [mondayCloseTime] = mondayClosingTime.split(" ")
              const mondayClosingHoursMinutes = mondayCloseTime.split(":")
              const mondayClosingHours = Number(mondayClosingHoursMinutes[0])
              const mondayClosingMinutes = Number(mondayClosingHoursMinutes[1])
              mondayStart.setHours(mondayOpenHours);
              mondayStart.setMinutes(mondayOpenMinutes);
              mondayEnd.setHours(mondayClosingHours);
              mondayEnd.setMinutes(mondayClosingMinutes);


              const tuesdayOpeningTime = secondsToHms(store.tuesdayOpeningTime);
              const [tuesdayOpenTime] = tuesdayOpeningTime.split(" ")
              const tuesdayOpenHoursMinutes = tuesdayOpenTime.split(":")
              const tuesdayOpenHours = Number(tuesdayOpenHoursMinutes[0])
              const tuesdayOpenMinutes = Number(tuesdayOpenHoursMinutes[1])

              const tuesdayClosingTime = secondsToHms(store.tuesdayClosingTime);
              const [tuesdayCloseTime] = tuesdayClosingTime.split(" ")
              const tuesdayClosingHoursMinutes = tuesdayCloseTime.split(":")
              const tuesdayClosingHours = Number(tuesdayClosingHoursMinutes[0])
              const tuesdayClosingMinutes = Number(tuesdayClosingHoursMinutes[1])
              tuesdayStart.setHours(tuesdayOpenHours);
              tuesdayStart.setMinutes(tuesdayOpenMinutes);
              tuesdayEnd.setHours(tuesdayClosingHours);
              tuesdayEnd.setMinutes(tuesdayClosingMinutes);


              const wednesdayOpeningTime = secondsToHms(store.wednesdayOpeningTime);
              const [wednesdayOpenTime] = wednesdayOpeningTime.split(" ")
              const wednesdayOpenHoursMinutes = wednesdayOpenTime.split(":")
              const wednesdayOpenHours = Number(wednesdayOpenHoursMinutes[0])
              const wednesdayOpenMinutes = Number(wednesdayOpenHoursMinutes[1])

              const wednesdayClosingTime = secondsToHms(store.wednesdayClosingTime);
              const [wednesdayCloseTime] = wednesdayClosingTime.split(" ")
              const wednesdayClosingHoursMinutes = wednesdayCloseTime.split(":")
              const wednesdayClosingHours = Number(wednesdayClosingHoursMinutes[0])
              const wednesdayClosingMinutes = Number(wednesdayClosingHoursMinutes[1])
              wednesdayStart.setHours(wednesdayOpenHours);
              wednesdayStart.setMinutes(wednesdayOpenMinutes);
              wednesdayEnd.setHours(wednesdayClosingHours);
              wednesdayEnd.setMinutes(wednesdayClosingMinutes);


              const thursdayOpeningTime = secondsToHms(store.thursdayOpeningTime);
              const [thursdayOpenTime] = thursdayOpeningTime.split(" ")
              const thursdayOpenHoursMinutes = thursdayOpenTime.split(":")
              const thursdayOpenHours = Number(thursdayOpenHoursMinutes[0])
              const thursdayOpenMinutes = Number(thursdayOpenHoursMinutes[1])

              const thursdayClosingTime = secondsToHms(store.thursdayClosingTime);
              const [thursdayCloseTime] = thursdayClosingTime.split(" ")
              const thursdayClosingHoursMinutes = thursdayCloseTime.split(":")
              const thursdayClosingHours = Number(thursdayClosingHoursMinutes[0])
              const thursdayClosingMinutes = Number(thursdayClosingHoursMinutes[1])
              thursdayStart.setHours(thursdayOpenHours);
              thursdayStart.setMinutes(thursdayOpenMinutes);
              thursdayEnd.setHours(thursdayClosingHours);
              thursdayEnd.setMinutes(thursdayClosingMinutes);


              const fridayOpeningTime = secondsToHms(store.fridayOpeningTime);
              const [fridayOpenTime] = fridayOpeningTime.split(" ")
              const fridayOpenHoursMinutes = fridayOpenTime.split(":")
              const fridayOpenHours = Number(fridayOpenHoursMinutes[0])
              const fridayOpenMinutes = Number(fridayOpenHoursMinutes[1])

              const fridayClosingTime = secondsToHms(store.fridayClosingTime);
              const [fridayCloseTime] = fridayClosingTime.split(" ")
              const fridayClosingHoursMinutes = fridayCloseTime.split(":")
              const fridayClosingHours = Number(fridayClosingHoursMinutes[0])
              const fridayClosingMinutes = Number(fridayClosingHoursMinutes[1])
              fridayStart.setHours(fridayOpenHours);
              fridayStart.setMinutes(fridayOpenMinutes);
              fridayEnd.setHours(fridayClosingHours);
              fridayEnd.setMinutes(fridayClosingMinutes);


              const saturdayOpeningTime = secondsToHms(store.saturdayOpeningTime);
              const [saturdayOpenTime] = saturdayOpeningTime.split(" ")
              const saturdayOpenHoursMinutes = saturdayOpenTime.split(":")
              const saturdayOpenHours = Number(saturdayOpenHoursMinutes[0])
              const saturdayOpenMinutes = Number(saturdayOpenHoursMinutes[1])

              const saturdayClosingTime = secondsToHms(store.saturdayClosingTime);
              const [saturdayCloseTime] = saturdayClosingTime.split(" ")
              const saturdayClosingHoursMinutes = saturdayCloseTime.split(":")
              const saturdayClosingHours = Number(saturdayClosingHoursMinutes[0])
              const saturdayClosingMinutes = Number(saturdayClosingHoursMinutes[1])
              saturdayStart.setHours(saturdayOpenHours);
              saturdayStart.setMinutes(saturdayOpenMinutes);
              saturdayEnd.setHours(saturdayClosingHours);
              saturdayEnd.setMinutes(saturdayClosingMinutes);


              const sundayOpeningTime = secondsToHms(store.sundayOpeningTime);
              const [sundayOpenTime] = sundayOpeningTime.split(" ")
              const sundayOpenHoursMinutes = sundayOpenTime.split(":")
              const sundayOpenHours = Number(sundayOpenHoursMinutes[0])
              const sundayOpenMinutes = Number(sundayOpenHoursMinutes[1])

              const sundayClosingTime = secondsToHms(store.sundayClosingTime);
              const [sundayCloseTime] = sundayClosingTime.split(" ")
              const sundayClosingHoursMinutes = sundayCloseTime.split(":")
              const sundayClosingHours = Number(sundayClosingHoursMinutes[0])
              const sundayClosingMinutes = Number(sundayClosingHoursMinutes[1])
              sundayStart.setHours(sundayOpenHours);
              sundayStart.setMinutes(sundayOpenMinutes);
              sundayEnd.setHours(sundayClosingHours);
              sundayEnd.setMinutes(sundayClosingMinutes);

              function secondsToHms(d: any) {
                d = Number(d);
                const h = Math.floor(d / 3600);
                const m = Math.floor(d % 3600 / 60);
                const s = Math.floor(d % 3600 % 60);

                const hDisplay = h > 0 ? h + (h === 1 ? ":" : ":") : "";
                const mDisplay = m > 0 ? m < 10 ? "0" + m + ":" : m + ":" : "00:";
                const sDisplay = s > 0 ? s < 10 ? "0" + s : s : "00";
                return hDisplay + mDisplay + sDisplay;
              }

              return (
                <>
                  <div className="container">
                    <Link to={generateShopUrl(store.id, store.name)} key={store.id}>
                      <div className="Bottom">
                        <div className="Right">
                          <div className="Imgbox">
                            {store.business.logo ? <img src={store.business.logo} />
                              :
                              <img src={noPhotoImg} />
                            }
                          </div>
                        </div>

                        <div className="Left">
                          <div className="CardTitle">
                            <div className="StoreTitle">
                              {store.name}
                            </div>
                            <div className="CardDetails">
                              <div className="Nos">
                                {store.rating}
                                {store.rating === 0 ?
                                  <div className="Star" ><svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" /></svg></div>
                                  : <div className="Star"><svg xmlns="https://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg></div>}
                                <div className="TotalReviews">

                                  ({store.totalReviews})
                          </div>
                              </div>
                            </div>
                          </div>


                          <div className="CardTime">
                            {todayDay === "Monday" && (
                              store.mondayOpeningStatus ?
                                (today.getTime() >= mondayStart.getTime() && today.getTime() <= mondayEnd.getTime()) ?
                                  <div className="Timing">
                                    <div className="Open" style={{ color: "#58C829" }}>Open </div>
                                    <div className="Close">
                                      <span />
                                      Closes&nbsp;{store.mondayClosingTime <= 0 ? <>00:00</> : secondsToHms(store.mondayClosingTime)}
                                    </div>
                                  </div>
                                  :
                                  <div className="Timing">
                                    <div className="Open" style={{ color: "#FF2F2D" }}>Closed </div>
                                    <div className="Close">
                                      <span />
                                      Opens&nbsp;{store.mondayOpeningTime <= 0 ? <>00:00</> : secondsToHms(store.mondayOpeningTime)}
                                    </div>
                                  </div>
                                : <div className="Timing">
                                  <div className="Open" style={{ color: "#FF2F2D" }}>Closed </div>
                                </div>
                            )
                            }
                            {todayDay === "Tuesday" && (
                              store.tuesdayOpeningStatus ?
                                (today.getTime() >= tuesdayStart.getTime() && today.getTime() <= tuesdayEnd.getTime()) ?
                                  <div className="Timing">
                                    <div className="Open" style={{ color: "#58C829" }}>Open </div>
                                    <div className="Close">
                                      <span />
                                      Closes&nbsp;{store.tuesdayClosingTime <= 0 ? <>00:00</> : secondsToHms(store.tuesdayClosingTime)}
                                    </div>
                                  </div>
                                  :
                                  <div className="Timing">
                                    <div className="Open" style={{ color: "#FF2F2D" }}>Closed </div>
                                    <div className="Close">
                                      <span />
                                      Opens&nbsp;{store.tuesdayOpeningTime <= 0 ? <>00:00</> : secondsToHms(store.tuesdayOpeningTime)}
                                    </div>
                                  </div>
                                : <div className="Timing">
                                  <div className="Open" style={{ color: "#FF2F2D" }}>Closed </div>
                                </div>
                            )
                            }
                            {todayDay === "Wednesday" && (
                              store.wednesdayOpeningStatus ?
                                (today.getTime() >= wednesdayStart.getTime() && today.getTime() <= wednesdayEnd.getTime()) ?
                                  <div className="Timing">
                                    <div className="Open" style={{ color: "#58C829" }}>Open </div>
                                    <div className="Close">
                                      <span />
                                      Closes&nbsp;{store.wednesdayClosingTime <= 0 ? <>00:00</> : secondsToHms(store.wednesdayClosingTime)}
                                    </div>
                                  </div>
                                  :
                                  <div className="Timing">
                                    <div className="Open" style={{ color: "#FF2F2D" }}>Closed </div>
                                    <div className="Close">
                                      <span />
                                      Opens&nbsp;{store.wednesdayOpeningTime <= 0 ? <>00:00</> : secondsToHms(store.wednesdayOpeningTime)}
                                    </div>
                                  </div>
                                : <div className="Timing">
                                  <div className="Open" style={{ color: "#FF2F2D" }}>Closed </div>
                                </div>
                            )
                            }
                            {todayDay === "Thursday" && (
                              store.thursdayOpeningStatus ?
                                (today.getTime() >= thursdayStart.getTime() && today.getTime() <= thursdayEnd.getTime()) ?
                                  <div className="Timing">
                                    <div className="Open" style={{ color: "#58C829" }}>Open </div>
                                    <div className="Close">
                                      <span />
                                      Closes&nbsp;{store.thursdayClosingTime <= 0 ? <>00:00</> : secondsToHms(store.thursdayClosingTime)}
                                    </div>
                                  </div>
                                  :
                                  <div className="Timing">
                                    <div className="Open" style={{ color: "#FF2F2D" }}>Closed </div>
                                    <div className="Close">
                                      <span />
                                      Opens&nbsp;{store.thursdayOpeningTime <= 0 ? <>00:00</> : secondsToHms(store.thursdayOpeningTime)}
                                    </div>
                                  </div>
                                : <div className="Timing">
                                  <div className="Open" style={{ color: "#FF2F2D" }}>Closed </div>
                                </div>
                            )
                            }
                            {todayDay === "Friday" && (
                              store.fridayOpeningStatus ?
                                (today.getTime() >= fridayStart.getTime() && today.getTime() <= fridayEnd.getTime()) ?
                                  <div className="Timing">
                                    <div className="Open" style={{ color: "#58C829" }}>Open </div>
                                    <div className="Close">
                                      <span />
                                      Closes&nbsp;{store.fridayClosingTime <= 0 ? <>00:00</> : secondsToHms(store.fridayClosingTime)}
                                    </div>
                                  </div>
                                  :
                                  <div className="Timing">
                                    <div className="Open" style={{ color: "#FF2F2D" }}>Closed </div>
                                    <div className="Close">
                                      <span />
                                      Opens&nbsp;{store.fridayOpeningTime <= 0 ? <>00:00</> : secondsToHms(store.fridayOpeningTime)}
                                    </div>
                                  </div>
                                : <div className="Timing">
                                  <div className="Open" style={{ color: "#FF2F2D" }}>Closed </div>
                                </div>
                            )
                            }
                            {todayDay === "Saturday" && (
                              store.saturdayOpeningStatus ?
                                (today.getTime() >= saturdayStart.getTime() && today.getTime() <= saturdayEnd.getTime()) ?
                                  <div className="Timing">
                                    <div className="Open" style={{ color: "#58C829" }}>Open </div>
                                    <div className="Close">
                                      <span />
                                      Closes&nbsp;{store.saturdayClosingTime <= 0 ? <>00:00</> : secondsToHms(store.saturdayClosingTime)}
                                    </div>
                                  </div>
                                  :
                                  <div className="Timing">
                                    <div className="Open" style={{ color: "#FF2F2D" }}>Closed </div>
                                    <div className="Close">
                                      <span />
                                      Opens&nbsp;{store.saturdayOpeningTime <= 0 ? <>00:00</> : secondsToHms(store.saturdayOpeningTime)}
                                    </div>
                                  </div>
                                : <div className="Timing">
                                  <div className="Open" style={{ color: "#FF2F2D" }}>Closed </div>
                                </div>
                            )
                            }
                            {todayDay === "Sunday" && (
                              store.sundayOpeningStatus ?
                                (today.getTime() >= sundayStart.getTime() && today.getTime() <= sundayEnd.getTime()) ?
                                  <div className="Timing">
                                    <div className="Open" style={{ color: "#58C829" }}>Open </div>
                                    <div className="Close">
                                      <span />
                                      Closes&nbsp;{store.sundayClosingTime <= 0 ? <>00:00</> : secondsToHms(store.sundayClosingTime)}
                                    </div>
                                  </div>
                                  :
                                  <div className="Timing">
                                    <div className="Open" style={{ color: "#FF2F2D" }}>Closed </div>
                                    <div className="Close">
                                      <span />
                                      Opens&nbsp;{store.sundayOpeningTime <= 0 ? <>00:00</> : secondsToHms(store.sundayOpeningTime)}
                                    </div>
                                  </div>
                                : <div className="Timing">
                                  <div className="Open" style={{ color: "#FF2F2D" }}>Closed </div>
                                </div>
                            )
                            }


                            {store.distance &&
                              <div className="Location">
                                <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                                <div className="Miles">
                                  {store.distance}
                                </div>
                              </div>
                            }

                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  {
                    store.business.productCategoryBusiness.edges.length !== 0 &&
                    <div className="container">
                      <div className="product-page__product__description">
                        <NewProductDescription
                          categoryName={productInfo.name}
                          storeCategory={store.business.productCategoryBusiness}
                        />
                      </div>
                    </div>
                  }
                </>
              )
            })}
            {/* Bottom */}

            {
              this.state.displayNewModal && (
                <div className="GalleryModal">

                  <div className="ModalContent">
                    <p>TAQUERIA delivery from Notting Hill - Order with Deliveroo</p>
                    <ul className="modalList">
                      <li><span className="ModalImg"><img src={ModalIcon} /></span> <a className="modalLink" target="_blank" href="https://deliveroo.co.uk/">Deliveroo.co.uk/taqueria</a></li>
                    </ul>
                  </div>
                  <Lightbox
                    mainSrc={this.state.modalImagesArray[this.state.photoIndex]}
                    nextSrc={this.state.modalImagesArray[(this.state.photoIndex + 1) % this.state.modalImagesArray.length]}
                    prevSrc={this.state.modalImagesArray[(this.state.photoIndex + this.state.modalImagesArray.length - 1) % this.state.modalImagesArray.length]}
                    onCloseRequest={() => this.setState({ displayNewModal: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex: (this.state.photoIndex + this.state.modalImagesArray.length - 1) % this.state.modalImagesArray.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (this.state.photoIndex + 1) % this.state.modalImagesArray.length,
                      })
                    }
                  />
                </div>
                // <Modal
                //   title=""
                //   hide={() => {
                //     this.setState({
                //       displayNewModal: false,
                //       show: false,
                //     })
                //   }}
                //   formId="product-form"
                //   disabled={false}
                //   show={this.state.show}
                //   submitBtnText=""

                // >
                //   <div>

                //     {tempArray.length > 0 &&
                //       <ImageGallery items={tempArray} showFullscreenButton={false} showThumbnails={false} showBullets={true} showPlayButton={false} showNav={false} />
                //     }
                //     {/* <img src={tileimg} /> */}
                //     {/* {product.logo ? <img width="100%" src={product.logo} />
                // : <img src={noPhotoImg} />} */}
                //   {/* </div>
                // </Modal> */}

              )
            }
          </div>
        </>
      )
      }
    </OverlayContext.Consumer>
  }
}

export default Page;
