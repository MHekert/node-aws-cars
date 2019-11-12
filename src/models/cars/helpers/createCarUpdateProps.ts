import ICarExpressionAttributeValues from "../../../interfaces/ICarExpressionAttributeValues";
import { isValidVariantsArr, variantsToLower } from "../../../util";

const createUpdateProps = (variants: Array<string>, modelYears: string) => {
	const timestamp = new Date().getTime();

	let UpdateExpression = "SET updatedAt = :updatedAt";
	let ExpressionAttributeValues: ICarExpressionAttributeValues = {
		":updatedAt": timestamp
	};
	if (isValidVariantsArr(variants)) {
		UpdateExpression = UpdateExpression + ", variants = :variants";
		ExpressionAttributeValues = { ...ExpressionAttributeValues, ":variants": variantsToLower(variants) };
	}
	if (modelYears) {
		UpdateExpression = UpdateExpression + ", modelYears = :modelYears";
		ExpressionAttributeValues = { ...ExpressionAttributeValues, ":modelYears": modelYears };
	}

	return { UpdateExpression, ExpressionAttributeValues };
};

export default createUpdateProps;
