import { isEmpty } from "lodash";
import { isValidCarInput } from "../util";
import saveCar from "../models/cars/saveCar";
import getCar from "../models/cars/getCar";
import handleResponse from "../handleResponse";
import createCarItem from "../models/cars/helpers/createCarItem";

export const create = async (event: any) => {
	const { brand, model, variants, modelYears } = JSON.parse(event.body);
	if (!isValidCarInput(brand, model, variants)) return handleResponse(400, { error: "Validation Failed" });

	try {
		const car = await getCar(brand, model);
		if (!isEmpty(car)) return handleResponse(401, { error: "this item already exists" });

		const item = createCarItem(brand, model, variants, modelYears);
		await saveCar(item);
		return handleResponse(200, item);
	} catch (err) {
		return handleResponse(err.statusCode || 500, { error: "Couldn't add to database" });
	}
};
