/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLatLonPostcodes = /* GraphQL */ `
  query GetLatLonPostcodes($id: ID!) {
    getLatLonPostcodes(id: $id) {
      id
      lat
      lon
      postcode
      locality
      state
      category
      type
      SA3
      SA3_name
      SA4
      SA4_name
      region
      lga_code
      LGA_region
      electroate
      charge_zone
      status
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
        locality
        state
        category
        type
        SA3
        SA3_name
        SA4
        SA4_name
        region
        lga_code
        LGA_region
        electroate
        charge_zone
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
