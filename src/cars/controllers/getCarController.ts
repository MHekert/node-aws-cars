import ICarKey from "../interfaces/ICarKey";
import { getCarType } from "../types/databaseFunctions";

export const getCarControllerFactory = (getCar: getCarType) => async (item: ICarKey) => {
	try {
		return await getCar(item);
	} catch (err) {
		throw new Error("databaseError");
	}
};