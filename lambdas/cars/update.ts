import updateCar from "../../src/cars/models/updateCar";
import getCar from "../../src/cars/models/getCar";
import { APIGatewayEvent } from "aws-lambda";
import { updateCarControllerFactory } from "../../src/cars/controllers/updateCarController";
import lambdaResponser from "../lambdaResponser";

export const update = async (event: APIGatewayEvent) => {
	try {
		const { brand, model } = event.pathParameters;
		const { variants, modelYears } = JSON.parse(event.body);
		const updateCarController = updateCarControllerFactory(getCar, updateCar);
		const updatedCar = await updateCarController({brand, model, variants, modelYears});
		return lambdaResponser(null, updatedCar);
	} catch (err) {
		return lambdaResponser(err);
	}
};
