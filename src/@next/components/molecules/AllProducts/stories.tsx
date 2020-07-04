import { storiesOf } from "@storybook/react";
import React from "react";

import { AllProducts } from ".";
import { PRODUCT } from "./fixtures";

storiesOf("@components/molecules/AllProducts", module)
  .addParameters({ component: AllProducts })
  .add("default", () => (
    <div style={{ width: "400px" }}>
      <AllProducts product={PRODUCT} />
    </div>
  ));
