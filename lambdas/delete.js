const dynamodb = require("../dynamodb");

module.exports.delete = async event => {
    const { brand, model } = event.pathParameters;
    const params = {
        TableName: process.env.DYNAMODB_TABLE_CARS,
        Key: {
            brand: brand.toLowerCase(),
            model: model.toLowerCase()
        }
    };

    try {
        await dynamodb.delete(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({})
        };
    } catch (err) {
        return {
            statusCode: err.statusCode || 501,
            body: JSON.stringify({ error: "Couldn't remove item." })
        };
    }
};
