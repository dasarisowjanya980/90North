const AWS = require('aws-sdk');

// Initialize the S3 client
const s3 = new AWS.S3();

exports.handler = async (event) => {
    try {
        // Parse input from the event
        const { fileName, fileContent, bucketName } = JSON.parse(event.body);

        // Validate input
        if (!fileName || !fileContent || !bucketName) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing required parameters: fileName, fileContent, or bucketName." }),
            };
        }

        // Prepare S3 upload parameters
        const params = {
            Bucket: bucketName,
            Key: fileName, // File name with extension (e.g., "example.pdf")
            Body: Buffer.from(fileContent, 'base64'), // Decode base64 content
            ContentType: 'application/pdf', // Set content type (adjust if needed)
        };

        // Upload to S3
        await s3.putObject(params).promise();

        return {
            statusCode: 200,
            body: JSON.stringify({ message: `File uploaded successfully to ${bucketName}/${fileName}` }),
        };
    } catch (error) {
        console.error("Error uploading file to S3:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to upload file to S3.", details: error.message }),
        };
    }
};
