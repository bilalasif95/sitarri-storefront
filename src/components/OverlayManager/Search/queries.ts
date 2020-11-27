import gql from "graphql-tag";

import { TypedQuery } from "../../../core/queries";
import {
  SearchResults,
  SearchResultsVariables,
} from "./gqlTypes/SearchResults";

// const searchResultsQuery1 = gql`
//   query SearchResults($query: String!) {
//     products(filter: { search: $query }, first: 20) {
//       edges {
//         node {
//           id
//           name
//           thumbnail {
//             url
//             alt
//           }
//           thumbnail2x: thumbnail(size: 510) {
//             url
//           }
//           url
//           category {
//             id
//             name
//           }
//         }
//       }
//       pageInfo {
//         endCursor
//         hasNextPage
//         hasPreviousPage
//         startCursor
//       }
//     }
//   }
// `;
const searchResultsQuery = gql`
query SearchResults($query: String!, $longitude: Float, $latitude: Float){
  search(query:$query){
    products (first:100){
     edges{
        node{
          name
          storess(first:100){
            edges{
              node{
                name
                distance(longitude: $longitude, latitude: $latitude)
                address {
                  streetAddress
                  streetAddress2
                  city
                  country{
                    country
                  }
                }
              }
            }
          }
        }
      }
    }
    stores(first:100){
     edges{
        node{
          name
          distance(longitude: $longitude, latitude: $latitude)
            address {
              streetAddress
              streetAddress2
              city
              country{
                country
              }
            }
        }
      }
    }
  }
}`;

export const TypedSearchResults = TypedQuery<
  SearchResults,
  SearchResultsVariables
>(searchResultsQuery);

const searchResultsQueryByRating = gql`
query SearchResultsByRating($longitude: Float, $latitude: Float){
    stores(first:100, sortBy: {direction: DESC, field: RATING}){
     edges{
        node{
          name
          distance(longitude: $longitude, latitude: $latitude)
            address {
              streetAddress
              streetAddress2
              city
              country{
                country
              }
            }
        }
      }
    }
}`;

export const TypedSearchResultsByRating = TypedQuery<
  SearchResults,
  SearchResultsVariables
>(searchResultsQueryByRating);

const searchResultsQueryByDistance = gql`
query SearchResultsByDistance($location: LocationFilterInput, $longitude: Float, $latitude: Float){
    stores(first:100, filter: {
      location: $location
    }){
     edges{
        node{
          name
          distance(longitude: $longitude, latitude: $latitude)
            address {
              streetAddress
              streetAddress2
              city
              country{
                country
              }
            }
        }
      }
    }
}`;

export const TypedSearchResultsByDistance = TypedQuery<
  SearchResults,
  SearchResultsVariables
>(searchResultsQueryByDistance);

const searchResultsQueryByPrice = gql`
query SearchResultsByPrice($longitude: Float, $latitude: Float){
    products (first:100, sortBy: {direction: ASC, field: PRICE}){
     edges{
        node{
          name
          storess(first:100){
            edges{
              node{
                name
                distance(longitude: $longitude, latitude: $latitude)
                address {
                  streetAddress
                  streetAddress2
                  city
                  country{
                    country
                  }
                }
              }
            }
          }
        }
      }
    }
}`;

export const TypedSearchResultsByPrice = TypedQuery<
  SearchResults,
  SearchResultsVariables
>(searchResultsQueryByPrice);