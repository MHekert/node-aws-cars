import { isValidCarInput } from "../util";
import saveCar from "../models/cars/saveCar";
import createCarItem from "../models/cars/helpers/createCarItem";
import handleResponse from "../handleResponse";

export const create = async (event: any) => {
	const { brand, model, variants, modelYears } = JSON.parse(event.body);
	if (!isValidCarInput(brand, model, variants)) return handleResponse(400, { error: "Validation Failed" });

	try {
		const item = createCarItem(brand, model, variants, modelYears);
		await saveCar(item);
		return handleResponse(200, item);
	} catch (err) {
		return handleResponse(err.statusCode || 500, { error: "Couldn't add to database" });
	}
};
