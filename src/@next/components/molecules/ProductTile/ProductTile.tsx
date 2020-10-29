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
  const start = new Date();
  const end = new Date();
  if (product.store) {
    const [openTime, openFormat] = product.store.openingHours.split(" ")
    const openHoursMinutes = openTime.split(":")
    const openHours = openFormat === "PM" && Number(openHoursMinutes[0]) < 12 ? Number(openHoursMinutes[0]) + 12 : Number(openHoursMinutes[0])
    const openMinutes = Number(openHoursMinutes[1])

    const [closingTime, closingFormat] = product.store.closingHours.split(" ")
    const closingHoursMinutes = closingTime.split(":")
    const closingHours = closingFormat === "PM" && Number(closingHoursMinutes[0]) < 12 ? Number(closingHoursMinutes[0]) + 12 : Number(closingHoursMinutes[0])
    const closingMinutes = Number(closingHoursMinutes[1])
    start.setHours(openHours);
    start.setMinutes(openMinutes);
    end.setHours(closingHours);
    end.setMinutes(closingMinutes);
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
      {product.store && <Link to={generateShopUrl(product.store.id, product.store.name)} key={product.store.id}>
        <S.Bottom>
          <S.Right>
            <S.Imgbox>
              {product.store.logo && product.store.logo ? <img src={product.store.logo} />
                : <img src={noPhotoImg} />}
            </S.Imgbox>
          </S.Right>
          <S.Left>
            <S.CardTitle>
              <S.StoreTitle>{product.store.name}</S.StoreTitle>
              <S.CardDetails>
                <S.Nos>{product.store.rating}
                  {product.store.rating === 0 ? <S.star style={{marginTop: '1px'}}><svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" /></svg></S.star> : <S.star ><svg xmlns="https://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg></S.star>}
                  <S.TotalReviews>
                    ({product.store.totalReviews})
                  </S.TotalReviews>
                </S.Nos>
              </S.CardDetails>
            </S.CardTitle>
            <S.CardTime>
              {product.store.openingHours !== "" && product.store.closingHours !== "" &&
                <>
                  {(today.getTime() >= start.getTime() && today.getTime() <= end.getTime()) ?
                    <S.Timing>
                      <S.Open style={{ color: "#58C829" }}>Open </S.Open>
                      <S.Close>
                        <span />
                            Closes {product.store.closingHours}
                      </S.Close>
                    </S.Timing>
                    :
                    <S.Timing>
                      <S.Open style={{ color: "#FF2F2D" }}>Closed </S.Open>
                      <S.Close>
                        <span />
                            Opens {product.store.openingHours}
                      </S.Close>
                    </S.Timing>
                  }
                </>
              }
              {product.store.distance &&
                <S.Location>
                  <svg xmlns="https://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
                  <S.Miles>{product.store.distance}</S.Miles>
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
