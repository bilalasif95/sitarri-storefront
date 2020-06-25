import React from "react";

import { RichTextContent } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

import tileimg from "../../../../images/tile.png";

enum TABS {
  Category1,
  Category2,
  Category3,
  Category4,
  Category5,
  Category6,
  Category7,
  Category8,
}

export const ProductDescription: React.FC<IProps> = ({
  description = "",
  descriptionJson = "",
  attributes,
}: IProps) => {
  const [activeTab, setActiveTab] = React.useState<TABS>(TABS.Category1);

  return (
    <S.Wrapper>
      <S.Tabs>
        <S.Sectitle>Products</S.Sectitle>
        <S.TabTitle
          active={activeTab === TABS.Category1}
          onMouseEnter={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.Category1);
          }}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.Category1);
          }}
        >
          category 1
        </S.TabTitle>
        <S.TabTitle
          active={activeTab === TABS.Category2}
          onMouseEnter={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.Category2);
          }}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.Category2);
          }}
        >
          category 2
        </S.TabTitle>
        <S.TabTitle
          active={activeTab === TABS.Category3}
          onMouseEnter={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.Category3);
          }}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.Category3);
          }}
        >
          category 3
        </S.TabTitle>
        <S.TabTitle
          active={activeTab === TABS.Category4}
          onMouseEnter={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.Category4);
          }}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.Category4);
          }}
        >
          category 4
        </S.TabTitle>

        <S.TabTitle
          active={activeTab === TABS.Category5}
          onMouseEnter={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.Category5);
          }}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.Category5);
          }}
        >
          category 5
        </S.TabTitle>
        <S.TabTitle
          active={activeTab === TABS.Category6}
          onMouseEnter={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.Category6);
          }}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.Category6);
          }}
        >
          category 6
        </S.TabTitle>
        <S.TabTitle
          active={activeTab === TABS.Category7}
          onMouseEnter={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.Category7);
          }}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.Category7);
          }}
        >
          category 7
        </S.TabTitle>
        <S.TabTitle
          active={activeTab === TABS.Category8}
          onMouseEnter={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.Category8);
          }}
          onClick={evt => {
            evt.stopPropagation();
            setActiveTab(TABS.Category8);
          }}
        >
          category 8
        </S.TabTitle>

      </S.Tabs>
      {activeTab === TABS.Category1 &&
        <div className="cat">
          <h3>Category 1</h3>
          <div className="cat-list">
            <div className="item">
              <div className="desc">
                <h4>Title</h4>
                <p className="descr">Description of the business that can be as long as it needs to be</p>
                <p className="price">$ 4.00</p>
              </div>
              <div className="catimg">
                <img src={tileimg} />
              </div>
            </div>
            <div className="item">
              <div className="desc">
                <h4>Title</h4>
                <p className="descr">Description of the business that can be as long as it needs to be</p>
                <p className="price">$ 4.00</p>
              </div>
              <div className="catimg">
                <img src={tileimg} />
              </div>
            </div>
            <div className="item">
              <div className="desc">
                <h4>Title</h4>
                <p className="descr">Description of the business that can be as long as it needs to be</p>
                <p className="price">$ 4.00</p>
              </div>
              <div className="catimg">
                <img src={tileimg} />
              </div>
            </div>
            <div className="item">
              <div className="desc">
                <h4>Title</h4>
                <p className="descr">Description of the business that can be as long as it needs to be</p>
                <p className="price">$ 4.00</p>
              </div>
              <div className="catimg">
                <img src={tileimg} />
              </div>
            </div>
          </div>
        </div>
        // (descriptionJson ? (
        //   <RichTextContent descriptionJson={descriptionJson} />
        // ) : (
        //   <p>{description}</p>
        // ))
      }
      {activeTab === TABS.Category2 &&
        <>
          <div className="cat">
            <h3>Category 1</h3>
            <div className="cat-list">
              <div className="item">
                <div className="desc">
                  <h4>Title</h4>
                  <p className="descr">Description of the business that can be as long as it needs to be</p>
                  <p className="price">$ 4.00</p>
                </div>
                <div className="catimg">
                  <img src={tileimg} />
                </div>
              </div>
              <div className="item">
                <div className="desc">
                  <h4>Title</h4>
                  <p className="descr">Description of the business that can be as long as it needs to be</p>
                  <p className="price">$ 4.00</p>
                </div>
                <div className="catimg">
                  <img src={tileimg} />
                </div>
              </div>
              <div className="item">
                <div className="desc">
                  <h4>Title</h4>
                  <p className="descr">Description of the business that can be as long as it needs to be</p>
                  <p className="price">$ 4.00</p>
                </div>
                <div className="catimg">
                  <img src={tileimg} />
                </div>
              </div>
              <div className="item">
                <div className="desc">
                  <h4>Title</h4>
                  <p className="descr">Description of the business that can be as long as it needs to be</p>
                  <p className="price">$ 4.00</p>
                </div>
                <div className="catimg">
                  <img src={tileimg} />
                </div>
              </div>
            </div>
          </div>
          <div className="cat">
            <h3>Category 2</h3>
            <div className="cat-list">
              <div className="item">
                <div className="desc">
                  <h4>Title</h4>
                  <p className="descr">Description of the business that can be as long as it needs to be</p>
                  <p className="price">$ 4.00</p>
                </div>
                <div className="catimg">
                  <img src={tileimg} />
                </div>
              </div>
              <div className="item">
                <div className="desc">
                  <h4>Title</h4>
                  <p className="descr">Description of the business that can be as long as it needs to be</p>
                  <p className="price">$ 4.00</p>
                </div>
                <div className="catimg">
                  <img src={tileimg} />
                </div>
              </div>
            </div>
          </div>
          <div className="cat">
            <h3>Category 3</h3>
            <div className="cat-list">
              <div className="item">
                <div className="desc">
                  <h4>Title</h4>
                  <p className="descr">Description of the business that can be as long as it needs to be</p>
                  <p className="price">$ 4.00</p>
                </div>
                <div className="catimg">
                  <img src={tileimg} />
                </div>
              </div>
              <div className="item">
                <div className="desc">
                  <h4>Title</h4>
                  <p className="descr">Description of the business that can be as long as it needs to be</p>
                  <p className="price">$ 4.00</p>
                </div>
                <div className="catimg">
                  <img src={tileimg} />
                </div>
              </div>
            </div>
          </div>
          <div className="cat">
            <h3>Category 4</h3>
            <div className="cat-list">
              <div className="item">
                <div className="desc">
                  <h4>Title</h4>
                  <p className="descr">Description of the business that can be as long as it needs to be</p>
                  <p className="price">$ 4.00</p>
                </div>
                <div className="catimg">
                  <img src={tileimg} />
                </div>
              </div>
              <div className="item">
                <div className="desc">
                  <h4>Title</h4>
                  <p className="descr">Description of the business that can be as long as it needs to be</p>
                  <p className="price">$ 4.00</p>
                </div>
                <div className="catimg">
                  <img src={tileimg} />
                </div>
              </div>
            </div>
          </div>
          <div className="cat">
            <h3>Category 5</h3>
            <div className="cat-list">
              <div className="item">
                <div className="desc">
                  <h4>Title</h4>
                  <p className="descr">Description of the business that can be as long as it needs to be</p>
                  <p className="price">$ 4.00</p>
                </div>
                <div className="catimg">
                  <img src={tileimg} />
                </div>
              </div>
              <div className="item">
                <div className="desc">
                  <h4>Title</h4>
                  <p className="descr">Description of the business that can be as long as it needs to be</p>
                  <p className="price">$ 4.00</p>
                </div>
                <div className="catimg">
                  <img src={tileimg} />
                </div>
              </div>
            </div>
          </div>
        </>
      }
      {activeTab === TABS.Category3 &&
      <div className="cat">
      <h3>Category 1</h3>
      <div className="cat-list">
        <div className="item">
          <div className="desc">
            <h4>Title</h4>
            <p className="descr">Description of the business that can be as long as it needs to be</p>
            <p className="price">$ 4.00</p>
          </div>
          <div className="catimg">
            <img src={tileimg} />
          </div>
        </div>
        <div className="item">
          <div className="desc">
            <h4>Title</h4>
            <p className="descr">Description of the business that can be as long as it needs to be</p>
            <p className="price">$ 4.00</p>
          </div>
          <div className="catimg">
            <img src={tileimg} />
          </div>
        </div>
        <div className="item">
          <div className="desc">
            <h4>Title</h4>
            <p className="descr">Description of the business that can be as long as it needs to be</p>
            <p className="price">$ 4.00</p>
          </div>
          <div className="catimg">
            <img src={tileimg} />
          </div>
        </div>
        <div className="item">
          <div className="desc">
            <h4>Title</h4>
            <p className="descr">Description of the business that can be as long as it needs to be</p>
            <p className="price">$ 4.00</p>
          </div>
          <div className="catimg">
            <img src={tileimg} />
          </div>
        </div>
      </div>
    </div>
        // (descriptionJson ? (
        //   <RichTextContent descriptionJson={descriptionJson} />
        // ) : (
        //     <p>{description}</p>
        //   ))
          }
      {activeTab === TABS.Category4 &&
      <div className="cat">
      <h3>Category 1</h3>
      <div className="cat-list">
        <div className="item">
          <div className="desc">
            <h4>Title</h4>
            <p className="descr">Description of the business that can be as long as it needs to be</p>
            <p className="price">$ 4.00</p>
          </div>
          <div className="catimg">
            <img src={tileimg} />
          </div>
        </div>
        <div className="item">
          <div className="desc">
            <h4>Title</h4>
            <p className="descr">Description of the business that can be as long as it needs to be</p>
            <p className="price">$ 4.00</p>
          </div>
          <div className="catimg">
            <img src={tileimg} />
          </div>
        </div>
        <div className="item">
          <div className="desc">
            <h4>Title</h4>
            <p className="descr">Description of the business that can be as long as it needs to be</p>
            <p className="price">$ 4.00</p>
          </div>
          <div className="catimg">
            <img src={tileimg} />
          </div>
        </div>
        <div className="item">
          <div className="desc">
            <h4>Title</h4>
            <p className="descr">Description of the business that can be as long as it needs to be</p>
            <p className="price">$ 4.00</p>
          </div>
          <div className="catimg">
            <img src={tileimg} />
          </div>
        </div>
      </div>
    </div>
        // (descriptionJson ? (
        //   <RichTextContent descriptionJson={descriptionJson} />
        // ) : (
        //     <p>{description}</p>
        //   ))
          }
      {/* {activeTab === TABS.Category2 && (
        <S.AttributeList>
          {attributes &&
            attributes.map((attribute, index) => (
              <li key={index}>
                <S.AttributeName>{attribute.attribute.name}: </S.AttributeName>{" "}
                {attribute.values.map(value => value.name).join(", ")}
              </li>
            ))}
        </S.AttributeList>
      )}
       {activeTab === TABS.TEST &&
        (descriptionJson ? (
          <RichTextContent descriptionJson={descriptionJson} />
        ) : (
          <p>{description}</p>
        ))} */}
    </S.Wrapper>
  );
};
