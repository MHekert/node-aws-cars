import deleteCar from "../../src/cars/models/deleteCar";
import { APIGatewayEvent } from "aws-lambda";
import { deleteCarControllerFactory } from "../../src/cars/controllers/deleteCarController";
import lambdaResponser from "../lambdaResponser";

export const deleteItem = async (event: APIGatewayEvent) => {
	try {
		const { brand, model } = event.pathParameters;
		const deleteCarController = deleteCarControllerFactory(deleteCar);
		const deletedCar = await deleteCarController({brand, model});
		return lambdaResponser(null, deletedCar);
	} catch (err) {
		return lambdaResponser(err);
	}
};
