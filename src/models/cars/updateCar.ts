import dynamodb from "../../dynamodb";
import ICarExpressionAttributeValues from "../../interfaces/ICarExpressionAttributeValues";
import ICarKey from "../../interfaces/ICarKey";

const updateCar = (
	key: ICarKey,
	ExpressionAttributeValues: ICarExpressionAttributeValues,
	UpdateExpression: string
) => {
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
