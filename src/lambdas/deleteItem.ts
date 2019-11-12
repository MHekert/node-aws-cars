import deleteCar from "../models/cars/deleteCar";
import handleResponse from "../handleResponse";

export const deleteItem = async (event: any) => {
	const { brand, model } = event.pathParameters;

	try {
		await deleteCar(brand, model);
		return handleResponse(200, {});
	} catch (err) {
		return handleResponse(err.statusCode || 500, { error: "Couldn't remove item." });
	}
};
