import getCar from "../../src/cars/models/getCar";
import saveCar from "../../src/cars/models/saveCar";
import { APIGatewayEvent } from "aws-lambda";
import { createCarControllerFactory } from "../../src/cars/controllers/createCarController";
import lambdaResponser from "../lambdaResponser";

export const create = async (event: APIGatewayEvent) => {
	try {
		const { brand, model, variants, modelYears } = JSON.parse(event.body);
		const createCarController = createCarControllerFactory(getCar, saveCar);
		const createdCar = await createCarController({brand, model, variants, modelYears});
		return lambdaResponser(null, createdCar);
	} catch (err) {
		return lambdaResponser(err);
	}
};
