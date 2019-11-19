import dynamodb from "../../dynamodb";
import ICarKey from "../interfaces/ICarKey";
import createCarKey from "./helpers/createCarKey";

const getCar = (key: ICarKey) => {
	const serializedKey = createCarKey(key);
	const params = {
		TableName: process.env.DYNAMODB_TABLE_CARS,
		Key: serializedKey
	};

	return dynamodb.get(params).promise();
};

export default getCar;
