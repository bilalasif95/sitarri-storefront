import * as React from "react";
// import ImageGallery from 'react-image-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import ReactSVG from "react-svg";
// import { Link } from "react-router-dom";

import { CachedImage, Thumbnail } from "@components/molecules";
// import { Modal } from "@components/organisms/Modal";

import {
  OverlayContext,
  OverlayTheme,
  OverlayType,
} from "../../components";

import backIcon from "../../images/back.svg";
import Search from "../../images/search.svg";

class Page extends React.PureComponent<
  {
    product: any;
    loading: boolean;
  },
  { displayNewModal: boolean, show: boolean, tempArray: any, photoIndex: number }
  > {

  constructor(props) {
    super(props);
    this.state = {
      displayNewModal: false,
      photoIndex: 0,
      show: true,
      tempArray: [],
    };
  }

  get showCarousel() {
    return this.props.product.images.length > 0;
  }

  getImages = () => {
    const { product } = this.props;
    return product && product.images;
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
    return <CachedImage />;
  };
  onModalClicked = (index) => {
    this.setState({photoIndex: 0})
    const image = this.props.product.images[index]
    const filteredImages = this.props.product.images.filter(img => {
      return img.id !== image.id ? img : ""
    })
    filteredImages.unshift(image)
    const tempArray2 = []
    filteredImages.map(img => tempArray2.push(img.url))
    this.setState({
      tempArray: tempArray2,
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
  openTab = (url) => {
    window.open(url);
  }
  render() {
    const { product } = this.props;
    const productInfo = product;

    return <OverlayContext.Consumer>
      {overlayContext => (
        <>
          <div className="photoGallery">
            <div className="container">
              <div className="header">
                <div className="Galleryheader">
                  <div className="galleryBackIcon"><ReactSVG path={backIcon} onClick={() => { window.history.go(-1); return false; }} /></div>
                  <h3>{productInfo.name}</h3>
                  <div className="SkeletonHeader">
                    <div className="SkeletonbackIcon"><ReactSVG path={backIcon} onClick={() => { window.history.go(-1); return false; }} /></div>
                    <div className="SkeletonbackIcon" onClick={() =>
                      overlayContext.show(OverlayType.search, OverlayTheme.right)
                    }><ReactSVG path={Search} /></div>
                  </div>
                </div>
              </div>
              {this.props.loading ?
                <h3 className="GallerySkeleton">
                  <div className="container">
                    <div className="Loadingskeleton">
                      <div className="Selectboxes">
                        <div className="Skeletoncards">
                          <div className="SkeletonCardsCont">
                            <div className="SkeletonCardsbody">
                            </div>
                          </div>
                          <div className="SkeletonCardsCont">
                            <div className="SkeletonCardsbody">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="Selectboxes">
                        <div className="Skeletoncards">
                          <div className="SkeletonCardsCont">
                            <div className="SkeletonCardsbody">
                            </div>
                          </div>
                          <div className="SkeletonCardsCont">
                            <div className="SkeletonCardsbody">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="Selectboxes">
                        <div className="Skeletoncards">
                          <div className="SkeletonCardsCont">
                            <div className="SkeletonCardsbody">
                            </div>
                          </div>
                          <div className="SkeletonCardsCont">
                            <div className="SkeletonCardsbody">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="Selectboxes">
                        <div className="Skeletoncards">
                          <div className="SkeletonCardsCont">
                            <div className="SkeletonCardsbody">
                            </div>
                          </div>
                          <div className="SkeletonCardsCont">
                            <div className="SkeletonCardsbody">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="Selectboxes">
                        <div className="Skeletoncards">
                          <div className="SkeletonCardsCont">
                            <div className="SkeletonCardsbody">
                            </div>
                          </div>
                          <div className="SkeletonCardsCont">
                            <div className="SkeletonCardsbody">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </h3>
                :
                <div className="row">
                  <div className="column">
                    {productInfo && productInfo.images.length > 0 && productInfo.images.map((image, index) =>
                      <img onClick={() => this.onModalClicked(index)} src={image.url} />
                    )}
                  </div>
                  {/* <div className="column">

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

                </div> */}

                </div>}

            </div>
            {
              this.state.displayNewModal && (
                <div className="GalleryModal">
                  <Lightbox
                    mainSrc={this.state.tempArray[this.state.photoIndex]}
                    nextSrc={this.state.tempArray[(this.state.photoIndex + 1) % this.state.tempArray.length]}
                    prevSrc={this.state.tempArray[(this.state.photoIndex + this.state.tempArray.length - 1) % this.state.tempArray.length]}
                    onCloseRequest={() => this.setState({ displayNewModal: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex: (this.state.photoIndex + this.state.tempArray.length - 1) % this.state.tempArray.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (this.state.photoIndex + 1) % this.state.tempArray.length,
                      })
                    }
                  />
                  {/* <Modal
                  title=""
                  hide={() => {
                    this.setState({
                      displayNewModal: false,
                      show: false,
                    })
                  }}
                  formId="product-form"
                  disabled={false}
                  show={this.state.show}
                  submitBtnText=""
                >
                  <div>
                    {this.state.tempArray.length > 0 &&
                      <ImageGallery items={this.state.tempArray} showFullscreenButton={false} showThumbnails={false} showBullets={true} showPlayButton={false} showNav={false} />
                    } */}
                  {/* <img src={tileimg} /> */}
                  {/* {product.logo ? <img width="100%" src={product.logo} />
                : <img src={noPhotoImg} />} */}
                  {/* </div>
                </Modal> */}
                </div>
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
