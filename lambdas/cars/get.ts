import getCar from "../../src/cars/models/getCar";
import { APIGatewayEvent } from "aws-lambda";
import { getCarControllerFactory } from "../../src/cars/controllers/getCarController";
import lambdaResponser from "../lambdaResponser";

export const get = async (event: APIGatewayEvent) => {
	try {
		const { brand, model } = event.pathParameters;
		const getCarController = getCarControllerFactory(getCar);
		const car = await getCarController({brand, model});
		return lambdaResponser(null, car);
	} catch (err) {
		return lambdaResponser(err);
	}
};
