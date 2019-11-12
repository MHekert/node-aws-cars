import dynamodb from "../../dynamodb";
import createKey from "./helpers/createCarKey";

const getCar = (brand: string, model: string) => {
	const key = createKey(brand, model);
	const params = {
		TableName: process.env.DYNAMODB_TABLE_CARS,
		Key: key
	};

	return dynamodb.get(params).promise();
};

export default getCar;
