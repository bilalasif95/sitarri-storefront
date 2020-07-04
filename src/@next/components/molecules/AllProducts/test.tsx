import { mount, shallow } from "enzyme";
import "jest-styled-components";
import React from "react";

import { BusinessTile } from "..";
import { PRODUCT } from "./fixtures";

describe("<BusinessTile />", () => {
  it("exists", () => {
    const wrapper = shallow(<BusinessTile product={PRODUCT} />);

    expect(wrapper.exists()).toEqual(true);
  });
  it("has product name", () => {
    const wrapper = shallow(<BusinessTile product={PRODUCT} />);

    expect(wrapper.text()).toContain(PRODUCT.name);
  });
  it("has price displayed", () => {
    const wrapper = mount(<BusinessTile product={PRODUCT} />);

    expect(wrapper.text()).toContain(
      String(PRODUCT.pricing!.priceRange!.start!.gross!.amount)
    );
  });
});
