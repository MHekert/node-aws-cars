import dynamodb from "../../dynamodb";
import createUpdateProps from "./helpers/createCarUpdateProps";
import createCarKey from "./helpers/createCarKey";
import ICar from "../interfaces/ICar";

const updateCar = async (item: ICar, newItem: ICar) => {
	const key = createCarKey(item);
	const {variants, modelYears} = newItem;
	const { UpdateExpression, ExpressionAttributeValues } = createUpdateProps(variants, modelYears);
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
