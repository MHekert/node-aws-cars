import handleResponse from "../handleResponse";
import { isValidVariantsArr } from "../util";
import createUpdateProps from "../models/cars/helpers/createCarUpdateProps";
import updateCar from "../models/cars/updateCar";
import createCarKey from "../models/cars/helpers/createCarKey";

export const update = async (event: any) => {
	const { brand, model } = event.pathParameters;
	const { variants, modelYears } = JSON.parse(event.body);

	if (!isValidVariantsArr(variants) && !modelYears) return handleResponse(400, { error: "Validation Failed" });

	const key = createCarKey(brand, model);
	const { UpdateExpression, ExpressionAttributeValues } = createUpdateProps(variants, modelYears);

	try {
		const cars = await updateCar(key, ExpressionAttributeValues, UpdateExpression);
		return handleResponse(200, cars.Attributes);
	} catch (err) {
		return handleResponse(err.statusCode || 500, { error: "Couldn't update the item." });
	}
};
