import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';

import { Typography } from 'antd';
import React from "react";
import { Link } from "react-router-dom";
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { TaxedMoney } from "@components/containers";

import noPhotoImg from "../../../../images/no-photo.svg";

import * as S from "./styles";

import { generateProductUrl, generateShopUrl } from "../../../../core/utils";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export const ProductTile: React.FC<any> = ({ product, redirectToProductPage }: { product: any; redirectToProductPage: any }) => {
  const price =
    product.pricing &&
      product.pricing.priceRange &&
      product.pricing.priceRange.start
      ? product.pricing.priceRange.start
      : undefined;
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

  const mondayOpeningTime = secondsToHms(product.storess.edges[0].node.mondayOpeningTime);
  const [mondayOpenTime] = mondayOpeningTime.split(" ")
  const mondayOpenHoursMinutes = mondayOpenTime.split(":")
  const mondayOpenHours = Number(mondayOpenHoursMinutes[0])
  const mondayOpenMinutes = Number(mondayOpenHoursMinutes[1])

  const mondayClosingTime = secondsToHms(product.storess.edges[0].node.mondayClosingTime);
  const [mondayCloseTime] = mondayClosingTime.split(" ")
  const mondayClosingHoursMinutes = mondayCloseTime.split(":")
  const mondayClosingHours = Number(mondayClosingHoursMinutes[0])
  const mondayClosingMinutes = Number(mondayClosingHoursMinutes[1])
  mondayStart.setHours(mondayOpenHours);
  mondayStart.setMinutes(mondayOpenMinutes);
  mondayEnd.setHours(mondayClosingHours);
  mondayEnd.setMinutes(mondayClosingMinutes);


  const tuesdayOpeningTime = secondsToHms(product.storess.edges[0].node.tuesdayOpeningTime);
  const [tuesdayOpenTime] = tuesdayOpeningTime.split(" ")
  const tuesdayOpenHoursMinutes = tuesdayOpenTime.split(":")
  const tuesdayOpenHours = Number(tuesdayOpenHoursMinutes[0])
  const tuesdayOpenMinutes = Number(tuesdayOpenHoursMinutes[1])

  const tuesdayClosingTime = secondsToHms(product.storess.edges[0].node.tuesdayClosingTime);
  const [tuesdayCloseTime] = tuesdayClosingTime.split(" ")
  const tuesdayClosingHoursMinutes = tuesdayCloseTime.split(":")
  const tuesdayClosingHours = Number(tuesdayClosingHoursMinutes[0])
  const tuesdayClosingMinutes = Number(tuesdayClosingHoursMinutes[1])
  tuesdayStart.setHours(tuesdayOpenHours);
  tuesdayStart.setMinutes(tuesdayOpenMinutes);
  tuesdayEnd.setHours(tuesdayClosingHours);
  tuesdayEnd.setMinutes(tuesdayClosingMinutes);


  const wednesdayOpeningTime = secondsToHms(product.storess.edges[0].node.wednesdayOpeningTime);
  const [wednesdayOpenTime] = wednesdayOpeningTime.split(" ")
  const wednesdayOpenHoursMinutes = wednesdayOpenTime.split(":")
  const wednesdayOpenHours = Number(wednesdayOpenHoursMinutes[0])
  const wednesdayOpenMinutes = Number(wednesdayOpenHoursMinutes[1])

  const wednesdayClosingTime = secondsToHms(product.storess.edges[0].node.wednesdayClosingTime);
  const [wednesdayCloseTime] = wednesdayClosingTime.split(" ")
  const wednesdayClosingHoursMinutes = wednesdayCloseTime.split(":")
  const wednesdayClosingHours = Number(wednesdayClosingHoursMinutes[0])
  const wednesdayClosingMinutes = Number(wednesdayClosingHoursMinutes[1])
  wednesdayStart.setHours(wednesdayOpenHours);
  wednesdayStart.setMinutes(wednesdayOpenMinutes);
  wednesdayEnd.setHours(wednesdayClosingHours);
  wednesdayEnd.setMinutes(wednesdayClosingMinutes);


  const thursdayOpeningTime = secondsToHms(product.storess.edges[0].node.thursdayOpeningTime);
  const [thursdayOpenTime] = thursdayOpeningTime.split(" ")
  const thursdayOpenHoursMinutes = thursdayOpenTime.split(":")
  const thursdayOpenHours = Number(thursdayOpenHoursMinutes[0])
  const thursdayOpenMinutes = Number(thursdayOpenHoursMinutes[1])

  const thursdayClosingTime = secondsToHms(product.storess.edges[0].node.thursdayClosingTime);
  const [thursdayCloseTime] = thursdayClosingTime.split(" ")
  const thursdayClosingHoursMinutes = thursdayCloseTime.split(":")
  const thursdayClosingHours = Number(thursdayClosingHoursMinutes[0])
  const thursdayClosingMinutes = Number(thursdayClosingHoursMinutes[1])
  thursdayStart.setHours(thursdayOpenHours);
  thursdayStart.setMinutes(thursdayOpenMinutes);
  thursdayEnd.setHours(thursdayClosingHours);
  thursdayEnd.setMinutes(thursdayClosingMinutes);


  const fridayOpeningTime = secondsToHms(product.storess.edges[0].node.fridayOpeningTime);
  const [fridayOpenTime] = fridayOpeningTime.split(" ")
  const fridayOpenHoursMinutes = fridayOpenTime.split(":")
  const fridayOpenHours = Number(fridayOpenHoursMinutes[0])
  const fridayOpenMinutes = Number(fridayOpenHoursMinutes[1])

  const fridayClosingTime = secondsToHms(product.storess.edges[0].node.fridayClosingTime);
  const [fridayCloseTime] = fridayClosingTime.split(" ")
  const fridayClosingHoursMinutes = fridayCloseTime.split(":")
  const fridayClosingHours = Number(fridayClosingHoursMinutes[0])
  const fridayClosingMinutes = Number(fridayClosingHoursMinutes[1])
  fridayStart.setHours(fridayOpenHours);
  fridayStart.setMinutes(fridayOpenMinutes);
  fridayEnd.setHours(fridayClosingHours);
  fridayEnd.setMinutes(fridayClosingMinutes);


  const saturdayOpeningTime = secondsToHms(product.storess.edges[0].node.saturdayOpeningTime);
  const [saturdayOpenTime] = saturdayOpeningTime.split(" ")
  const saturdayOpenHoursMinutes = saturdayOpenTime.split(":")
  const saturdayOpenHours = Number(saturdayOpenHoursMinutes[0])
  const saturdayOpenMinutes = Number(saturdayOpenHoursMinutes[1])

  const saturdayClosingTime = secondsToHms(product.storess.edges[0].node.saturdayClosingTime);
  const [saturdayCloseTime] = saturdayClosingTime.split(" ")
  const saturdayClosingHoursMinutes = saturdayCloseTime.split(":")
  const saturdayClosingHours = Number(saturdayClosingHoursMinutes[0])
  const saturdayClosingMinutes = Number(saturdayClosingHoursMinutes[1])
  saturdayStart.setHours(saturdayOpenHours);
  saturdayStart.setMinutes(saturdayOpenMinutes);
  saturdayEnd.setHours(saturdayClosingHours);
  saturdayEnd.setMinutes(saturdayClosingMinutes);


  const sundayOpeningTime = secondsToHms(product.storess.edges[0].node.sundayOpeningTime);
  const [sundayOpenTime] = sundayOpeningTime.split(" ")
  const sundayOpenHoursMinutes = sundayOpenTime.split(":")
  const sundayOpenHours = Number(sundayOpenHoursMinutes[0])
  const sundayOpenMinutes = Number(sundayOpenHoursMinutes[1])

  const sundayClosingTime = secondsToHms(product.storess.edges[0].node.sundayClosingTime);
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
  const { Paragraph } = Typography;
  return (
    <S.Wrapper data-cy="product-tile">
      <S.Top>
        <S.Image>
          {product.images.length > 0 ?
            <Swiper pagination={{ clickable: true, dynamicBullets: true }} slidesPerView={1}>
              {product.images.map((img: any) => (
                <SwiperSlide><img onClick={() => redirectToProductPage(product.id, product.name)} src={img.url} /></SwiperSlide>
              ))}
            </Swiper>
            : <img src={noPhotoImg} className="noImg" />}
        </S.Image>
        <S.Content>
          <Link to={generateProductUrl(product.id, product.name)} key={product.id}>
            <S.Title>{product.name}</S.Title>
            {product.description === "" ? <S.EmptySpace></S.EmptySpace> : <S.Desc>
              <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: '..' }}>
                {product.description}
              </Paragraph>
            </S.Desc>}
            <S.Price>
              <TaxedMoney taxedMoney={price} />
            </S.Price>
          </Link>
        </S.Content>
      </S.Top>
      {product.storess && product.storess.edges && product.storess.edges[0] && <Link to={generateShopUrl(product.storess.edges[0].node.id, product.storess.edges[0].node.name)} key={product.storess.edges[0].node.id}>
        <S.DividerSpan></S.DividerSpan>
        <S.Bottom>
          <S.Right>
            <S.Imgbox>
              {product.storess.edges[0].node.business.logo && product.storess.edges[0].node.business.logo ? <img src={product.storess.edges[0].node.business.logo} />
                : <img src={noPhotoImg} />}
            </S.Imgbox>
          </S.Right>
          <S.Left>
            <S.CardTitle>
              <S.StoreTitle>{product.storess.edges[0].node.name}</S.StoreTitle>
              <S.CardDetails>
                <S.Nos>{product.storess.edges[0].node.rating}
                  {product.storess.edges[0].node.rating === 0 ? <S.star style={{ marginTop: '1px' }}><svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" /></svg></S.star> : <S.star ><svg xmlns="https://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg></S.star>}
                  <S.TotalReviews>
                    ({product.storess.edges[0].node.totalReviews})
                  </S.TotalReviews>
                </S.Nos>
              </S.CardDetails>
            </S.CardTitle>
            <S.CardTime>
              {todayDay === "Monday" && (
                product.storess.edges[0].node.mondayOpeningStatus ?
                  (today.getTime() >= mondayStart.getTime() && today.getTime() <= mondayEnd.getTime()) ?
                    <S.Timing>
                      <S.Open style={{ color: "#58C829" }}>Open </S.Open>
                      <S.Close>
                        <span />
                          Closes {product.storess.edges[0].node.mondayClosingTime <= 0 ? <>00:00</> : secondsToHms(product.storess.edges[0].node.mondayClosingTime)}
                      </S.Close>
                    </S.Timing>
                    :
                    <S.Timing>
                      <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                      <S.Close>
                        <span />
                          Opens {product.storess.edges[0].node.mondayOpeningTime <= 0 ? <>00:00</> : secondsToHms(product.storess.edges[0].node.mondayOpeningTime)}
                      </S.Close>
                    </S.Timing>
                  : <S.Timing>
                    <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                  </S.Timing>
              )
              }
              {todayDay === "Tuesday" && (
                product.storess.edges[0].node.tuesdayOpeningStatus ?
                  (today.getTime() >= tuesdayStart.getTime() && today.getTime() <= tuesdayEnd.getTime()) ?
                    <S.Timing>
                      <S.Open style={{ color: "#58C829" }}>Open </S.Open>
                      <S.Close>
                        <span />
                          Closes {product.storess.edges[0].node.tuesdayClosingTime <= 0 ? <>00:00</> : secondsToHms(product.storess.edges[0].node.tuesdayClosingTime)}
                      </S.Close>
                    </S.Timing>
                    :
                    <S.Timing>
                      <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                      <S.Close>
                        <span />
                          Opens {product.storess.edges[0].node.tuesdayOpeningTime <= 0 ? <>00:00</> : secondsToHms(product.storess.edges[0].node.tuesdayOpeningTime)}
                      </S.Close>
                    </S.Timing>
                  : <S.Timing>
                    <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                  </S.Timing>
              )
              }
              {todayDay === "Wednesday" && (
                product.storess.edges[0].node.wednesdayOpeningStatus ?
                  (today.getTime() >= wednesdayStart.getTime() && today.getTime() <= wednesdayEnd.getTime()) ?
                    <S.Timing>
                      <S.Open style={{ color: "#58C829" }}>Open </S.Open>
                      <S.Close>
                        <span />
                          Closes {product.storess.edges[0].node.wednesdayClosingTime <= 0 ? <>00:00</> : secondsToHms(product.storess.edges[0].node.wednesdayClosingTime)}
                      </S.Close>
                    </S.Timing>
                    :
                    <S.Timing>
                      <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                      <S.Close>
                        <span />
                          Opens {product.storess.edges[0].node.wednesdayOpeningTime <= 0 ? <>00:00</> : secondsToHms(product.storess.edges[0].node.wednesdayOpeningTime)}
                      </S.Close>
                    </S.Timing>
                  : <S.Timing>
                    <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                  </S.Timing>
              )
              }
              {todayDay === "Thursday" && (
                product.storess.edges[0].node.thursdayOpeningStatus ?
                  (today.getTime() >= thursdayStart.getTime() && today.getTime() <= thursdayEnd.getTime()) ?
                    <S.Timing>
                      <S.Open style={{ color: "#58C829" }}>Open </S.Open>
                      <S.Close>
                        <span />
                          Closes {product.storess.edges[0].node.thursdayClosingTime <= 0 ? <>00:00</> : secondsToHms(product.storess.edges[0].node.thursdayClosingTime)}
                      </S.Close>
                    </S.Timing>
                    :
                    <S.Timing>
                      <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                      <S.Close>
                        <span />
                          Opens {product.storess.edges[0].node.thursdayOpeningTime <= 0 ? <>00:00</> : secondsToHms(product.storess.edges[0].node.thursdayOpeningTime)}
                      </S.Close>
                    </S.Timing>
                  : <S.Timing>
                    <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                  </S.Timing>
              )
              }
              {todayDay === "Friday" && (
                product.storess.edges[0].node.fridayOpeningStatus ?
                  (today.getTime() >= fridayStart.getTime() && today.getTime() <= fridayEnd.getTime()) ?
                    <S.Timing>
                      <S.Open style={{ color: "#58C829" }}>Open </S.Open>
                      <S.Close>
                        <span />
                          Closes {product.storess.edges[0].node.fridayClosingTime <= 0 ? <>00:00</> : secondsToHms(product.storess.edges[0].node.fridayClosingTime)}
                      </S.Close>
                    </S.Timing>
                    :
                    <S.Timing>
                      <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                      <S.Close>
                        <span />
                          Opens {product.storess.edges[0].node.fridayOpeningTime <= 0 ? <>00:00</> : secondsToHms(product.storess.edges[0].node.fridayOpeningTime)}
                      </S.Close>
                    </S.Timing>
                  : <S.Timing>
                    <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                  </S.Timing>
              )
              }
              {todayDay === "Saturday" && (
                product.storess.edges[0].node.saturdayOpeningStatus ?
                  (today.getTime() >= saturdayStart.getTime() && today.getTime() <= saturdayEnd.getTime()) ?
                    <S.Timing>
                      <S.Open style={{ color: "#58C829" }}>Open </S.Open>
                      <S.Close>
                        <span />
                          Closes {product.storess.edges[0].node.saturdayClosingTime <= 0 ? <>00:00</> : secondsToHms(product.storess.edges[0].node.saturdayClosingTime)}
                      </S.Close>
                    </S.Timing>
                    :
                    <S.Timing>
                      <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                      <S.Close>
                        <span />
                          Opens {product.storess.edges[0].node.saturdayOpeningTime <= 0 ? <>00:00</> : secondsToHms(product.storess.edges[0].node.saturdayOpeningTime)}
                      </S.Close>
                    </S.Timing>
                  : <S.Timing>
                    <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                  </S.Timing>
              )
              }
              {todayDay === "Sunday" && (
                product.storess.edges[0].node.sundayOpeningStatus ?
                  (today.getTime() >= sundayStart.getTime() && today.getTime() <= sundayEnd.getTime()) ?
                    <S.Timing>
                      <S.Open style={{ color: "#58C829" }}>Open </S.Open>
                      <S.Close>
                        <span />
                          Closes {product.storess.edges[0].node.sundayClosingTime <= 0 ? <>00:00</> : secondsToHms(product.storess.edges[0].node.sundayClosingTime)}
                      </S.Close>
                    </S.Timing>
                    :
                    <S.Timing>
                      <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                      <S.Close>
                        <span />
                          Opens {product.storess.edges[0].node.sundayOpeningTime <= 0 ? <>00:00</> : secondsToHms(product.storess.edges[0].node.sundayOpeningTime)}
                      </S.Close>
                    </S.Timing>
                  : <S.Timing>
                    <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                  </S.Timing>
              )
              }
              {product.storess.edges[0].node.distance &&
                <S.Location>
                  <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                  <S.Miles>{product.storess.edges[0].node.distance}</S.Miles>
                </S.Location>}
            </S.CardTime>
            <S.Likes>
            </S.Likes>
          </S.Left>
        </S.Bottom>
      </Link>}
    </S.Wrapper>
  );
};
