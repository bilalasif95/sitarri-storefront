import React from "react";

import { DropdownSelect } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

const sortOptionsByPrice = [
  {
    label: "0 – 10",
    value: { gte: 0, lte: 10 },
  },
  {
    label: "11-20",
    value: { gte: 11, lte: 20 },
  },
  {
    label: "20-30",
    value: { gte: 20, lte: 30 },
  },
  {
    label: "30-40",
    value: { gte: 30, lte: 40 },
  },
  {
    label: "40-50",
    value: { gte: 40, lte: 50 },
  },
  {
    label: "50+",
    value: { gte: 50, lte: 50 },
  },

];
const sortOptionsByDistance = [
  {
    label: "0-100",
    value: { value: 100, symbol: "M" },
  },
  {
    label: "<500m",
    value: { value: 500, symbol: "M" },
  },
  {
    label: "<1km",
    value: { value: 1, symbol: "Km" },
  },
  {
    label: "<5km",
    value: { value: 5, symbol: "Km" },
  },

];
const sortOptionsByBusiness = [
  {
    label: "café,",
    value: "café,",
  },
  {
    label: "restaurant",
    value: "restaurant,",
  },
  {
    label: "grocery",
    value: "grocery",
  },
  {
    label: "hardware",
    value: "hardware",
  },

];
const sortOptionsByType = [
  {
    label: "only products",
    value: "products",
  },
  {
    label: "only stores",
    value: "stores",
  },


];
export const ProductListHeader: React.FC<IProps> = ({

  activeSortOption,
  activeSortBusinessType,
  activeSortTypeBase,
  acitveSortDistanceBase,
  onChange,

}: IProps) => {



  return (
    <S.Wrapper>
      <S.Top>
        <S.Element>
          <S.Sort>
            <DropdownSelect
              sortBy="Price"
              type="PriceBase"
              onChange={onChange}
              options={sortOptionsByPrice}
              value={sortOptionsByPrice.find(
                option => option.value === activeSortOption
              )}
            />
          </S.Sort>
        </S.Element>
        <S.Element>
          <S.Sort>
            <DropdownSelect
              sortBy="category"
              type="BusinessBase"
              onChange={onChange}
              options={sortOptionsByBusiness}
              value={sortOptionsByBusiness.find(
                option => option.value === activeSortBusinessType
              )}
            />
          </S.Sort>
        </S.Element>
        <S.Element>
          <S.Sort>
            <DropdownSelect
              sortBy="location"
              type="DistanceBase"
              onChange={onChange}
              options={sortOptionsByDistance}
              value={sortOptionsByDistance.find(
                option => option.value === acitveSortDistanceBase
              )}
            />
          </S.Sort>
        </S.Element>
        <S.Element>
          <S.Sort>
            <DropdownSelect
              sortBy="type"
              type="showType"
              onChange={onChange}
              options={sortOptionsByType}
              value={sortOptionsByType.find(
                option => option.value === activeSortTypeBase
              )}
            />
          </S.Sort>
        </S.Element>
      </S.Top>
    </S.Wrapper>
  );
};
