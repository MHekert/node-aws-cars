const dynamodb = require("../dynamodb");
const { isValidVariantsArr } = require("../util");

module.exports.update = async (event, context, callback) => {
    const timestamp = new Date().getTime();
    const { brand, model } = event.pathParameters;
    const { variants, modelYears } = JSON.parse(event.body);

    if (!isValidVariantsArr(variants) && !modelYears)
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Couldn't update the item." })
        };

    let UpdateExpression = "SET updatedAt = :updatedAt";
    let ExpressionAttributeValues = { ":updatedAt": timestamp };
    if (isValidVariantsArr(variants)) {
        UpdateExpression = UpdateExpression + ", variants = :variants";
        ExpressionAttributeValues = { ...ExpressionAttributeValues, ":variants": variants.map(el => el.toLowerCase()) };
    }
    if (modelYears) {
        UpdateExpression = UpdateExpression + ", modelYears = :modelYears";
        ExpressionAttributeValues = { ...ExpressionAttributeValues, ":modelYears": modelYears };
    }

    console.log(UpdateExpression);
    const params = {
        TableName: process.env.DYNAMODB_TABLE_CARS,
        Key: {
            brand: brand.toLowerCase(),
            model: model.toLowerCase()
        },
        ExpressionAttributeValues: ExpressionAttributeValues,
        UpdateExpression: UpdateExpression,
        ReturnValues: "ALL_NEW"
    };

    try {
        const cars = await dynamodb.update(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify(cars.Attributes)
        };
    } catch (err) {
        return {
            statusCode: err.statusCode || 501,
            body: JSON.stringify({ error: "Couldn't update the item." })
        };
    }
};
