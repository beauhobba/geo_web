/* Amplify Params - DO NOT EDIT
	API_GEOWEB_GRAPHQLAPIENDPOINTOUTPUT
	API_GEOWEB_GRAPHQLAPIIDOUTPUT
	API_GEOWEB_GRAPHQLAPIKEYOUTPUT
	AUTH_GEOWEB_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const mapbox_key =  process.env.MAPBOX

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
           
            "Access-Control-Allow-Headers": "*"
        }, 
        body: JSON.stringify(mapbox_key),
    };
};
