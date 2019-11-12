import dynamodb from "../../dynamodb";
import ICar from "../../interfaces/ICar";

const saveCar = (item: ICar) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE_CARS,
        Item: item
    };

    return dynamodb.put(params).promise();
};

export default saveCar;
