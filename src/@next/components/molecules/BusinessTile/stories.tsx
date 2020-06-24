import { storiesOf } from "@storybook/react";
import React from "react";

import { BusinessTile } from ".";
import { PRODUCT } from "./fixtures";

storiesOf("@components/molecules/BusinessTile", module)
  .addParameters({ component: BusinessTile })
  .add("default", () => (
    <div style={{ width: "400px" }}>
      <BusinessTile product={PRODUCT} />
    </div>
  ));
