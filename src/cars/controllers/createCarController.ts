import { isEmpty } from "lodash";
import { isValidCarInput } from "../util";
import ICar from "../interfaces/ICar";
import { getCarType, saveCarType } from "../types/databaseFunctions";

export const createCarControllerFactory = (
	getCar: getCarType,
	saveCar: saveCarType
 ) => async (item: ICar) => {
	try {
		const { brand, model, variants } = item;
		if (!isValidCarInput(brand, model, variants))
			throw new Error("validationFailed");
		const car = await getCar({ brand, model });
		if (!isEmpty(car))
			throw new Error("itemExists");
		return await saveCar(item);
	} catch (err) {
		throw new Error("databaseError");
	}
};