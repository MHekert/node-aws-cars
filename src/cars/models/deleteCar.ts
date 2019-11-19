import dynamodb from "../../dynamodb";
import createKey from "./helpers/createCarKey";
import ICar from "../interfaces/ICar";

const deleteCar = (item: ICar) => {
	const key = createKey(item);
	const params = {
		TableName: process.env.DYNAMODB_TABLE_CARS,
		Key: key
	};
	return dynamodb.delete(params).promise();
};

export default deleteCar;
