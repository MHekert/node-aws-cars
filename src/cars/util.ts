export const isNotEmptyString = (str: string) => str && typeof str === "string";

export const isValidVariantsArr = (variants: Array<string>) =>
	Array.isArray(variants) && !variants.map(isNotEmptyString).includes(false);

export const isValidCarInput = (brand: string, model: string, variants: Array<string>) =>
	isNotEmptyString(brand) && isNotEmptyString(model) && isValidVariantsArr(variants);

export const variantsToLower = (variants: Array<string>) => variants.map(el => el.toLowerCase());
