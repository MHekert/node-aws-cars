const isNotEmptyString = str => str && typeof str === "string";

const isValidVariantsArr = variants => Array.isArray(variants) && !variants.map(isNotEmptyString).includes(false);

const isValidCarInput = (brand, model, variants) =>
    isNotEmptyString(brand) && isNotEmptyString(model) && isValidVariantsArr(variants);

const variantsToLower = variants => variants.map(el => el.toLowerCase());

module.exports = {
    isNotEmptyString,
    isValidVariantsArr,
    isValidCarInput,
    variantsToLower
};
