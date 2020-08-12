import React from "react";

import { DropdownSelect } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

const sortOptionsByPrice = [
  {
    label: "Clear...",
    value: null,
  },
  {
    label: "£0-10",
    value: { gte: 0, lte: 10 },
  },
  {
    label: "£11-20",
    value: { gte: 11, lte: 20 },
  },
  {
    label: "£20-30",
    value: { gte: 20, lte: 30 },
  },
  {
    label: "£30-40",
    value: { gte: 30, lte: 40 },
  },
  {
    label: "£40-50",
    value: { gte: 40, lte: 50 },
  },
  {
    label: "£50+",
    value: { gte: 50, lte: 50 },
  },

];
const sortOptionsByDistance = [
  {
    label: "Clear...",
    value: null,
  },
  {
    label: "0-100m",
    value: { value: 100, symbol: "METER" },
  },
  {
    label: "<500m",
    value: { value: 500, symbol: "METER" },
  },
  {
    label: "<1km",
    value: { value: 1, symbol: "KILOMETER" },
  },
  {
    label: "<5km",
    value: { value: 5, symbol: "KILOMETER" },
  },
  {
    label: "<10km",
    value: { value: 10, symbol: "KILOMETER" },
  },
  {
    label: ">10km",
    value: { value: 0, symbol: "KILOMETER" },
  },
];
const sortOptionsByBusiness = [
  {
    label: "Clear...",
    value: null,
  },
  {
    label: "Cafe",
    value: "cafe",
  },
  {
    label: "Restaurant",
    value: "restaurant",
  },
  {
    label: "Grocery",
    value: "grocery",
  },
  {
    label: "Hardware",
    value: "hardware",
  },

];
const sortOptionsByType = [
  {
    label: "Clear...",
    value: null,
  },
  {
    label: "Only Products",
    value: "products",
  },
  {
    label: "Only Stores",
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
                option => option.label === activeSortOption
              )}
            />
          </S.Sort>
        </S.Element>
        <S.Element>
          <S.Sort>
            <DropdownSelect
              sortBy="Category"
              type="BusinessBase"
              onChange={onChange}
              options={sortOptionsByBusiness}
              value={sortOptionsByBusiness.find(
                option => option.label === activeSortBusinessType
              )}
            />
          </S.Sort>
        </S.Element>
        <S.Element>
          <S.Sort>
            <DropdownSelect
              sortBy="Location"
              type="DistanceBase"
              onChange={onChange}
              options={sortOptionsByDistance}
              value={sortOptionsByDistance.find(
                option => option.label === acitveSortDistanceBase
              )}
            />
          </S.Sort>
        </S.Element>
        <S.Element>
          <S.Sort>
            <DropdownSelect
              sortBy="Type"
              type="showType"
              onChange={onChange}
              options={sortOptionsByType}
              value={sortOptionsByType.find(
                option => option.label === activeSortTypeBase
              )}
            />
          </S.Sort>
        </S.Element>
      </S.Top>
    </S.Wrapper>
  );
};
