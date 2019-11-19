import ICarKey from "../../../cars/interfaces/ICarKey";
import ICar from "../../../cars/interfaces/ICar";

const createCarKey = (item: ICar | ICarKey): ICarKey => {
    const { brand, model } = item;
    return {
        brand: brand.toLowerCase(),
        model: model.toLowerCase()
    };
};

export default createCarKey;
