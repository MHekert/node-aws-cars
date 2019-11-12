import listCar from "../models/cars/listCar";
import handleResponse from "../handleResponse";

export const list = async () => {
	try {
		const cars = await listCar();
		return handleResponse(200, cars.Items);
	} catch (err) {
		return handleResponse(err.statusCode || 500, { error: "Couldn't fetch the item." });
	}
};
