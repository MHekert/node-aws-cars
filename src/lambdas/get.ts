import getCar from "../models/cars/getCar";
import handleResponse from "../handleResponse";

export const get = async (event: any) => {
	const { brand, model } = event.pathParameters;

	try {
		const cars = await getCar(brand, model);
		return handleResponse(200, cars.Item || {});
	} catch (err) {
		return handleResponse(err.statusCode || 500, { error: "Couldn't fetch the item." });
	}
};
