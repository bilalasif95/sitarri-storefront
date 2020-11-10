import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
// import {
//   basicProductFragment,
//   productPricingFragment,
// } from "../../views/Product/queries";
// import { FeaturedProducts } from "./gqlTypes/FeaturedProducts";
import { RootCategories } from "./gqlTypes/BusinessCategories";

// export const featuredProducts = gql`
//   ${basicProductFragment}
//   ${productPricingFragment}
//   query FeaturedProducts {
//     shop {
//       homepageCollection {
//         id
//         products(first: 20) {
//           edges {
//             node {
//               ...BasicProductFields
//               ...ProductPricingField
//               category {
//                 id
//                 name
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export const TypedFeaturedProductsQuery = TypedQuery<FeaturedProducts, {}>(
//   featuredProducts
// );

export const businessCategories = gql`
  query BusinessCategories {
    businessCategories(first: 100) {
      edges {
        node {
          id
          backgroundImage {
            alt
            url
          }
          name
          description
          seoDescription
          seoTitle
        }
      }
    }
  }
`;

export const TypedFeaturedProductsQuery = TypedQuery<RootCategories, {}>(
  businessCategories
);