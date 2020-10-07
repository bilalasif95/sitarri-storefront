import "react-image-gallery/styles/css/image-gallery.css";

import React from "react";
import ImageGallery from 'react-image-gallery';
import { Link } from "react-router-dom";

// import { TaxedMoney } from "@components/containers";
// import { Thumbnail } from "@components/molecules";

import noPhotoImg from "../../../../images/no-photo.svg";

// import { Modal } from "@components/organisms/Modal";

import * as S from "./styles";
// import { IProps } from "./types";

// import Rating from 'react-rating';
// import { Tile } from "../../atoms";

import { generateShopUrl } from "../../../../core/utils";

export const BusinessTile: React.FC<any> = ({ product }: { product: any }) => {
  // const price =
  //   product.pricing &&
  //     product.pricing.priceRange &&
  //     product.pricing.priceRange.start
  //     ? product.pricing.priceRange.start
  //     : undefined;

  // const [displayNewModal, setDisplayNewModal] = React.useState(false);
  // const [show, setShow] = React.useState(true);
  // const onModalClicked = () => {
  //   if (displayNewModal) {
  //     setDisplayNewModal(false)
  //     setShow(false)
  //   }
  //   else {
  //     setDisplayNewModal(true)
  //     setShow(true)
  //   }
  // };
  const tempArray: any = [];
  product.images.map((image: any) => tempArray.push({ original: image.url }));
  // product.logo === null ? [].map((image: any) => tempArray.push({ original: image.url })) : [{url: product.logo}].map((image: any) => tempArray.push({ original: image.url }));

  const today = new Date();
  const start = new Date();
  const end = new Date();
  const [openTime, openFormat] = product.openingHours.split(" ")
  const openHoursMinutes = openTime.split(":")
  const openHours = openFormat === "PM" && Number(openHoursMinutes[0]) < 12 ? Number(openHoursMinutes[0]) + 12 : Number(openHoursMinutes[0])
  const openMinutes = Number(openHoursMinutes[1])

  const [closingTime, closingFormat] = product.closingHours.split(" ")
  const closingHoursMinutes = closingTime.split(":")
  const closingHours = closingFormat === "PM" && Number(closingHoursMinutes[0]) < 12 ? Number(closingHoursMinutes[0]) + 12 : Number(closingHoursMinutes[0])
  const closingMinutes = Number(closingHoursMinutes[1])
  start.setHours(openHours);
  start.setMinutes(openMinutes);
  end.setHours(closingHours);
  end.setMinutes(closingMinutes);

  return (
    <>

      <S.Wrapper data-cy="product-tile">
        <S.Top>
          <S.Brand>

            {/* <img src={tileimg} /> */}
            {/* {tempArray.length > 0 ? */}
            {/* <ImageGallery onClick={onModalClicked} items={tempArray} showFullscreenButton={false} showThumbnails={false} showBullets={false} showPlayButton={false} showNav={true} /> */}
            {/* :  */}
            {product.logo ?
              <img src={product.logo} className="noImg" />
              : ""}
            {/* } */}

          </S.Brand>
          <S.Image>
            {/* <img src={tileimg} /> */}
            {tempArray.length > 0 ?
              <ImageGallery items={tempArray} showFullscreenButton={false} showThumbnails={false} showBullets={true} showPlayButton={false} showNav={false} />
              : <img src={noPhotoImg} className="noImg" />}
          </S.Image>
          <Link to={generateShopUrl(product.id, product.name)} key={product.id}>
            <S.Content>
              {/* <S.Link>
                <Link to={generateProductUrl(product.id, product.name)} key={product.id}>See Products</Link>
              </S.Link> */}

              <S.CardDetails>
                <S.Title>{product.name}</S.Title>
                <S.Nos>{product.rating}
                  {product.rating === 0 ? <S.star ><svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" /></svg></S.star> : <S.star ><svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg></S.star>}
                  <S.TotalReviews>
                    ({product.totalReviews})
                  </S.TotalReviews>
                </S.Nos>
              </S.CardDetails>


              <S.CardDetails>
                <S.Desc>{product.category}</S.Desc>
                {product.distance &&
                  <S.Location>
                    <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                    <S.Miles>
                      <S.Distance>{product.distance}</S.Distance>
                      {/* <S.Address>
                    {product.address && product.address.address}
                  </S.Address> */}
                    </S.Miles>
                  </S.Location>}
              </S.CardDetails>

              {product.openingHours !== "" && product.closingHours !== "" &&
                <>
                  {(today.getTime() >= start.getTime() && today.getTime() <= end.getTime()) ?
                    <S.Timing>
                      <S.Open style={{ color: "green" }}>Open </S.Open>
                      <S.Close>
                        <span />
        Closes {product.closingHours}
                      </S.Close>
                    </S.Timing>
                    :
                    <S.Timing>
                      <S.Open style={{ color: "red" }}>Closed </S.Open>
                      <S.Close>
                        <span />
        Opens {product.openingHours}
                      </S.Close>
                    </S.Timing>
                  }
                </>
              }


              {/* <S.Price>
                <TaxedMoney taxedMoney={price} />
              </S.Price> */}
              <S.Likes>


                {/* <S.Stars>
                  <Rating
                    placeholderRating={product.rating}
                    readonly
                    emptySymbol={<svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" /></svg>
                    }
                    placeholderSymbol={<svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
                    }
                    fullSymbol={<svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>}
                  />
                </S.Stars> */}

              </S.Likes>

              <S.Tags>
                {product && product.tags.map((tag: any) => <S.Subtag>{tag.name}</S.Subtag>)}
                {/* <S.Subtag>Mexican</S.Subtag>
                <S.Subtag>Taco</S.Subtag>
                <S.Subtag>Tequila</S.Subtag> */}
              </S.Tags>

            </S.Content>
          </Link>
        </S.Top>

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
                {tempArray.length > 0 ?
                  <ImageGallery items={tempArray} showFullscreenButton={false} showThumbnails={false} showBullets={false} showPlayButton={false} showNav={true} />
                  : <img src={noPhotoImg} className="noImg" />} */}
      {/* <img src={tileimg} /> */}
      {/* {product.logo ? <img width="100%" src={product.logo} />
                : <img src={noPhotoImg} />} */}
      {/* </S.ModalImage>
              <S.Content>
                <S.ModalLink>
                  <Link to={generateShopUrl(product.id, product.name)} key={product.id}>See Shop</Link>
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
      } */}
    </>
  );
};
