const AWS = require('aws-sdk');

exports.handler = async (event) => {
  const s3 = new AWS.S3();
  const bucketName = 'your-bucket-name';
  const key = 'your-object-key';

  try {
    // Get the S3 object
    const getObjectParams = {
      Bucket: bucketName,
      Key: key
    };
    const response = await s3.getObject(getObjectParams).promise();
    const data = response.Body.toString('utf-8');
    
    // Perform desired operations on the object data
    const processedData = processData(data);

    // Return the processed data
    return {
      statusCode: 200,
      body: processedData
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'Error retrieving the S3 object'
    };
  }
};

function processData(data) {
  // Your custom logic to process the data
  // Replace this with your own implementation
  return data.toUpperCase();
}
