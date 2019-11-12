const dynamodb = require("../dynamodb");

module.exports.list = async () => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE_CARS
    };

    try {
        const cars = await dynamodb.scan(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(cars.Items)
        };
    } catch (err) {
        return {
            statusCode: error.statusCode || 501,
            body: JSON.stringify({ error: "Couldn't fetch the item." })
        };
    }
};
