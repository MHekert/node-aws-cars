import ICarKey from "../interfaces/ICarKey";
import { deleteCarType } from "../types/databaseFunctions";

export const deleteCarControllerFactory = (deleteCar: deleteCarType) => async (item: ICarKey) => {
	try {
		return await deleteCar(item);
	} catch (err) {
		throw new Error("databaseError");
	}
};