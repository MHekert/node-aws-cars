import dynamodb from "../../dynamodb";
import ICarKey from "../../interfaces/ICarKey";

const deleteCar = (key: ICarKey) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE_CARS,
        Key: key
    };
    return dynamodb.delete(params).promise();
};

export default deleteCar;
