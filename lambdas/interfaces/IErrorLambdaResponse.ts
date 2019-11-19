export default interface IErrorLambdaResponse {
    body: {
        message: string
    };
    statusCode: number;
}