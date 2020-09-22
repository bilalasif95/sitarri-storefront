// import { smallScreen } from "../../globalStyles/scss/variables.scss";

// import classNames from "classnames";
import * as React from "react";
import ReactSVG from "react-svg";
// import Media from "react-media";

// import { Link } from "react-router-dom";

// import ImageGallery from 'react-image-gallery';

// import { RichTextContent } from "@components/atoms";
// import { TaxedMoney } from "@components/containers";
import { CachedImage, Thumbnail } from "@components/molecules";

// import { Breadcrumbs, ProductDescription } from "../../components";
// import { ProductDescription } from "../../components";
// import { generateCategoryUrl, generateProductUrl } from "../../core/utils";
// import GalleryCarousel from "./GalleryCarousel";
// import { ProductDetails_product } from "./gqlTypes/ProductDetails";
// import OtherProducts from "./Other";

import { ICheckoutModelLine } from "@sdk/repository";
// import { ProductDescription as NewProductDescription } from "../../@next/components/molecules";
// import noPhotoImg from "../../images/no-photo.svg";
// import { ProductGallery } from "../../@next/components/organisms/";

// import { generateShopUrl } from "../../core/utils";

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
    product: any;
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
  }
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
    // const today = new Date();
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


          <div className="photoGallery">

            <div className="container">

              <div className="header">

                <div className="Galleryheader">
                  <div className="galleryBackIcon"><ReactSVG path={backIcon} onClick={() => { window.history.go(-1); return false; }} /></div>
                  <h3>Taqueria</h3>
                  <div className="SkeletonHeader">
                    <div className="SkeletonbackIcon"><ReactSVG path={backIcon} onClick={() => { window.history.go(-1); return false; }} /></div>
                    <div className="SkeletonbackIcon" onClick={() =>
                      overlayContext.show(OverlayType.search, OverlayTheme.right)
                    }><ReactSVG path={Search} /></div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="column">

                  <img src={"https://www.w3schools.com/w3images/wedding.jpg"} />
                  <img src={"https://www.w3schools.com/w3images/underwater.jpg"} />
                  <img src={"https://www.w3schools.com/w3images/rocks.jpg"} />
                  <img src={"https://www.w3schools.com/w3images/ocean.jpg"} />
                  <img src={"https://www.w3schools.com/w3images/wedding.jpg"} />
                  <img src={"https://www.w3schools.com/w3images/mountainskies.jpg"} />
                </div>

                <div className="column">
                  <img src={"https://www.w3schools.com/w3images/ocean.jpg"} />
                  <img src={"https://www.w3schools.com/w3images/wedding.jpg"} />
                  <img src={"https://www.w3schools.com/w3images/mountainskies.jpg"} />
                  <img src={"https://www.w3schools.com/w3images/wedding.jpg"} />
                  <img src={"https://www.w3schools.com/w3images/underwater.jpg"} />
                  <img src={"https://www.w3schools.com/w3images/rocks.jpg"} />

                </div>

              </div>

            </div>

          </div>
        </>
      )
      }
    </OverlayContext.Consumer>
  }
}

export default Page;
