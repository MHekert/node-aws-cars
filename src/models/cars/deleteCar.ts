import dynamodb from "../../dynamodb";
import createKey from "./helpers/createCarKey";

const deleteCar = (brand: string, model: string) => {
	const key = createKey(brand, model);
	const params = {
		TableName: process.env.DYNAMODB_TABLE_CARS,
		Key: key
	};
	return dynamodb.delete(params).promise();
};

export default deleteCar;
