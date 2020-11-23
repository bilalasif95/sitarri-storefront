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
          store{
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
    categories(first:100){
     edges{
        node{
          name
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
