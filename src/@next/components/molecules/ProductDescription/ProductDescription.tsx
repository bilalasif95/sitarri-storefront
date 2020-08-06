import React from "react";

// import { RichTextContent } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

export const ProductDescription: React.FC<IProps> = ({
  storeCategory,
}: IProps) => {

  const [activeTab, setActiveTab] = React.useState(storeCategory.edges.length > 0 ? storeCategory.edges[0].node.name : []);
  const [product, setProduct] = React.useState(storeCategory.edges.length > 0 ? storeCategory.edges[0].node.products : []);

  const setTabProduct = (categoryName: any, products: any) => {
    setActiveTab(categoryName)
    setProduct(products)

  }
  return (
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
            <div className="item">
              <div className="desc">
                <h4>{item.node.name}</h4>
                <p className="descr">{item && item.node.description}</p>
                <p className="price">${item && item.node.pricing.priceRange.start.gross.amount}</p>
              </div>
              <div className="catimg">
                <img src={item.node.images && item.node.images[0] && item.node.images[0].url} />
              </div>
            </div>
          )}
        </div>
      </div>

    </S.Wrapper>
  );
};
