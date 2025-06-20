import React from "react";
import ReactSelect from "react-select";
import { ThemeContext } from "styled-components";

import { ErrorMessage } from "../ErrorMessage";
import * as S from "./styles";
import { IProps } from "./types";

const optionStyle = (customTheme: any) => ({
  option: (
    provided: any,
    state: {
      isSelected: any;
      isFocused: boolean;
      customTheme: any;
      isDisabled: boolean;
    }
  ) => {
    return {
      ...provided,
      alignItems: "center",
      background: "#fff",
      backgroundColor: state.isSelected
      //   // ? customTheme.colors.primaryLight
      //   // : state.isFocused
        ? customTheme.colors.primaryTransparent
        : "white",
        color: state.isDisabled
        ? customTheme.colors.lightFont
        : customTheme.colors.dark,

      border: "none",
      display: "flex",
      fontWeight: state.isSelected && customTheme.typography.boldFontWeight,
      margin: "0 auto",
      minHeight: "34px",
      verticalAlign: "middle",
      width: "100%",
    };
  },
});

export const Select: React.FC<IProps> = ({
  value,
  onChange,
  clearable,
  clearValue,
  name,
  isIcon,
  options,
  isOptionDisabled,
  customComponents,
  defaultValue,
  menuIsOpen,
  customStyles,
  optionLabelKey = "label",
  optionValueKey = "value",
  errors,
  ...props
}: IProps) => {
  const customTheme = React.useContext(ThemeContext);
  const handleChange = (value: any) => {
    if (onChange) {
      name ? onChange(value, name) : onChange(value);
    }
  };

  return (
    <S.Wrapper isIcon={isIcon}>
      <ReactSelect
        defaultValue={defaultValue}
        onChange={handleChange}
        value={value}
        clearValue={clearValue}
        menuIsOpen={menuIsOpen}
        menuShouldScrollIntoView={true}
        tabSelectsValue={false}
        getOptionLabel={option => option[optionLabelKey]}
        getOptionValue={option => option[optionValueKey]}
        openMenuOnFocus={true}
        styles={{ ...optionStyle(customTheme), ...customStyles }}
        options={options}
        isOptionDisabled={isOptionDisabled}
        placeholder={""}
        components={customComponents}
        isClearable={clearable}
        {...props}
      ></ReactSelect>
      <S.ErrorMessages>
        <ErrorMessage errors={errors} />
      </S.ErrorMessages>
    </S.Wrapper>
  );
};
