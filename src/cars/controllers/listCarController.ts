import { listCarType } from "../types/databaseFunctions";

export const listCarControllerFactory = (listCar: listCarType) => async () => {
	try {
		return await listCar();
	} catch (err) {
		throw new Error("databaseError");
	}
};