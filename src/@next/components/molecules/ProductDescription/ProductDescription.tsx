import React from "react";
// import { Link } from "react-router-dom";

import { RichTextContent } from "@components/atoms";
import { TaxedMoney } from "@components/containers";

import ImageGallery from 'react-image-gallery';

import { Modal } from "@components/organisms/Modal";

import noPhotoImg from "../../../../images/no-photo.svg";

import * as S from "./styles";
import { IProps } from "./types";

// import { generateProductUrl } from "../../../../core/utils";

export const ProductDescription: React.FC<IProps> = ({
  storeCategory,
}: IProps) => {

  const [activeTab, setActiveTab] = React.useState(storeCategory.edges.length > 0 ? storeCategory.edges[0].node.name : []);
  const [product, setProduct] = React.useState(storeCategory.edges.length > 0 ? storeCategory.edges[0].node.products : []);
  const [displayNewModal, setDisplayNewModal] = React.useState(false);
  const [price, setPrice] = React.useState<any>();
  const [show, setShow] = React.useState(true);
  const [imagesArray, setImagesArray] = React.useState([]);
  // const [productId, setProductID] = React.useState("");
  const [productName, setProductName] = React.useState("");
  const [productDescription, setProductDescription] = React.useState("");
  const setTabProduct = (categoryName: any, products: any) => {
    setActiveTab(categoryName)
    setProduct(products)

  }
  const onModalClicked = (item: any) => {
    const tempArray: any = [];
    item.node.images.map((image: any) => tempArray.push({ original: image.url }));
    setImagesArray(tempArray)
    // setProductID(item.node.id)
    setProductName(item.node.name)
    setProductDescription(item.node.descriptionJson)
    setPrice(item.node.pricing &&
      item.node.pricing.priceRange &&
      item.node.pricing.priceRange.start
      ? item.node.pricing.priceRange.start
      : undefined)
    if (displayNewModal) {
      setDisplayNewModal(false)
      setShow(false)
    }
    else {
      setDisplayNewModal(true)
      setShow(true)
    }
  };
  
  return (
    <>
    <S.Wrapper>
      <S.Tabs>
        <S.Sectitle>{storeCategory.edges.length > 0 ? "Products" : ""}</S.Sectitle>
        <S.TabList>
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
      </S.Tabs>

      <div className="cat">
        <h3>{activeTab}</h3>
        <div className="cat-list">
          {product.edges && product.edges.map((item: any) =>
            <div className="item" onClick={()=>onModalClicked(item)}>
              <div className="desc">
                <h4>{item.node.name}</h4>
                <p className="descr"><RichTextContent descriptionJson={item && item.node.descriptionJson} /></p>
                <p className="price"><TaxedMoney taxedMoney={item && item.node.pricing && item.node.pricing.priceRange && item.node.pricing.priceRange.start ? item.node.pricing.priceRange.start: undefined} /></p>
                {/* <p className="price">${item && item.node.pricing.priceRange.start.gross.amount}</p> */}
              </div>
              <div className="catimg">
                {item.node.images.length !== 0 ? <img src={item.node.images && item.node.images[0] && item.node.images[0].url} />
                : <img src={noPhotoImg} />}
              </div>
            </div>
          )}
        </div>
      </div>

    </S.Wrapper>
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
          <S.Top>
            <S.ModalImage>
            {imagesArray.length > 0 ?
            <ImageGallery items={imagesArray} showFullscreenButton={false} showThumbnails={false} showBullets={false} showPlayButton={false} showNav={true} />
            : <img src={noPhotoImg} className="noImg" />}
            </S.ModalImage>
            <S.Content>
              <S.ModalLink>
                {/* <Link to={generateProductUrl(productId, productName)} key={productId}>See Shop</Link> */}
              </S.ModalLink>
              <S.Title>{productName}</S.Title>
              <S.Desc><RichTextContent descriptionJson={productDescription} /></S.Desc>
              <S.Price>
                <TaxedMoney taxedMoney={price} />
              </S.Price>
            </S.Content>
          </S.Top>
        </Modal>
      )
    }
    </>
  );
};
