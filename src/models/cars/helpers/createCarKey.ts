import ICarKey from "../../../interfaces/ICarKey";

const createCarKey = (brand: string, model: string): ICarKey => ({
    brand: brand.toLowerCase(),
    model: model.toLowerCase()
});

export default createCarKey;
