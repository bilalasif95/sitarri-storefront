import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
// import {
//   basicProductFragment,
//   productPricingFragment,
// } from "../../views/Product/queries";
// import { FeaturedProducts } from "./gqlTypes/FeaturedProducts";
import { RootCategories, RootCategoriesVariables } from "./gqlTypes/BusinessCategories";

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
  query BusinessCategories(
    $latitude: Float,
    $location: LocationFilterInput,
    $longitude: Float,
    $rating: Float,
  ) {
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
    stores(first:100,filter: {
      location: $location
      rating: $rating
    }
    sortBy: {
      direction: DESC
      field: RATING
    }
    ){
      edges {
        node {
          id
          name
          mondayOpeningTime
          mondayClosingTime
          tuesdayOpeningTime
          tuesdayClosingTime
          wednesdayOpeningTime
          wednesdayClosingTime
          thursdayOpeningTime
          thursdayClosingTime
          fridayOpeningTime
          fridayClosingTime
          saturdayOpeningTime
          saturdayClosingTime
          sundayOpeningTime
          sundayClosingTime
          mondayOpeningStatus
          tuesdayOpeningStatus
          wednesdayOpeningStatus
          thursdayOpeningStatus
          fridayOpeningStatus
          saturdayOpeningStatus
          sundayOpeningStatus
          business{
            logo
            businesscategory{
              name
            }
          }
          category
          description
          totalReviews
          distance(longitude: $longitude, latitude: $latitude)
          address{
            id
            address
            longitude
            latitude
          }
          rating
          images{
            url
          }
          logo
          openingHours
          tags{
            name
          }
          closingHours
        }
      }
    }
  }
`;

export const TypedFeaturedProductsQuery = TypedQuery<RootCategories, RootCategoriesVariables>(
  businessCategories
);