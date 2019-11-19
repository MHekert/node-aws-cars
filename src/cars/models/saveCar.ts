import dynamodb from "../../dynamodb";
import ICar from "../interfaces/ICar";
import createCarItem from "./helpers/createCarItem";

const saveCar = async (item: ICar) => {
	const serializedCarItem = createCarItem(item);
	const params = {
		TableName: process.env.DYNAMODB_TABLE_CARS,
		Item: serializedCarItem
	};

	await dynamodb.put(params).promise();
	return serializedCarItem;
};

export default saveCar;
