const createCarItem = (brand: string, model: string, variants: Array<string>, modelYears: string) => {
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
