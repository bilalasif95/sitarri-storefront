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
// import clock from "../../images/iconmonstr-time-2.svg";
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
    const today = new Date();
    const start = new Date();
    const end = new Date();
    if (productInfo && productInfo.store) {
      const [openTime, openFormat] = productInfo.store.openingHours.split(" ")
      const openHoursMinutes = openTime.split(":")
      const openHours = openFormat === "PM" && Number(openHoursMinutes[0]) < 12 ? Number(openHoursMinutes[0]) + 12 : Number(openHoursMinutes[0])
      const openMinutes = Number(openHoursMinutes[1])

      const [closingTime, closingFormat] = productInfo.store.closingHours.split(" ")
      const closingHoursMinutes = closingTime.split(":")
      const closingHours = closingFormat === "PM" && Number(closingHoursMinutes[0]) < 12 ? Number(closingHoursMinutes[0]) + 12 : Number(closingHoursMinutes[0])
      const closingMinutes = Number(closingHoursMinutes[1])
      start.setHours(openHours);
      start.setMinutes(openMinutes);
      end.setHours(closingHours);
      end.setMinutes(closingMinutes);
    }

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
                        {productInfo.description === "" ? <div className="EmptySpace"></div> :
                          // <RichTextContent descriptionJson={productInfo.descriptionJson} />
                          <div>{productInfo.description}</div>
                        }
                      </p>
                      <p className="price"><span><TaxedMoney taxedMoney={productInfo.pricing && productInfo.pricing.priceRange && productInfo.pricing.priceRange.start ? productInfo.pricing.priceRange.start : undefined} /></span>
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="container">
              {productInfo.store && <Link to={generateShopUrl(productInfo.store.id, productInfo.store.name)} key={productInfo.store.id}>
                <div className="Bottom">
                  <div className="Right">
                    <div className="Imgbox">
                      {productInfo.store && productInfo.store.logo ? <img src={productInfo.store.logo} />
                        :
                        <img src={noPhotoImg} />
                      }
                    </div>
                  </div>

                  <div className="Left">
                    <div className="CardTitle">
                      <div className="StoreTitle">
                        {productInfo.store && productInfo.store.name}
                      </div>
                      <div className="CardDetails">
                        <div className="Nos">
                          {productInfo.store && productInfo.store.rating}
                          {productInfo.store && productInfo.store.rating === 0 ?
                            <div className="Star" ><svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" /></svg></div>
                            : <div className="Star"><svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg></div>}
                          <div className="TotalReviews">

                            ({productInfo.store && productInfo.store.totalReviews})
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className="CardTime">
                      {productInfo.store && productInfo.store.openingHours !== "" && productInfo.store.closingHours !== "" &&
                        <>
                          {(today.getTime() >= start.getTime() && today.getTime() <= end.getTime()) ?
                            <div className="Timing">
                              <div className="Open" style={{ color: "#58C829" }}>Open </div>
                              <div className="Close">
                                <span />
                          Closes&nbsp;
                          {productInfo.store && productInfo.store.closingHours}
                              </div>
                            </div>
                            :
                            <div className="Timing">
                              <div className="Open" style={{ color: "red" }}>Closed </div>
                              <div className="Close">
                                <span />
                          Opens
                          {productInfo.store && productInfo.store.openingHours}
                              </div>
                            </div>
                          }
                        </>}

                      {productInfo.store && productInfo.store.distance &&
                        <div className="Location">
                          <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                          <div className="Miles">
                            {productInfo.store.distance}
                          </div>
                        </div>
                      }

                    </div>
                  </div>
                </div>
              </Link>}
            </div>
            {/* Bottom */}

            {productInfo && productInfo.store && productInfo.store.storeCategory.edges.length !== 0 &&
              <div className="container">
                <div className="product-page__product__description">
                  <NewProductDescription
                    categoryName={productInfo.name}
                    storeCategory={productInfo.store.storeCategory}
                  />
                </div>
              </div>
            }

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
