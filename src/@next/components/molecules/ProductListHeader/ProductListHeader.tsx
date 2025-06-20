import { SelectMenu } from "evergreen-ui";
import React from "react";
import ReactSVG from "react-svg";

import { DropdownSelect, Icon, IconButton, Label } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

import AllIcon from "src/images/All Icon.svg";
import CategoriesIcon from "src/images/Categories Icon.svg";
import defaultIcon from "src/images/Default Icon.svg";
import Distance from "src/images/Distance Icon.svg";
import SearchIcon from "src/images/FilterSearch.svg";
import PriceHigh from "src/images/Price H to L Icon.svg";
import PriceIcon from "src/images/Price Icon.svg";
import PriceLow from "src/images/Price L to H Icon.svg";
import ProductIcon from "src/images/Products Icon.svg";
import RatingsIcon from "src/images/Ratings icon copy.svg";
import ShopsIcon from "src/images/Shops Icons.svg";

import { useHandlerWhenClickedOutside } from "../../../hooks";

const sortOptionsByPrice = [
  {
    label: "Any",
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
    label: "Any",
    value: null,
  },
  {
    label: "10 mi",
    value: { value: 10, symbol: "KILOMETER" },
  },
  {
    label: "5 mi",
    value: { value: 5, symbol: "KILOMETER" },
  },
  {
    label: "1 mi",
    value: { value: 1, symbol: "KILOMETER" },
  },
  {
    label: "500 m",
    value: { value: 500, symbol: "METER" },
  },
  {
    label: "100 m",
    value: { value: 100, symbol: "METER" },
  },
  // {
  //   label: ">10km",
  //   value: { value: 0, symbol: "KILOMETER" },
  // },
];
const sortOptionsByType: any = [
  {
    icon: AllIcon,
    label: "All",
    value: null,
  },
  {
    icon: ProductIcon,
    label: "Products",
    value: "products",
  },
  {
    icon: ShopsIcon,
    label: "Shops",
    value: "stores",
  },
];
const sortOptionsByRating: any = [
  {
    label: "Any",
    value: "0",
  },
  {
    label: "3.5",
    value: "3.5",
  },
  {
    label: "4.0",
    value: "4.0",
  },
  {
    label: "4.5",
    value: "4.5",
  },
];

const sorting: any = [
  {
    icon: defaultIcon,
    label: "Default",
    value: null,
  },
  {
    icon: PriceHigh,
    label: "Price: High to Low",
    value: "-price",
  },
  {
    icon: PriceLow,
    label: "Price: Low to High",
    value: "price",
  },
  {
    icon: RatingsIcon,
    label: "Rating",
    value: "rating",
  },
  {
    icon: Distance,
    label: "Distance",
    value: "distance",
  },
];

