import dynamodb from "../../dynamodb";
import ICarExpressionAttributeValues from "../../interfaces/ICarExpressionAttributeValues";
import createCarKey from "./helpers/createCarKey";

const updateCar = (
	brand: string,
	model: string,
	ExpressionAttributeValues: ICarExpressionAttributeValues,
	UpdateExpression: string
) => {
	const key = createCarKey(brand, model);
	const params = {
		TableName: process.env.DYNAMODB_TABLE_CARS,
		Key: key,
		ExpressionAttributeValues: ExpressionAttributeValues,
		UpdateExpression: UpdateExpression,
		ReturnValues: "ALL_NEW"
	};

	return dynamodb.update(params).promise();
};

export default updateCar;
