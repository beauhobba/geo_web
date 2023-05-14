/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLatLonPostcodes = /* GraphQL */ `
  query GetLatLonPostcodes($id: ID!) {
    getLatLonPostcodes(id: $id) {
      id
      lat
      lon
      postcode
      createdAt
      updatedAt
    }
  }
`;
export const listLatLonPostcodes = /* GraphQL */ `
  query ListLatLonPostcodes(
    $filter: ModelLatLonPostcodesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLatLonPostcodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        lat
        lon
        postcode
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
