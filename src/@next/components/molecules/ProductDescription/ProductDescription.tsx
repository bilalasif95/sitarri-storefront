import React from "react";

import { RichTextContent } from "@components/atoms";
import { TaxedMoney } from "@components/containers";

import noPhotoImg from "../../../../images/no-photo.svg";

import * as S from "./styles";
import { IProps } from "./types";

export const ProductDescription: React.FC<IProps> = ({
  storeCategory,
}: IProps) => {

  const [activeTab, setActiveTab] = React.useState(storeCategory.edges.length > 0 ? storeCategory.edges[0].node.name : []);
  const [product, setProduct] = React.useState(storeCategory.edges.length > 0 ? storeCategory.edges[0].node.products : []);
  const [seeMore, seeMoreSet] = React.useState(false)
  const setTabProduct = (categoryName: any, products: any) => {
    setActiveTab(categoryName)
    setProduct(products)

  }

  const seeMoreCat = () => {
    seeMoreSet(!seeMore)

  }
  return (
    <S.Wrapper>
      <S.Tabs>
        <S.Sectitle>{storeCategory.edges.length > 0 ? "Products" : ""}</S.Sectitle>
        <S.TabsContainer>
          <S.TabList>
            {storeCategory.edges.slice(0, seeMore ? 100 : window.innerWidth < 576 ? 3 : 8).map((cate: any) =>
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
          {storeCategory.edges.length > 8 ? <button onClick={() => seeMoreCat()}>More
         {seeMore ? <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#f2492b" d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" /></svg>
              : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="#f2492b" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
            } </button>:""}
          
        </S.TabsContainer>
      </S.Tabs>

      <div className="cat">
        <h3>{activeTab}</h3>
        <div className="cat-list">
          {product.edges && product.edges.map((item: any) =>
            <div className="item">
              <div className="desc">
                <h4>{item.node.name}</h4>
                <p className="descr"><RichTextContent descriptionJson={item && item.node.descriptionJson} /></p>
                <p className="price"><TaxedMoney taxedMoney={item && item.node.pricing && item.node.pricing.priceRange && item.node.pricing.priceRange.start ? item.node.pricing.priceRange.start : undefined} /></p>
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
  );
};
