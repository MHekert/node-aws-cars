import { difference, union, isEmpty } from "lodash";
import { isValidVariantsArr } from "../../cars/util";
import ICar from "../interfaces/ICar";
import { getCarType, updateCarType } from "../types/databaseFunctions";

export const updateCarControllerFactory = (
	getCar: getCarType,
	updateCar: updateCarType
) => async (item: ICar) => {
		const { brand, model, variants, modelYears} = item;

		if (!isValidVariantsArr(variants) && !modelYears)
			throw new Error("validationFailed");

		const { Item } = await getCar({ brand, model });
		if (!Item)
			throw new Error("notFound");
		const oldVariants = (Item && variants) || [];
		const newVariants: Array<string> = union(oldVariants || [], variants);
		const variantsDiff = difference(newVariants, oldVariants);

		if (isEmpty(variantsDiff) && (!modelYears || modelYears === Item.modelYears))
			throw new Error("noChanges");

		const newItem = {...item, variants: newVariants, modelYears};
	try {
		const cars = await updateCar(item, newItem);
		return cars.Attributes;
	} catch (err) {
		throw new Error("databaseError");
	}
};
