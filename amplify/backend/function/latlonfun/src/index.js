


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// const { getLatLonPostcodes } = require('./getLatLonPostcodes');
const { API } = require('aws-amplify');

// async function getLatLonPostcodes() {
//     try {
//       const graphqlQuery = `
//         query MyQuery {
//           listLatLonPostcodes(limit: 10) {
//             nextToken
//             items {
//               LGA_region
//               SA3
//               SA3_name
//               SA4
//               SA4_name
//               category
//               createdAt
//               charge_zone
//               electroate
//               id
//               lat
//               lga_code
//               locality
//               lon
//               postcode
//               region
//               state
//               status
//               type
//               updatedAt
//             }
//           }
//         }
//       `;
//       const response = await API.graphql({ query: graphqlQuery });
//       console.log(response); // log the response to the console
//       return response.data.listLatLonPostcodes.items;
//     } catch (error) {
//       console.error(error);
//       return error;
//     }
// }

    
exports.handler = async (event) => {
    console.log('Here');
    // const postcodes = await getLatLonPostcodes();

    // console.log(postcodes);
    // console.log(postcodes);


    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
};
