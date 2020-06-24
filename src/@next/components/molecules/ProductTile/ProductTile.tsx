import React from "react";

import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";

import * as S from "./styles";
import { IProps } from "./types";
// import { Tile } from "../../atoms";
// import tileimg from "../../../../images/tile.png";
import stileimg from "../../../../images/smalltile.png";

export const ProductTile: React.FC<IProps> = ({ product }: IProps) => {
  const price =
    product.pricing &&
      product.pricing.priceRange &&
      product.pricing.priceRange.start
      ? product.pricing.priceRange.start
      : undefined;

  return (
    <S.Wrapper data-cy="product-tile">
      <S.Top>
        <S.Image>
          {/* <img src={tileimg} /> */}
          <Thumbnail source={product} />
        </S.Image>
        <S.Content>
          <S.Title>{product.name}</S.Title>
          <S.Desc>{product.name}</S.Desc>
          <S.Price>
            <TaxedMoney taxedMoney={price} />
          </S.Price>
        </S.Content>
      </S.Top>
      <S.Bottom>
        <S.Left>
          <S.Title>{product.name}</S.Title>
          <S.Timing>
            <S.Open>Open</S.Open>
            <S.Close>
              <span />
              Close 1:00am
            </S.Close>
          </S.Timing>
          <S.Likes>
            <S.Nos>4.0</S.Nos>
            <S.Stars>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" /></svg>
            </S.Stars>
            <S.Close>
              (600)
            </S.Close>
          </S.Likes>
          <S.Location>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" /></svg>
            <S.Miles>0.1 mi</S.Miles>
          </S.Location>
        </S.Left>
        <S.Right>
          <S.Imgbox>
            {/* <img src={stileimg} /> */}
            <Thumbnail source={product} />
          </S.Imgbox>
        </S.Right>
      </S.Bottom>
    </S.Wrapper>
  );
};
