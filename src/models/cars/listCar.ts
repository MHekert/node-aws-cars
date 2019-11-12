import dynamodb from "../../dynamodb";

const listCar = () => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE_CARS
    };

    return dynamodb.scan(params).promise();
};

export default listCar;
