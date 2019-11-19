import ICarKey from "../interfaces/ICarKey";
import ICar from "../interfaces/ICar";

export type getCarType = (carKey: ICarKey) => Promise<{ Item: ICar}>;
export type deleteCarType = (car: ICarKey) => Promise<{}>;
export type listCarType = () => Promise<{ Items: Array<ICar> }>;
export type updateCarType = (car: ICar, updatedCar: ICar) => Promise<{Attributes: ICar}>;
export type saveCarType = (car: ICar) => Promise<ICar>;
