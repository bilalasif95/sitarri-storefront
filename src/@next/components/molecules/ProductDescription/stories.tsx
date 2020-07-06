import { storiesOf } from "@storybook/react";
import React from "react";

import { ProductDescription } from ".";
import { attributes  } from "./fixtures";

storiesOf("@components/molecules/ProductDescription", module)
  .addParameters({ component: ProductDescription })
  .add("default", () => (
    <ProductDescription storeCategory={attributes}  />
  ));
