import ICar from "../../interfaces/ICar";

const createCarItem = (item: ICar) => {
	const { brand, model, variants, modelYears } = item;
	const timestamp = new Date().getTime();
	return {
		brand: brand.toLowerCase(),
		model: model.toLowerCase(),
		modelYears: modelYears || null,
		variants: variants.map(el => el.toLowerCase()),
		createdAt: timestamp,
		updatedAt: timestamp
	};
};

export default createCarItem;
