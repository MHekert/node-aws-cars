const dynamodb = require("../dynamodb");
const { isValidCarInput, variantsToLower } = require("../util");

module.exports.create = async event => {
    const timestamp = new Date().getTime();
    const { brand, model, variants, modelYears } = JSON.parse(event.body);

    if (!isValidCarInput(brand, model, variants))
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Validation Failed" })
        };

    const params = {
        TableName: process.env.DYNAMODB_TABLE_CARS,
        Item: {
            brand: brand.toLowerCase(),
            model: model.toLowerCase(),
            modelYears: modelYears || null,
            variants: variants.map(el => el.toLowerCase()),
            createdAt: timestamp,
            updatedAt: timestamp
        }
    };

    try {
        await dynamodb.put(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(params.Item)
        };
    } catch (err) {
        return {
            statusCode: err.statusCode || 501,
            body: JSON.stringify({ error: "Couldn't add to database" })
        };
    }
};
