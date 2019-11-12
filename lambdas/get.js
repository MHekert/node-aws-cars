const dynamodb = require("../dynamodb");

module.exports.get = async event => {
    const { brand, model } = event.pathParameters;
    const params = {
        TableName: process.env.DYNAMODB_TABLE_CARS,
        Key: {
            brand: brand.toLowerCase(),
            model: model.toLowerCase()
        }
    };

    try {
        const cars = await dynamodb.get(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(cars.Item || [])
        };
    } catch (err) {
        return {
            statusCode: err.statusCode || 501,
            body: JSON.stringify({ error: "Couldn't fetch the item." })
        };
    }
};
