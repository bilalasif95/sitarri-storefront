import React from "react";
import { Link } from "react-router-dom";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { TaxedMoney } from "@components/containers";
// import { Thumbnail } from "@components/molecules";
// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";

// import { RichTextContent } from "@components/atoms";

// import { Modal } from "@components/organisms/Modal";

// import Carousel from "../../../../components/Carousel";

import noPhotoImg from "../../../../images/no-photo.svg";

import * as S from "./styles";

// import { IProps } from "./types";
// import { Tile } from "../../atoms";

// import Rating from 'react-rating';

import { generateProductUrl, generateShopUrl } from "../../../../core/utils";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const AllProducts: React.FC<any> = ({ product, redirectToShopPage }: { product: any, redirectToShopPage: any }) => {
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

  const mondayOpeningTime = secondsToHms(product.mondayOpeningTime);
  const [mondayOpenTime] = mondayOpeningTime.split(" ")
  const mondayOpenHoursMinutes = mondayOpenTime.split(":")
  const mondayOpenHours = Number(mondayOpenHoursMinutes[0])
  const mondayOpenMinutes = Number(mondayOpenHoursMinutes[1])

  const mondayClosingTime = secondsToHms(product.mondayClosingTime);
  const [mondayCloseTime] = mondayClosingTime.split(" ")
  const mondayClosingHoursMinutes = mondayCloseTime.split(":")
  const mondayClosingHours = Number(mondayClosingHoursMinutes[0])
  const mondayClosingMinutes = Number(mondayClosingHoursMinutes[1])
  mondayStart.setHours(mondayOpenHours);
  mondayStart.setMinutes(mondayOpenMinutes);
  mondayEnd.setHours(mondayClosingHours);
  mondayEnd.setMinutes(mondayClosingMinutes);


  const tuesdayOpeningTime = secondsToHms(product.tuesdayOpeningTime);
  const [tuesdayOpenTime] = tuesdayOpeningTime.split(" ")
  const tuesdayOpenHoursMinutes = tuesdayOpenTime.split(":")
  const tuesdayOpenHours = Number(tuesdayOpenHoursMinutes[0])
  const tuesdayOpenMinutes = Number(tuesdayOpenHoursMinutes[1])

  const tuesdayClosingTime = secondsToHms(product.tuesdayClosingTime);
  const [tuesdayCloseTime] = tuesdayClosingTime.split(" ")
  const tuesdayClosingHoursMinutes = tuesdayCloseTime.split(":")
  const tuesdayClosingHours = Number(tuesdayClosingHoursMinutes[0])
  const tuesdayClosingMinutes = Number(tuesdayClosingHoursMinutes[1])
  tuesdayStart.setHours(tuesdayOpenHours);
  tuesdayStart.setMinutes(tuesdayOpenMinutes);
  tuesdayEnd.setHours(tuesdayClosingHours);
  tuesdayEnd.setMinutes(tuesdayClosingMinutes);


  const wednesdayOpeningTime = secondsToHms(product.wednesdayOpeningTime);
  const [wednesdayOpenTime] = wednesdayOpeningTime.split(" ")
  const wednesdayOpenHoursMinutes = wednesdayOpenTime.split(":")
  const wednesdayOpenHours = Number(wednesdayOpenHoursMinutes[0])
  const wednesdayOpenMinutes = Number(wednesdayOpenHoursMinutes[1])

  const wednesdayClosingTime = secondsToHms(product.wednesdayClosingTime);
  const [wednesdayCloseTime] = wednesdayClosingTime.split(" ")
  const wednesdayClosingHoursMinutes = wednesdayCloseTime.split(":")
  const wednesdayClosingHours = Number(wednesdayClosingHoursMinutes[0])
  const wednesdayClosingMinutes = Number(wednesdayClosingHoursMinutes[1])
  wednesdayStart.setHours(wednesdayOpenHours);
  wednesdayStart.setMinutes(wednesdayOpenMinutes);
  wednesdayEnd.setHours(wednesdayClosingHours);
  wednesdayEnd.setMinutes(wednesdayClosingMinutes);


  const thursdayOpeningTime = secondsToHms(product.thursdayOpeningTime);
  const [thursdayOpenTime] = thursdayOpeningTime.split(" ")
  const thursdayOpenHoursMinutes = thursdayOpenTime.split(":")
  const thursdayOpenHours = Number(thursdayOpenHoursMinutes[0])
  const thursdayOpenMinutes = Number(thursdayOpenHoursMinutes[1])

  const thursdayClosingTime = secondsToHms(product.thursdayClosingTime);
  const [thursdayCloseTime] = thursdayClosingTime.split(" ")
  const thursdayClosingHoursMinutes = thursdayCloseTime.split(":")
  const thursdayClosingHours = Number(thursdayClosingHoursMinutes[0])
  const thursdayClosingMinutes = Number(thursdayClosingHoursMinutes[1])
  thursdayStart.setHours(thursdayOpenHours);
  thursdayStart.setMinutes(thursdayOpenMinutes);
  thursdayEnd.setHours(thursdayClosingHours);
  thursdayEnd.setMinutes(thursdayClosingMinutes);


  const fridayOpeningTime = secondsToHms(product.fridayOpeningTime);
  const [fridayOpenTime] = fridayOpeningTime.split(" ")
  const fridayOpenHoursMinutes = fridayOpenTime.split(":")
  const fridayOpenHours = Number(fridayOpenHoursMinutes[0])
  const fridayOpenMinutes = Number(fridayOpenHoursMinutes[1])

  const fridayClosingTime = secondsToHms(product.fridayClosingTime);
  const [fridayCloseTime] = fridayClosingTime.split(" ")
  const fridayClosingHoursMinutes = fridayCloseTime.split(":")
  const fridayClosingHours = Number(fridayClosingHoursMinutes[0])
  const fridayClosingMinutes = Number(fridayClosingHoursMinutes[1])
  fridayStart.setHours(fridayOpenHours);
  fridayStart.setMinutes(fridayOpenMinutes);
  fridayEnd.setHours(fridayClosingHours);
  fridayEnd.setMinutes(fridayClosingMinutes);


  const saturdayOpeningTime = secondsToHms(product.saturdayOpeningTime);
  const [saturdayOpenTime] = saturdayOpeningTime.split(" ")
  const saturdayOpenHoursMinutes = saturdayOpenTime.split(":")
  const saturdayOpenHours = Number(saturdayOpenHoursMinutes[0])
  const saturdayOpenMinutes = Number(saturdayOpenHoursMinutes[1])

  const saturdayClosingTime = secondsToHms(product.saturdayClosingTime);
  const [saturdayCloseTime] = saturdayClosingTime.split(" ")
  const saturdayClosingHoursMinutes = saturdayCloseTime.split(":")
  const saturdayClosingHours = Number(saturdayClosingHoursMinutes[0])
  const saturdayClosingMinutes = Number(saturdayClosingHoursMinutes[1])
  saturdayStart.setHours(saturdayOpenHours);
  saturdayStart.setMinutes(saturdayOpenMinutes);
  saturdayEnd.setHours(saturdayClosingHours);
  saturdayEnd.setMinutes(saturdayClosingMinutes);


  const sundayOpeningTime = secondsToHms(product.sundayOpeningTime);
  const [sundayOpenTime] = sundayOpeningTime.split(" ")
  const sundayOpenHoursMinutes = sundayOpenTime.split(":")
  const sundayOpenHours = Number(sundayOpenHoursMinutes[0])
  const sundayOpenMinutes = Number(sundayOpenHoursMinutes[1])

  const sundayClosingTime = secondsToHms(product.sundayClosingTime);
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

      <S.Wrapper data-cy="product-tile">
        <S.Top>
          <S.Brand>
            {product && product.business && product.business.logo ?
              <img onClick={() => redirectToShopPage(product.id, product.name)} src={product && product.business && product.business.logo} className="noImg" />
              : ""}
          </S.Brand>
          <S.Image>
            {product.images.length > 0 ?
              <Swiper pagination={{ clickable: true, dynamicBullets: true }} slidesPerView={1}>
                {product.images.map((img: any) => (
                  <SwiperSlide><img onClick={() => redirectToShopPage(product.id, product.name)} src={img.url} /></SwiperSlide>
                ))}
              </Swiper>
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
                  {product.rating === 0 ? <S.star style={{ marginTop: '1px' }}><svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" /></svg></S.star> : <S.star ><svg xmlns="https://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg></S.star>}

                  <S.TotalReviews>
                    ({product.totalReviews})
                    </S.TotalReviews>

                </S.Nos>
              </S.CardDetails>

              <S.CardDetails>
                <S.Desc>{product && product.business && product.business.businesscategory && product.business.businesscategory.name}</S.Desc>
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

              {todayDay === "Monday" && (
                product.mondayOpeningStatus ?
                  (today.getTime() >= mondayStart.getTime() && today.getTime() <= mondayEnd.getTime()) ?
                    <S.Timing>
                      <S.Open style={{ color: "#58C829" }}>Open </S.Open>
                      <S.Close>
                        <span />
                          Closes {product.mondayClosingTime <= 0 ? <>00:00</> : secondsToHms(product.mondayClosingTime)}
                      </S.Close>
                    </S.Timing>
                    :
                    <S.Timing>
                      <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                      <S.Close>
                        <span />
                          Opens {product.mondayOpeningTime <= 0 ? <>00:00</> : secondsToHms(product.mondayOpeningTime)}
                      </S.Close>
                    </S.Timing>
                  : <S.Timing>
                    <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                  </S.Timing>
              )
              }
              {todayDay === "Tuesday" && (
                product.tuesdayOpeningStatus ?
                  (today.getTime() >= tuesdayStart.getTime() && today.getTime() <= tuesdayEnd.getTime()) ?
                    <S.Timing>
                      <S.Open style={{ color: "#58C829" }}>Open </S.Open>
                      <S.Close>
                        <span />
                          Closes {product.tuesdayClosingTime <= 0 ? <>00:00</> : secondsToHms(product.tuesdayClosingTime)}
                      </S.Close>
                    </S.Timing>
                    :
                    <S.Timing>
                      <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                      <S.Close>
                        <span />
                          Opens {product.tuesdayOpeningTime <= 0 ? <>00:00</> : secondsToHms(product.tuesdayOpeningTime)}
                      </S.Close>
                    </S.Timing>
                  : <S.Timing>
                    <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                  </S.Timing>
              )
              }
              {todayDay === "Wednesday" && (
                product.wednesdayOpeningStatus ?
                  (today.getTime() >= wednesdayStart.getTime() && today.getTime() <= wednesdayEnd.getTime()) ?
                    <S.Timing>
                      <S.Open style={{ color: "#58C829" }}>Open </S.Open>
                      <S.Close>
                        <span />
                          Closes {product.wednesdayClosingTime <= 0 ? <>00:00</> : secondsToHms(product.wednesdayClosingTime)}
                      </S.Close>
                    </S.Timing>
                    :
                    <S.Timing>
                      <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                      <S.Close>
                        <span />
                          Opens {product.wednesdayOpeningTime <= 0 ? <>00:00</> : secondsToHms(product.wednesdayOpeningTime)}
                      </S.Close>
                    </S.Timing>
                  : <S.Timing>
                    <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                  </S.Timing>
              )
              }
              {todayDay === "Thursday" && (
                product.thursdayOpeningStatus ?
                  (today.getTime() >= thursdayStart.getTime() && today.getTime() <= thursdayEnd.getTime()) ?
                    <S.Timing>
                      <S.Open style={{ color: "#58C829" }}>Open </S.Open>
                      <S.Close>
                        <span />
                          Closes {product.thursdayClosingTime <= 0 ? <>00:00</> : secondsToHms(product.thursdayClosingTime)}
                      </S.Close>
                    </S.Timing>
                    :
                    <S.Timing>
                      <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                      <S.Close>
                        <span />
                          Opens {product.thursdayOpeningTime <= 0 ? <>00:00</> : secondsToHms(product.thursdayOpeningTime)}
                      </S.Close>
                    </S.Timing>
                  : <S.Timing>
                    <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                  </S.Timing>
              )
              }
              {todayDay === "Friday" && (
                product.fridayOpeningStatus ?
                  (today.getTime() >= fridayStart.getTime() && today.getTime() <= fridayEnd.getTime()) ?
                    <S.Timing>
                      <S.Open style={{ color: "#58C829" }}>Open </S.Open>
                      <S.Close>
                        <span />
                          Closes {product.fridayClosingTime <= 0 ? <>00:00</> : secondsToHms(product.fridayClosingTime)}
                      </S.Close>
                    </S.Timing>
                    :
                    <S.Timing>
                      <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                      <S.Close>
                        <span />
                          Opens {product.fridayOpeningTime <= 0 ? <>00:00</> : secondsToHms(product.fridayOpeningTime)}
                      </S.Close>
                    </S.Timing>
                  : <S.Timing>
                    <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                  </S.Timing>
              )
              }
              {todayDay === "Saturday" && (
                product.saturdayOpeningStatus ?
                  (today.getTime() >= saturdayStart.getTime() && today.getTime() <= saturdayEnd.getTime()) ?
                    <S.Timing>
                      <S.Open style={{ color: "#58C829" }}>Open </S.Open>
                      <S.Close>
                        <span />
                          Closes {product.saturdayClosingTime <= 0 ? <>00:00</> : secondsToHms(product.saturdayClosingTime)}
                      </S.Close>
                    </S.Timing>
                    :
                    <S.Timing>
                      <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                      <S.Close>
                        <span />
                          Opens {product.saturdayOpeningTime <= 0 ? <>00:00</> : secondsToHms(product.saturdayOpeningTime)}
                      </S.Close>
                    </S.Timing>
                  : <S.Timing>
                    <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                  </S.Timing>
              )
              }
              {todayDay === "Sunday" && (
                product.sundayOpeningStatus ?
                  (today.getTime() >= sundayStart.getTime() && today.getTime() <= sundayEnd.getTime()) ?
                    <S.Timing>
                      <S.Open style={{ color: "#58C829" }}>Open </S.Open>
                      <S.Close>
                        <span />
                          Closes {product.sundayClosingTime <= 0 ? <>00:00</> : secondsToHms(product.sundayClosingTime)}
                      </S.Close>
                    </S.Timing>
                    :
                    <S.Timing>
                      <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                      <S.Close>
                        <span />
                          Opens {product.sundayOpeningTime <= 0 ? <>00:00</> : secondsToHms(product.sundayOpeningTime)}
                      </S.Close>
                    </S.Timing>
                  : <S.Timing>
                    <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                  </S.Timing>
              )
              }


              <S.Tags>
                {product && product.tags && product.tags.map((tag: any) => <S.Subtag>{tag.name}</S.Subtag>)}
                {/* <S.Subtag>Mexican</S.Subtag>
                <S.Subtag>Taco</S.Subtag>
                <S.Subtag>Tequila</S.Subtag> */}
              </S.Tags>

              {/* <S.Likes>
                <S.Stars>

                  <Rating
                    placeholderRating={product.rating}
                    readonly
                    emptySymbol={<svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" /></svg>
                    }
                    placeholderSymbol={<svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>
                    }
                    fullSymbol={<svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"></path></svg>}
                  />
                </S.Stars>
                <S.Close>
                  ({product.totalReviews})
            </S.Close>
              </S.Likes> */}

              {/* {product.distance &&
                <S.Location>
                  <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                  <S.Miles>
                    <S.Distance>{product.distance}</S.Distance>
                    <S.Address>
                  {product.address && product.address.address}
                </S.Address>
                  </S.Miles>
                </S.Location>} */}
            </S.Content>
          </Link>
        </S.Top>
        {

          product.productss.edges.slice(0, 2).map((item: any) => {

            const price =
              item.node.pricing &&
                item.node.pricing.priceRange &&
                item.node.pricing.priceRange.start
                ? item.node.pricing.priceRange.start
                : undefined;
            return (
              <Link to={generateProductUrl(item.node.id, item.node.name)} key={item.node.id}>
                <S.DividerSpan></S.DividerSpan>
                <S.Bottom>
                  <S.Left>
                    <S.ProductTitle>{item.node.name}</S.ProductTitle>
                    {/* <S.Desc><RichTextContent descriptionJson={item.node.descriptionJson} /></S.Desc> */}
                    {item.node.description === "" ? <S.EmptySpace></S.EmptySpace> : <S.Desc>{item.node.description}</S.Desc>}
                    <S.Price>
                      <TaxedMoney taxedMoney={price} />
                    </S.Price>
                  </S.Left>
                  <S.Right>
                    <S.Imgbox>
                      {item.node.images && item.node.images[0] ? <img src={item.node.images[0].url} />
                        : <img src={noPhotoImg} />}
                    </S.Imgbox>
                  </S.Right>
                </S.Bottom>
              </Link>
            )

          }


          )
        }


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
      {/* <Thumbnail source={product} /> */}
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
