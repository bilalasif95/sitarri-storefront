import React from "react";

import { DropdownSelect, Icon, IconButton, Label } from "@components/atoms";

import { BusinessesQuery } from "./queries";

import * as S from "./styles";
import { IProps } from "./types";

import SearchIcon from "src/images/search.svg"

import { useHandlerWhenClickedOutside } from "../../../hooks";
import ReactSVG from "react-svg";

const sortOptionsByPrice = [
  {
    label: "£0-10",
    value: { gte: 0, lte: 10 },
  },
  {
    label: "£11-20",
    value: { gte: 11, lte: 20 },
  },
  {
    label: "£21-30",
    value: { gte: 21, lte: 30 },
  },
  {
    label: "£31-40",
    value: { gte: 31, lte: 40 },
  },
  {
    label: "£41-50",
    value: { gte: 41, lte: 50 },
  },
  {
    label: "£50+",
    value: { gte: 50, lte: 50 },
  },

];
const sortOptionsByDistance = [
  {
    label: "<100m",
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
const sortOptionsByType = [
  {
    label: "All",
    value: null,
  },
  {
    label: "Products",
    value: "products",
  },
  {
    label: "Shops",
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

  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [isResultsMenuOpened, setResultsMenuIsOpen] = React.useState(false);
  const [isSortMenuOpened, setSortMenuIsOpen] = React.useState(false);
  const [categoriesMenu, setCategoriesMenu] = React.useState(false);
  const [distanceMenu, setDistanceMenu] = React.useState(false);
  const [priceMenu, setPriceMenu] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const onCategoriesMenuClick = () => {
    if (categoriesMenu) {
      return setCategoriesMenu(false)
    }
    setCategoriesMenu(true)
  }

  const onDistanceMenuClick = () => {
    if (distanceMenu) {
      return setDistanceMenu(false)
    }
    setDistanceMenu(true)
  }

  const onPriceMenuClick = () => {
    if (priceMenu) {
      return setPriceMenu(false)
    }
    setPriceMenu(true)
  }

  const { setElementRef } = useHandlerWhenClickedOutside(() => {
    setMenuIsOpen(false);
    setCategoriesMenu(false);
    setDistanceMenu(false);
  });

  const { setElementRef: setResultsElementRef } = useHandlerWhenClickedOutside(() => {
    setResultsMenuIsOpen(false)
  });

  const { setElementRef: setSortElementRef } = useHandlerWhenClickedOutside(() => {
    setSortMenuIsOpen(false)
  });

  const resultType: any = sortOptionsByType.find(
    option => option.label === activeSortTypeBase
  )
  return (
    <S.Wrapper>
      <S.Top>
        <S.Element>
          <S.Sort data-cy="dropdown-select" ref={setElementRef()}>
            <S.SortLine
              sortby=""
              data-cy="dropdown-select-input"
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
              <Label>
                <div>
                  <svg id="Layer_1" data-name="Layer 1" xmlns="https://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 20 20"><defs><style>.cls-1</style></defs><title>icon11</title><rect className="cls-1" x="0.1" y="5.21" width="19.8" height="0.71" /><rect className="cls-1" x="0.1" y="9.67" width="19.8" height="0.71" /><rect className="cls-1" x="0.1" y="14.12" width="19.8" height="0.71" /><circle className="cls-1" cx="4.63" cy="5.54" r="2.04" /><circle className="cls-1" cx="12.51" cy="10" r="2.04" /><circle className="cls-1" cx="7.34" cy="14.46" r="2.04" />
                  </svg>
                </div>
              </Label>
              <Label>Filters</Label>
              <S.Indicator rotate={String(menuIsOpen)}>
                <Icon name="select_arrow" color={"#000"} size={8} />
              </S.Indicator>
            </S.SortLine>
            {menuIsOpen &&
            <S.menuDropdown>
              <S.Submenu>
                <S.SubmenuTitle>Filters<IconButton name="x" size={8} onClick={() => setMenuIsOpen(!menuIsOpen)} /></S.SubmenuTitle>
                <S.SubmenuBox>
                  <S.SubmenuList categoriesMenu={false}  onClick={() => setMenuIsOpen(!menuIsOpen)}>None</S.SubmenuList>
                  <S.SubmenuList categoriesMenu={categoriesMenu} onClick={onCategoriesMenuClick}>Categories</S.SubmenuList>
                  {categoriesMenu &&
                    <BusinessesQuery>
                      {({ data }) => {
                        // const categories = () => {
                        //   let orders: any = data && data.storesCategories;
                        //   if (search) {
                        //     console.log("=========if")
                        //     orders = data && data.storesCategories.filter((category: any) => {
                        //       return category.label.toLowerCase().includes(search.toLowerCase())
                        //     })
                        //     return orders
                        //   }
                        //   else {
                        //     console.log("=========else")
                        //     orders = data && data.storesCategories
                        //     return orders
                        //   }
                        // }
                        // console.log(categories, "======")
                        return (
                          <>
                            <S.Input>
                              <ReactSVG path={SearchIcon} />
                              <input type="text" placeholder="Categories" value={search} onChange={(e) => setSearch(e.target.value)} />
                            </S.Input>
                            <DropdownSelect
                              sortBy="Sort by"
                              type="BusinessBase"
                              onChange={onChange}
                              menuIsOpen={categoriesMenu}
                              options={data && data.storesCategories}
                              value={data && data.storesCategories.find(
                                (option: any) => option.label === activeSortBusinessType
                              )}
                            />
                          </>
                        )
                      }}
                    </BusinessesQuery>
                  }
                  <S.SubmenuList categoriesMenu={distanceMenu} onClick={onDistanceMenuClick}>Distance</S.SubmenuList>
                  {distanceMenu &&
                    <DropdownSelect
                      sortBy="Sort by"
                      type="DistanceBase"
                      onChange={onChange}
                      menuIsOpen={distanceMenu}
                      options={sortOptionsByDistance}
                      value={sortOptionsByDistance.find(
                        option => option.label === acitveSortDistanceBase
                      )}
                    />
                  }
                  <S.SubmenuList categoriesMenu={priceMenu} onClick={onPriceMenuClick}>Price</S.SubmenuList>
                  {priceMenu &&
                    <DropdownSelect
                      sortBy="Filters"
                      type="PriceBase"
                      onChange={onChange}
                      menuIsOpen={priceMenu}
                      options={sortOptionsByPrice}
                      value={sortOptionsByPrice.find(
                        option => option.label === activeSortOption
                      )}
                    />
                  }
                </S.SubmenuBox>
              </S.Submenu>
              </S.menuDropdown>
            }
          </S.Sort>
        </S.Element>
        {/* <S.Element>
          <S.Sort>
            <BusinessesQuery>
            {({ data }) => {
              return(
                <DropdownSelect
                  sortBy="Sort by"
                  type="BusinessBase"
                  onChange={onChange}
                  options={data && data.storesCategories}
                  value={data && data.storesCategories.find(
                    option => option.label === activeSortBusinessType
                  )}
                />
              )}}
            </BusinessesQuery>
          </S.Sort>
        </S.Element> */}
        <S.Element>
          <S.Sort data-cy="dropdown-select" ref={setSortElementRef()}>
            <S.SortLine
              sortby=""
              data-cy="dropdown-select-input"
              onClick={() => setSortMenuIsOpen(!isSortMenuOpened)}
            >
              <Label>
                <div><svg id="Layer_1" data-name="Layer 1" xmlns="https://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 20 20"><defs><style>.cls-1</style></defs><title>filter</title><g id="filter"><path className="cls-1" d="M.11,16.59h4.4v-2.2H.11Zm0-13.18v2.2H19.89V3.41Zm0,7.69H13.3V8.9H.11Z" /></g></svg></div>
              </Label>
              <Label>Sort by</Label>
              <S.Indicator rotate={String(isSortMenuOpened)}>
                <Icon name="select_arrow" color={"#000"} size={8} />
              </S.Indicator>
            </S.SortLine>
            {isSortMenuOpened &&
              <div>
                <div>Sort by<IconButton name="x" size={8} onClick={() => setSortMenuIsOpen(!isSortMenuOpened)} /></div>
                <div onClick={() => setSortMenuIsOpen(!isSortMenuOpened)}>Default</div>
                <div>Price: High to Low</div>
                <div>Price: Low to High</div>
                {/* <div>Rating</div> */}
                <div>Distance</div>
              </div>
            }
            {/* <DropdownSelect
              sortBy="Sort by"
              type="DistanceBase"
              onChange={onChange}
              options={sortOptionsByDistance}
              value={sortOptionsByDistance.find(
                option => option.label === acitveSortDistanceBase
              )}
            /> */}
          </S.Sort>
        </S.Element>
        <S.Element>
          <S.Sort data-cy="dropdown-select" ref={setResultsElementRef()}>
            <S.SortLine
              sortby="Results:"
              data-cy="dropdown-select-input"
              onClick={() => setResultsMenuIsOpen(!isResultsMenuOpened)}
            >
              <Label>
                <div><svg xmlns="https://www.w3.org/2000/svg" height="15px" width="13px" className="SearchIcon" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" /></svg></div>
              </Label>
              <Label>Results: {resultType.label}</Label>
              <S.Indicator rotate={String(isResultsMenuOpened)}>
                <Icon name="select_arrow" color={"#000"} size={8} />
              </S.Indicator>
            </S.SortLine>
            {isResultsMenuOpened &&
              <>
                <div>Results<IconButton name="x" size={8} onClick={() => setResultsMenuIsOpen(!isResultsMenuOpened)} /></div>
                <DropdownSelect
                  sortBy="Results:"
                  type="showType"
                  onChange={onChange}
                  menuIsOpen={isResultsMenuOpened}
                  options={sortOptionsByType}
                  value={sortOptionsByType.find(
                    option => option.label === activeSortTypeBase
                  )}
                />
              </>
            }
          </S.Sort>
        </S.Element>
      </S.Top>
    </S.Wrapper>
  );
};
