import gql from "graphql-tag";

import { TypedQuery } from "../../../../core/queries";

import { Business } from "./Businesses";

export const searchProductsQuery = gql`
  query{
    storesCategories{
      value
      label
    }
  }
`;
export const BusinessesQuery = TypedQuery<
  Business,
  {}
>(searchProductsQuery);
