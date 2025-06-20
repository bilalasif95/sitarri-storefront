import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import { productPricingFragment } from "../Product/queries";
import {
  SearchProducts,
  SearchProductsVariables,
} from "./gqlTypes/SearchProducts";

// export const searchProductsQuery = gql`
//   ${productPricingFragment}
//   query SearchProducts(
//     $query: String!
//     $attributes: [AttributeInput]
//     $pageSize: Int
//     $sortBy: ProductOrder
//     $after: String
//   ) {
//     products(
//       filter: { search: $query, attributes: $attributes }
//       first: $pageSize
//       sortBy: $sortBy
//       after: $after
//     ) {
//       totalCount
//       edges {
//         node {
//           ...ProductPricingField
//           id
//           name
//           thumbnail {
//             url
//             alt
//           }
//           thumbnail2x: thumbnail(size: 510) {
//             url
//           }
//           category {
//             id
//             name
//           }
//           images {
//             id
//             url
//           }
//         }
//       }
//       pageInfo {
//         endCursor
//         hasNextPage
//       }
//     }
//     attributes(first: 100) {
//       edges {
//         node {
//           id
//           name
//           slug
//           values {
//             id
//             name
//             slug
//           }
//         }
//       }
//     }
//   }
// `;
// location: {
//           latitude: 20.3
//           longitude: 30.4
//           distance: { value: 50, symbol: KILOMETER }
//         },
//  businessCategory: "Cloth" 
export const searchProductsQuery = gql`
  ${productPricingFragment}
  query SearchProducts(
    $query: String!
    $attributes: [AttributeInput]
    $pageSize: Int
    $sortBy: ProductOrder
    $sortByRating: StoreOrder
    $after: String
    $longitude: Float
    $latitude: Float
    $rating: Float
    $Price:PriceRangeInput
    $businessCategory:String
    $location: LocationFilterInput
  ) {
    search(query: $query) {
    products(
      filter: { search: $query, attributes: $attributes, 
       businessCategory: $businessCategory ,
        price:$Price,
        location: $location
        }
      first: $pageSize
      sortBy: $sortBy
      after: $after
    ) {
      totalCount
      edges {
        node {
          ...ProductPricingField
          id
          name
          images{
            url
          }
          description
          descriptionJson
          thumbnail {
            url
            alt
          }
          storess(first:$pageSize){
            edges {
              node {
                name
               id
                address{
                  id
                  address
                }
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
                productss(first: $pageSize) {
                   edges {
                    node {
                      id
                      name
                descriptionJson
                description
                images{
                  url
                }
                      ...ProductPricingField
                    }
                  }
                }
              }
            }
          }
          thumbnail2x: thumbnail(size: 510) {
            url
          }
          category {
            id
            name
          }
          variants{
            id
            name
            stockQuantity
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
    categories(first: $pageSize) {
      edges {
        node {
          name
        }
      }
    }
    stores(filter: {location: $location, rating: $rating} sortBy: $sortByRating first: $pageSize ) {
      edges {
        node {
          name
         id
          address{
            id
            address
          }
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
          productss(first: $pageSize) {
             edges {
              node {
                id
                name
          descriptionJson
          description
          images{
            url
          }
                ...ProductPricingField
              }
            }
          }
        }
      }
    }
  }
    attributes(first: 100) {
      edges {
        node {
          id
          name
          slug
          values {
            id
            name
            slug
          }
        }
      }
    }
  }
`;
export const TypedSearchProductsQuery = TypedQuery<
  SearchProducts,
  SearchProductsVariables
>(searchProductsQuery);
