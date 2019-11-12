import getCar from "../models/cars/getCar";
import createCarKey from "../models/cars/helpers/createCarKey";
import handleResponse from "../handleResponse";

export const get = async (event: any) => {
	const { brand, model } = event.pathParameters;

	try {
		const key = createCarKey(brand, model);
		const cars = await getCar(key);
		return handleResponse(200, cars.Item || {});
	} catch (err) {
		return handleResponse(err.statusCode || 500, { error: "Couldn't fetch the item." });
	}
};