export const ProductListHeader: React.FC<IProps> = ({
  categories,
  activeSortOption,
  activeSortBusinessType,
  activeSortTypeBase,
  activeSortedField,
  acitveSortDistanceBase,
  activeRatingFilter,
  onChange,
}: IProps) => {

  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const [isResultsMenuOpened, setResultsMenuIsOpen] = React.useState(false);
  const [isSortMenuOpened, setSortMenuIsOpen] = React.useState(false);
  const [categoriesMenu, setCategoriesMenu] = React.useState(false);
  const [distanceMenu, setDistanceMenu] = React.useState(false);
  const [ratingMenu, setRatingMenu] = React.useState(false);
  const [priceMenu, setPriceMenu] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [filtered, setFiltered] = React.useState(categories);

  const onCategoriesMenuClick = () => {
    if (categoriesMenu) {
      return setCategoriesMenu(false)
    }
    setCategoriesMenu(true);
    setDistanceMenu(false);
    setRatingMenu(false);
    setPriceMenu(false);
  }

  const onRatingMenuClick = () => {
    if (ratingMenu) {
      return setRatingMenu(false)
    }
    setRatingMenu(true);
    setDistanceMenu(false);
    setCategoriesMenu(false);
    setPriceMenu(false);
  }

  const onDistanceMenuClick = () => {
    if (distanceMenu) {
      return setDistanceMenu(false)
    }
    setDistanceMenu(true);
    setRatingMenu(false);
    setCategoriesMenu(false);
    setPriceMenu(false);
  }

  const onPriceMenuClick = () => {
    if (priceMenu) {
      return setPriceMenu(false)
    }
    setPriceMenu(true);
    setRatingMenu(false);
    setDistanceMenu(false);
    setCategoriesMenu(false);
  }

  const { setElementRef } = useHandlerWhenClickedOutside(() => {
    setMenuIsOpen(false);
    setCategoriesMenu(false);
    setDistanceMenu(false);
    setRatingMenu(false);
    setPriceMenu(false);
  });

  const { setElementRef: setResultsElementRef } = useHandlerWhenClickedOutside(() => {
    setResultsMenuIsOpen(false)
  });

  const { setElementRef: setSortElementRef } = useHandlerWhenClickedOutside(() => {
    setSortMenuIsOpen(false)
  });

  const resultType: any = sortOptionsByType.find(
    (option: any) => option.label === activeSortTypeBase
  )
  return (
    <S.Wrapper>
      {window.innerWidth <= 540 ?
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
                    <svg style={{ marginBottom: '4px' }} id="Layer_1" data-name="Layer 1" xmlns="https://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 20 20"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
                    </svg>
                  </div>
                </Label>
                <Label>Filters</Label>
                <S.Indicator rotate={String(menuIsOpen)}>
                  <Icon name="select_arrow" color={"#40464A"} width={8} height={8} />
                </S.Indicator>
              </S.SortLine>
              {menuIsOpen &&
                <S.menuDropdown>
                  <S.Submenu ref={setElementRef()}>
                    <S.Menuborder></S.Menuborder>
                    <S.SubmenuTitle>Filters<IconButton name="x" size={8} onClick={() => setMenuIsOpen(!menuIsOpen)} /></S.SubmenuTitle>
                    <S.SubmenuBox type="categories">
                      {/* <S.MenuLink>
                      <S.SubmenuList categoriesMenu={false} onClick={() => {
                        setMenuIsOpen(!menuIsOpen);
                        onChange("", "none");
                        setFiltered(categories);
                        setSearch("");
                        setCategoriesMenu(false);
                        setDistanceMenu(false);
                        setPriceMenu(false);
                      }}>None</S.SubmenuList>
                    </S.MenuLink> */}

                      <S.MenuLink><S.SubmenuList type="categories" categoriesMenu={true}
                      // onClick={onCategoriesMenuClick}
                      ><img src={CategoriesIcon} />Categories</S.SubmenuList></S.MenuLink>
                      {/* {categoriesMenu &&
                      <> */}
                      <S.Input>
                        <ReactSVG path={SearchIcon} />
                        <input type="text" placeholder="Categories" value={search} onChange={(e) => {
                          setSearch(e.target.value)
                          let currentList = [];
                          let newList = [];
                          if (e.target.value !== "") {
                            currentList = categories;
                            newList = currentList.filter((item: any) => {
                              const lc = item.label.toLowerCase();
                              const filter = e.target.value.toLowerCase();
                              return lc.includes(filter);
                            })
                          }
                          else {
                            newList = categories
                          }
                          setFiltered(newList)
                        }
                        } />
                      </S.Input>
                      <DropdownSelect
                        sortBy="Sort by"
                        type="BusinessBase"
                        isIcon={false}
                        onChange={onChange}
                        menuIsOpen={true}
                        options={filtered}
                        value={categories.find(
                          (option: any) => option.label === activeSortBusinessType
                        )}
                      />
                      {/* </>
                    } */}
                    </S.SubmenuBox>
                    <S.SubmenuBox type="">
                      <div className="MobileRating">
                        <S.MenuLink><S.SubmenuList type="" categoriesMenu={true}
                        // onClick={onDistanceMenuClick}
                        ><img src={RatingsIcon} />Ratings</S.SubmenuList></S.MenuLink>
                        {/* {distanceMenu && */}
                        <DropdownSelect
                          sortBy="Sort by"
                          type="RatingBase"
                          onChange={onChange}
                          isIcon={true}
                          menuIsOpen={true}
                          options={sortOptionsByRating}
                          value={sortOptionsByRating.find(
                            (option: any) => option.label === activeRatingFilter
                          )}
                        />
                      </div>
                      {/* } */}
                    </S.SubmenuBox>
                    <S.SubmenuBox type="distance">
                      <S.MenuLink><S.SubmenuList type="" categoriesMenu={true}
                      // onClick={onDistanceMenuClick}
                      ><img src={Distance} />Distance</S.SubmenuList></S.MenuLink>
                      {/* {distanceMenu && */}
                      <DropdownSelect
                        sortBy="Sort by"
                        type="DistanceBase"
                        isIcon={false}
                        onChange={onChange}
                        menuIsOpen={true}
                        options={sortOptionsByDistance}
                        value={sortOptionsByDistance.find(
                          option => option.label === acitveSortDistanceBase
                        )}
                      />
                      {/* } */}
                    </S.SubmenuBox>
                    <S.SubmenuBox type="price">
                      <S.MenuLink><S.SubmenuList type="" categoriesMenu={true}
                      // onClick={onPriceMenuClick}
                      ><img src={PriceIcon} />Price</S.SubmenuList></S.MenuLink>
                      {/* {priceMenu && */}
                      <DropdownSelect
                        sortBy="Filters"
                        type="PriceBase"
                        isIcon={false}
                        onChange={onChange}
                        menuIsOpen={true}
                        options={sortOptionsByPrice}
                        value={sortOptionsByPrice.find(
                          option => option.label === activeSortOption
                        )}
                      />
                      {/* } */}
                    </S.SubmenuBox>

                  </S.Submenu>

                  <S.MobileSheet>
                    <button onClick={() => {
                      onChange("", "none");
                      setFiltered(categories);
                      setSearch("");
                    }} className="ClearBtn btn btn-default">Clear</button>
                    <button onClick={() => setMenuIsOpen(!menuIsOpen)} className="ApplyBtn btn btn-default">Apply</button>
                  </S.MobileSheet>
                </S.menuDropdown>
              }
            </S.Sort>
          </S.Element>
          <S.Element>
            <S.Sort data-cy="dropdown-select" ref={setSortElementRef()}>
              <SelectMenu
                title="Sort By"
                closeOnSelect
                hasFilter={false}
                options={sorting}
                selected={activeSortedField.label}
                onSelect={(value: any) => {
                  onChange(value, "sorting")
                  setSortMenuIsOpen(false)
                }}
              >
                <span onClick={() => setSortMenuIsOpen(!isSortMenuOpened)}>
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
                      <Icon name="select_arrow" color={"#40464A"} width={8} height={8} />
                    </S.Indicator>
                  </S.SortLine>
                </span>
              </SelectMenu>
            </S.Sort>
          </S.Element>
          <S.ResultElement>
            <S.Sort data-cy="dropdown-select" ref={setResultsElementRef()}>
              <SelectMenu
                title="Results"
                closeOnSelect
                hasFilter={false}
                options={sortOptionsByType}
                selected={activeSortTypeBase.label}
                onSelect={(value: any) => {
                  onChange(value, "showType")
                  setResultsMenuIsOpen(false)
                }}
              >
                <span onClick={() => setResultsMenuIsOpen(!isResultsMenuOpened)}>
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
                      <Icon name="select_arrow" color={"#40464A"} width={8} height={8} />
                    </S.Indicator>
                  </S.SortLine>
                </span>
              </SelectMenu>
            </S.Sort>
          </S.ResultElement>
        </S.Top>
        :
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
                    <svg style={{ marginBottom: '4px' }} id="Layer_1" data-name="Layer 1" xmlns="https://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 20 20"><path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" />
                    </svg>
                  </div>
                </Label>
                <Label>Filters</Label>
                <S.Indicator rotate={String(menuIsOpen)}>
                  <Icon name="select_arrow" color={"#40464A"} width={8} height={8} />
                </S.Indicator>
              </S.SortLine>
              {menuIsOpen &&
                <S.menuDropdown>
                  <S.Submenu>
                    <S.Menuborder></S.Menuborder>
                    <S.SubmenuTitle>Filters<IconButton name="x" size={8} onClick={() => setMenuIsOpen(!menuIsOpen)} /></S.SubmenuTitle>
                    <S.SubmenuBox type="categories">
                      {/* <S.MenuLink>
                      <S.SubmenuList type="" categoriesMenu={false} onClick={() => {
                        setMenuIsOpen(!menuIsOpen);
                        onChange("", "none");
                        setFiltered(categories);
                        setSearch("");
                        setCategoriesMenu(false);
                        setDistanceMenu(false);
                        setPriceMenu(false);
                      }}>None</S.SubmenuList>
                    </S.MenuLink> */}

                      <S.MenuLink><S.SubmenuList type="" categoriesMenu={categoriesMenu}
                        onClick={onCategoriesMenuClick}
                      ><img src={CategoriesIcon} />Categories</S.SubmenuList></S.MenuLink>
                      {categoriesMenu &&
                        <>
                          <S.Input>
                            <ReactSVG path={SearchIcon} />
                            <input type="text" placeholder="Categories" value={search} onChange={(e) => {
                              setSearch(e.target.value)
                              let currentList = [];
                              let newList = [];
                              if (e.target.value !== "") {
                                currentList = categories;
                                newList = currentList.filter((item: any) => {
                                  const lc = item.label.toLowerCase();
                                  const filter = e.target.value.toLowerCase();
                                  return lc.includes(filter);
                                })
                              }
                              else {
                                newList = categories
                              }
                              setFiltered(newList)
                            }
                            } />
                          </S.Input>
                          <DropdownSelect
                            sortBy="Sort by"
                            type="BusinessBase"
                            onChange={onChange}
                            isIcon={false}
                            menuIsOpen={categoriesMenu}
                            options={filtered}
                            value={categories.find(
                              (option: any) => option.label === activeSortBusinessType
                            )}
                          />
                        </>
                      }
                    </S.SubmenuBox>
                    <S.SubmenuBox type="">
                      <S.MenuLink><S.SubmenuList type="" categoriesMenu={ratingMenu}
                        onClick={onRatingMenuClick}
                      ><img src={RatingsIcon} />Ratings</S.SubmenuList></S.MenuLink>
                      {ratingMenu &&
                        <DropdownSelect
                          sortBy="Sort by"
                          type="RatingBase"
                          onChange={onChange}
                          isIcon={true}
                          menuIsOpen={ratingMenu}
                          options={sortOptionsByRating}
                          value={sortOptionsByRating.find(
                            (option: any) => option.label === activeRatingFilter
                          )}
                        />
                      }
                    </S.SubmenuBox>
                    <S.SubmenuBox type="distance">
                      <S.MenuLink><S.SubmenuList type="" categoriesMenu={distanceMenu}
                        onClick={onDistanceMenuClick}
                      ><img src={Distance} />Distance</S.SubmenuList></S.MenuLink>
                      {distanceMenu &&
                        <DropdownSelect
                          sortBy="Sort by"
                          type="DistanceBase"
                          onChange={onChange}
                          isIcon={false}
                          menuIsOpen={distanceMenu}
                          options={sortOptionsByDistance}
                          value={sortOptionsByDistance.find(
                            option => option.label === acitveSortDistanceBase
                          )}
                        />
                      }
                    </S.SubmenuBox>
                    <S.SubmenuBox type="price">
                      <S.MenuLink><S.SubmenuList type="" categoriesMenu={priceMenu}
                        onClick={onPriceMenuClick}
                      ><img src={PriceIcon} />Price</S.SubmenuList></S.MenuLink>
                      {priceMenu &&
                        <DropdownSelect
                          sortBy="Filters"
                          type="PriceBase"
                          isIcon={false}
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
                  <S.MobileSheet>
                    <button onClick={() => {
                      onChange("", "none");
                      setFiltered(categories);
                      setSearch("");
                    }} className="ClearBtn btn btn-default">Clear</button>
                    <button onClick={() => setMenuIsOpen(!menuIsOpen)} className="ApplyBtn btn btn-default">Apply</button>
                  </S.MobileSheet>
                </S.menuDropdown>
              }
            </S.Sort>
          </S.Element>
          <S.Element>
            <S.Sort data-cy="dropdown-select" ref={setSortElementRef()}>
              <SelectMenu
                title="Sort By"
                closeOnSelect
                hasFilter={false}
                options={sorting}
                selected={activeSortedField.label}
                onSelect={(value: any) => {
                  onChange(value, "sorting")
                  setSortMenuIsOpen(false)
                }}
              >
                <span onClick={() => setSortMenuIsOpen(!isSortMenuOpened)}>
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
                      <Icon name="select_arrow" color={"#40464A"} width={8} height={8} />
                    </S.Indicator>
                  </S.SortLine>
                </span>
              </SelectMenu>
            </S.Sort>
          </S.Element>
          <S.ResultElement>
            <S.Sort data-cy="dropdown-select" ref={setResultsElementRef()}>
              <SelectMenu
                title="Results"
                closeOnSelect
                hasFilter={false}
                options={sortOptionsByType}
                selected={activeSortTypeBase.label}
                onSelect={(value: any) => {
                  onChange(value, "showType")
                  setResultsMenuIsOpen(false)
                }}
              >
                <span onClick={() => setResultsMenuIsOpen(!isResultsMenuOpened)}>
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
                      <Icon name="select_arrow" color={"#40464A"} width={8} height={8} />
                    </S.Indicator>
                  </S.SortLine>
                </span>
              </SelectMenu>
            </S.Sort>
          </S.ResultElement>
        </S.Top>
      }
    </S.Wrapper>
  );
};
