import { difference, union, isEmpty } from "lodash";
import handleResponse from "../handleResponse";
import { isValidVariantsArr } from "../util";
import createUpdateProps from "../models/cars/helpers/createCarUpdateProps";
import updateCar from "../models/cars/updateCar";
import getCar from "../models/cars/getCar";

export const update = async (event: any) => {
	const { brand, model } = event.pathParameters;
	const { variants, modelYears } = JSON.parse(event.body);

	if (!isValidVariantsArr(variants) && !modelYears) return handleResponse(400, { error: "Validation Failed" });

	const { Item } = await getCar(brand, model);
	const newVariants: Array<string> = union(Item.variants, variants);
	const variantsDiff = difference(newVariants, Item.variants);

	if (isEmpty(variantsDiff) && (!modelYears || modelYears === Item.modelYears))
		return handleResponse(400, { error: "No changes" });

	const { UpdateExpression, ExpressionAttributeValues } = createUpdateProps(newVariants, modelYears);

	try {
		const cars = await updateCar(brand, model, ExpressionAttributeValues, UpdateExpression);
		return handleResponse(200, cars.Attributes);
	} catch (err) {
		return handleResponse(err.statusCode || 500, { error: "Couldn't update the item." });
	}
};
