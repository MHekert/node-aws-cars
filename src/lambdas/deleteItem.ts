import deleteCar from "../models/cars/deleteCar";
import createCarKey from "../models/cars/helpers/createCarKey";
import handleResponse from "../handleResponse";

export const deleteItem = async (event: any) => {
	const { brand, model } = event.pathParameters;

	try {
		const key = createCarKey(brand, model);
		await deleteCar(key);
		return handleResponse(200, {});
	} catch (err) {
		return handleResponse(err.statusCode || 500, { error: "Couldn't remove item." });
	}
};
