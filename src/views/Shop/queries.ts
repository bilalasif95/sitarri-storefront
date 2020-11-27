import gql from "graphql-tag";
import { TypedQuery } from "../../core/queries";
import {
  ProductDetails,
  ProductDetailsVariables,
} from "./gqlTypes/ProductDetails";
import { VariantList, VariantListVariables } from "./gqlTypes/VariantList";


export const priceFragment = gql`
  fragment Price on TaxedMoney {
    gross {
      amount
      currency
    }
    net {
      amount
      currency
    }
  }
`;

export const basicProductFragment = gql`
  fragment BasicProductFields on Product {
    id
    name
    thumbnail {
      url
      alt
    }
    thumbnail2x: thumbnail(size: 510) {
      url
    }
  }
`;

export const productPricingFragment = gql`
  ${priceFragment}
  fragment ProductPricingField on Product {
    pricing {
      onSale
      priceRangeUndiscounted {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
      priceRange {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
    }
  }
`;

export const selectedAttributeFragment = gql`
  fragment SelectedAttributeFields on SelectedAttribute {
    attribute {
      id
      name
    }
    values {
      id
      name
    }
  }
`;

export const productVariantFragment = gql`
  ${priceFragment}
  fragment ProductVariantFields on ProductVariant {
    id
    sku
    name
    isAvailable
    quantityAvailable(countryCode: $countryCode)
    images {
      id
      url
      alt
    }
    pricing {
      onSale
      priceUndiscounted {
        ...Price
      }
      price {
        ...Price
      }
    }
    attributes {
      attribute {
        id
        name
      }
      values {
        id
        name
        value: name
      }
    }
  }
`;

// export const productDetailsQuery = gql`
//   ${basicProductFragment}
//   ${selectedAttributeFragment}
//   ${productVariantFragment}
//   ${productPricingFragment}
//   query ProductDetails($id: ID!, $countryCode: CountryCode) {
//     product(id: $id) {
//       ...BasicProductFields
//       ...ProductPricingField
//       descriptionJson
//       category {
//         id
//         name
//         products(first: 3) {
//           edges {
//             node {
//               ...BasicProductFields
//               ...ProductPricingField
//             }
//           }
//         }
//       }
//       images {
//         id
//         url
//       }
//       attributes {
//         ...SelectedAttributeFields
//       }
//       variants {
//         ...ProductVariantFields
//       }
//       seoDescription
//       seoTitle
//       isAvailable
//     }
//   }
// `;

export const productDetailsQuery = gql`
 query StoreDetails ($id:ID!, $longitude: Float, $latitude: Float){
   store(id:$id){
    id
    name
    status
    description
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
      websiteUrl
      facebookUrl
      twitterUrl
      deliverooUrl
      uberEatsUrl
      instagramUrl
      businesscategory{
        name
      }
      productCategoryBusiness(first:100){
        edges{
          node{
            id
            name
            products(first:100){
              edges{
                node{
                  id
                  name
                  description
                  images{
                    url
                  }
                  pricing{
                    priceRange{
                      start{
                        gross{
                          currency
                          amount
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    distance(longitude: $longitude, latitude: $latitude)
    tags{name}
    images{
      id
      url
      alt
      favicon
      faviconAlt
      imageUrl
      title
    }
    address {
      id
      streetAddress
      streetAddress2
      city
      longitude
      latitude
      country {
        country
      }
    }
     storeCategory(first:100) {
          edges{
            node{
              id
              name
              products(first:100){
                edges{
            node{
              id
             name
              pricing{
                priceRange{
                  start{
                    gross{
                      currency
                      amount
                    }
                  }
                }
              }
              descriptionJson
              description
              images{
                url}
            }
          }
              }
            }
          }
        }
        storeProduct(first:100) {
          edges{
            node{
              name
              id
            }
          }
        }
    minPrice
    maxPrice
    category
    rating
    totalReviews
    logo
    websiteUrl
    phone
    facebookUrl
    googleMapUrl
    twitterUrl
    deliverooUrl
    uberEatsUrl
    instagramUrl
    openingHours
    closingHours
  }
  }
`;
// FIXME: Check how to handle pagination of `productVariants` in the UI.
// We need allow the user view  all cart items regardless of pagination.
export const productVariantsQuery = gql`
  ${basicProductFragment}
  ${productVariantFragment}
  query VariantList($ids: [ID!], $countryCode: CountryCode) {
    productVariants(ids: $ids, first: 100) {
      edges {
        node {
          ...ProductVariantFields
          product {
            ...BasicProductFields
          }
        }
      }
    }
  }
`;

export const TypedProductDetailsQuery = TypedQuery<
  ProductDetails,
  ProductDetailsVariables
>(productDetailsQuery);



export const TypedProductVariantsQuery = TypedQuery<
  VariantList,
  VariantListVariables
>(productVariantsQuery);
