import dynamodb from "../../dynamodb";
import ICarKey from "../../interfaces/ICarKey";

const getCar = (key: ICarKey) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE_CARS,
        Key: key
    };

    return dynamodb.get(params).promise();
};

export default getCar;
