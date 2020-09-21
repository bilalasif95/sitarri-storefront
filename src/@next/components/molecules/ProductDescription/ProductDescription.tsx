import React from "react";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

import { RichTextContent } from "@components/atoms";
import { TaxedMoney } from "@components/containers";

// import ImageGallery from 'react-image-gallery';

// import { Modal } from "@components/organisms/Modal";

import backIcon from "../../../../images/back.svg";
import noPhotoImg from "../../../../images/no-photo.svg";
import Search from "../../../../images/search.svg";

import * as S from "./styles";
import { IProps } from "./types";

import {
  // MenuDropdown,
  // Offline,
  // Online,
  OverlayContext,
  OverlayTheme,
  OverlayType,
} from "../../../../components";

import { generateProductUrl } from "../../../../core/utils";

export const ProductDescription: React.FC<IProps> = ({
  categoryName,
  storeCategory,
}: IProps) => {

  const [activeTab, setActiveTab] = React.useState(storeCategory.edges.length > 0 ? storeCategory.edges[0].node.name : []);
  const [product, setProduct] = React.useState(storeCategory.edges.length > 0 ? storeCategory.edges[0].node.products : []);
  // const [displayNewModal, setDisplayNewModal] = React.useState(false);
  // const [price, setPrice] = React.useState<any>();
  // const [show, setShow] = React.useState(true);
  // const [imagesArray, setImagesArray] = React.useState([]);
  // const [productId, setProductID] = React.useState("");
  // const [productName, setProductName] = React.useState("");
  // const [productDescription, setProductDescription] = React.useState("");
  const [seeMore, seeMoreSet] = React.useState(false)
  const setTabProduct = (categoryName: any, products: any) => {
    setActiveTab(categoryName)
    setProduct(products)

  }
  // const onModalClicked = (item: any) => {
  //   const tempArray: any = [];
  //   item.node.images.map((image: any) => tempArray.push({ original: image.url }));
  //   setImagesArray(tempArray)
  //   // setProductID(item.node.id)
  //   setProductName(item.node.name)
  //   setProductDescription(item.node.descriptionJson)
  //   setPrice(item.node.pricing &&
  //     item.node.pricing.priceRange &&
  //     item.node.pricing.priceRange.start
  //     ? item.node.pricing.priceRange.start
  //     : undefined)
  //   if (displayNewModal) {
  //     setDisplayNewModal(false)
  //     setShow(false)
  //   }
  //   else {
  //     setDisplayNewModal(true)
  //     setShow(true)
  //   }
  // };


  const seeMoreCat = () => {
    seeMoreSet(!seeMore)
    // background: ${props => props.active ? '#f34928' : 'none'};
    // color: ${props => props.active ? props.theme.colors.tabTitle:"#f34928"};
  }

  const [isSticky, setSticky] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return <OverlayContext.Consumer>

    {overlayContext => (
      <>
        <S.Wrapper>

          <S.fixed isSticky={isSticky} ref={ref}>
            {isSticky && <div>
              <div className="SkeletonHeader">
                <div className="SkeletonbackIcon"><ReactSVG path={backIcon} onClick={() => { window.history.go(-1); return false; }} /></div>
                <div>{categoryName}</div>
                <div className="SkeletonbackIcon" onClick={() =>
                  overlayContext.show(OverlayType.search, OverlayTheme.right)
                }><ReactSVG path={Search} /></div>
              </div>
            </div>}
            <S.Tabs isSticky={isSticky} >

              {/* <S.Sectitle>{storeCategory.edges.length > 0 ? "Products" : ""}</S.Sectitle> */}
              <S.TabsContainer>
                <S.TabList>
                  {/* {storeCategory.edges.slice(0, seeMore ? 100 : window.innerWidth < 576 ? 3 : 8).map((cate: any) => */}
                  {storeCategory.edges.map((cate: any) =>
                    <S.TabTitle
                      active={activeTab === cate.node.name}
                      onClick={e =>
                        setTabProduct(cate.node.name, cate.node.products)
                      }
                    >
                      {cate.node.name}
                    </S.TabTitle>
                  )}
                </S.TabList>
                {window.innerWidth > 540 ?
                storeCategory.edges.length > 11 ? 
                <button onClick={() => seeMoreCat()}>
                  More
         {seeMore ? <svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#f2492b" d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg>
                    : <svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#f2492b" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                  } </button> : "" : 
                  storeCategory.edges.length > 3 ? 
                <button onClick={() => seeMoreCat()}>
                  More
         {seeMore ? <svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#f2492b" d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg>
                    : <svg xmlns="https://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#f2492b" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                  } </button> : ""
                  }

              </S.TabsContainer>
            </S.Tabs>

          </S.fixed>

          <div className="cat">
            <h3>{activeTab}</h3>
            <div className="cat-list">
              {product.edges && product.edges.map((item: any) =>
                <Link to={generateProductUrl(item.node.id, item.node.name)} key={item.node.id}>
                  <div className="item"
                  // onClick={() => onModalClicked(item)}
                  >
                    <div className="desc">
                      <h4>{item.node.name}</h4>
                      <p className="descr">{item && item.node.descriptionJson === "{}" ? <div className="EmptySpace"></div> : <RichTextContent descriptionJson={item && item.node.descriptionJson} />}</p>
                      <p className="price"><TaxedMoney taxedMoney={item && item.node.pricing && item.node.pricing.priceRange && item.node.pricing.priceRange.start ? item.node.pricing.priceRange.start : undefined} /></p>
                      {/* <p className="price">${item && item.node.pricing.priceRange.start.gross.amount}</p> */}
                    </div>
                    <div className="catimg">
                      {item.node.images.length !== 0 ? <img src={item.node.images && item.node.images[0] && item.node.images[0].url} />
                        : <img src={noPhotoImg} />}
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>

        </S.Wrapper>

        {/* {
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
                  <S.Top>
                    <S.ModalImage>
                      {imagesArray.length > 0 ?
                        <ImageGallery items={imagesArray} showFullscreenButton={false} showThumbnails={false} showBullets={false} showPlayButton={false} showNav={true} />
                        : <img src={noPhotoImg} className="noImg" />}
                    </S.ModalImage>
                    <S.Content>
                      <S.ModalLink> */}
        {/* <Link to={generateProductUrl(productId, productName)} key={productId}>See Shop</Link> */}
        {/* </S.ModalLink>
                      <S.Title>{productName}</S.Title>
                      <S.Desc><RichTextContent descriptionJson={productDescription} /></S.Desc>
                      <S.Price>
                        <TaxedMoney taxedMoney={price} />
                      </S.Price>
                    </S.Content>
                  </S.Top>
                </Modal>
        
        )} */}
      </>
    )}

  </OverlayContext.Consumer>
};