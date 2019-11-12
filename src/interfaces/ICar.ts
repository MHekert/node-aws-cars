import ICarKey from "./ICarKey";

export default interface ICar extends ICarKey {
    variants: Array<string>;
    modelYears: string;
}
