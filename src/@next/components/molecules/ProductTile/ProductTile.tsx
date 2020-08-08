import "react-image-gallery/styles/css/image-gallery.css";

import React from "react";
import { Link } from "react-router-dom";
// import Carousel from "../../../../../src/components/Carousel";

import ImageGallery from 'react-image-gallery';

// import { Slide } from 'react-slideshow-image';
import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";

import noPhotoImg from "../../../../images/no-photo.svg";

import { Modal } from "@components/organisms/Modal";

import * as S from "./styles";
import { IProps } from "./types";
// import { Tile } from "../../atoms";

import { generateProductUrl } from "../../../../core/utils";

import Rating from 'react-rating';

export const ProductTile: React.FC<IProps> = ({ product }: { product: any }) => {
  const price =
    product.pricing &&
      product.pricing.priceRange &&
      product.pricing.priceRange.start
      ? product.pricing.priceRange.start
      : undefined;

  const [displayNewModal, setDisplayNewModal] = React.useState(false);
  const [show, setShow] = React.useState(true);
  const onModalClicked = () => {
    if (displayNewModal) {
      setDisplayNewModal(false)
      setShow(false)
    }
    else {
      setDisplayNewModal(true)
      setShow(true)
    }
  };

  const tempArray: any = [];
  product.images.map((image: any) => tempArray.push({ original: image.url }));
  return (
    <>
      <S.Wrapper data-cy="product-tile">
        <S.Top>
          <S.Image>
            {/* <img src={image.url}/> */}
            {tempArray.length > 0 ?
            <ImageGallery onClick={onModalClicked} items={tempArray} showFullscreenButton={false} showThumbnails={false} showBullets={false} showPlayButton={false} showNav={true} />
              : <img src={noPhotoImg} className="noImg" />}
            </S.Image>
          <S.Content>
            <S.Link>
              <Link to={generateProductUrl(product.store.id, product.store.name)} key={product.store.id}>See Shop</Link>
            </S.Link>
            <S.Title>{product.name}</S.Title>
            <S.Desc>{product.description}</S.Desc>
            <S.Price>
              <TaxedMoney taxedMoney={price} />
            </S.Price>
          </S.Content>
        </S.Top>
        <Link to={generateProductUrl(product.store.id, product.store.name)} key={product.store.id}>
          <S.Bottom>

            <S.Left>
              <S.Title>{product.store.name}</S.Title>
              {product.store.openingHours !== "" && product.store.closingHours !== "" &&
              <S.Timing>
                <S.Open>Open: {product.store.openingHours}</S.Open>
                <S.Close>
                  <span />
              Close: {product.store.closingHours}
                </S.Close>
              </S.Timing>}
              <S.Likes>
                <S.Nos>{product.store.rating}</S.Nos>

                <S.Stars>
                  <Rating
                    placeholderRating={product.store.rating}
                    readonly
                    emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" /></svg>
                    }
                    placeholderSymbol={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
                    }
                    fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>}
                  />
                </S.Stars>
                <S.Close>
                  ( {product.store.totalReviews})
              </S.Close>
              </S.Likes>
              {product.store.distance &&
              <S.Location>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                <S.Miles>{product.store.distance}</S.Miles>
              </S.Location>}
            </S.Left>
            <S.Right>
              <S.Imgbox>
                {product.store.images && product.store.images[0] ? <Thumbnail source={product.store.images && product.store.images[0] && product.store.images[0].url} />
                : <img src={noPhotoImg} />}
              </S.Imgbox>
            </S.Right>
          </S.Bottom>
        </Link>

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
                <Thumbnail source={product} />
                {/* <ImageGallery  onClick={onModalClicked} items={tempArray} showFullscreenButton={false} showThumbnails={false} showBullets={false} showPlayButton={false} showNav={true} /> */}
              </S.ModalImage>
              <S.Content>
                <S.ModalLink>
                  <Link to={generateProductUrl(product.store.id, product.store.name)} key={product.store.id}>See Shop</Link>
                </S.ModalLink>
                <S.Title>{product.name}</S.Title>
                <S.Desc>{product.description}</S.Desc>
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
