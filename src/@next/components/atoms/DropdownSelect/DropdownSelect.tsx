import React from "react";
import { components } from "react-select";
import { ThemeContext } from "styled-components";

import { IconButton } from "@components/atoms";

import { Label } from "../Label";
import { Select } from "../Select";
// import ReactSVG from "react-svg";

import { useHandlerWhenClickedOutside } from "../../../hooks";

import { Icon } from "../Icon";
import * as S from "./styles";
import { IProps } from "./types";
// import FilterIcon from "../../../../images/FilterIcon2.svg";
export const DropdownSelect: React.FC<IProps> = ({
  sortBy,
  type,
  options,
  name,
  value,
  onChange,
}: IProps) => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const { setElementRef } = useHandlerWhenClickedOutside(() => {
    setMenuIsOpen(false);
  });

  const customComponents = {
    Control: () => (
      <S.SortLine
        sortby={sortBy}
        data-cy="dropdown-select-input"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <Label>{sortBy === "Filters" ? <div><svg id="Layer_1" data-name="Layer 1" xmlns="https://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 20 20"><defs><style>.cls-1</style></defs><title>icon11</title><rect className="cls-1" x="0.1" y="5.21" width="19.8" height="0.71" /><rect className="cls-1" x="0.1" y="9.67" width="19.8" height="0.71" /><rect className="cls-1" x="0.1" y="14.12" width="19.8" height="0.71" /><circle className="cls-1" cx="4.63" cy="5.54" r="2.04" /><circle className="cls-1" cx="12.51" cy="10" r="2.04" /><circle className="cls-1" cx="7.34" cy="14.46" r="2.04" /></svg></div>
          : sortBy === "Sort by" ?
            <div><svg id="Layer_1" data-name="Layer 1" xmlns="https://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 20 20"><defs><style>.cls-1</style></defs><title>filter</title><g id="filter"><path className="cls-1" d="M.11,16.59h4.4v-2.2H.11Zm0-13.18v2.2H19.89V3.41Zm0,7.69H13.3V8.9H.11Z" /></g></svg></div>
            : sortBy === "Results:" ?
              <div><svg xmlns="https://www.w3.org/2000/svg" height="15px" width="13px" className="SearchIcon" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" /></svg></div>
              : ""
        }</Label>

        <Label>{sortBy}
          {sortBy === "Results:" ? value.label : ""}
        </Label>
        {/* <Label>{value && value.label === "Clear..." || value === undefined ?  `${sortBy}` : value && value.label}</Label> */}
        {/* <Label>{`${sortBy}${value && value.label}`}</Label> */}
        {/* <S.Value>{` ${value ? value.label : ""}`}</S.Value> */}
        <S.Indicator rotate={String(menuIsOpen)}>
          <Icon name="select_arrow" color={"#000"} size={8} />
        </S.Indicator>
      </S.SortLine>
    ),
    IndicatorSeparator: () => null,
    IndicatorsContainer: () => null,
    Option: (props: any) => {
      const customTheme = React.useContext(ThemeContext);
      return <components.Option {...{ customTheme, ...props }} />;
    },
  };

  return (
    <S.Wrapper data-cy="dropdown-select" ref={setElementRef()}>
      {menuIsOpen && <IconButton name="x" size={8} onClick={() => setMenuIsOpen(!menuIsOpen)} />}
      <Select
        options={options}
        value={value}
        onChange={value => {
          setMenuIsOpen(false);
          onChange(value, type);
        }}
        name={name}
        menuIsOpen={menuIsOpen}
        customComponents={customComponents}
      />
    </S.Wrapper>
  );
};
