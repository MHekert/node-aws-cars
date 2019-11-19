import listCar from "../../src/cars/models/listCar";
import { listCarControllerFactory } from "../../src/cars/controllers/listCarController";
import lambdaResponser from "../lambdaResponser";

export const list = async () => {
	try {
		const listCarController = listCarControllerFactory(listCar);
		const cars = await listCarController();
		return lambdaResponser(null, cars.Items);
	} catch (err) {
		return lambdaResponser(err);
	}
};
