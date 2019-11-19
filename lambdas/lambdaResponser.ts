import errorList from "./errorList";

const lambdaResponser = (error: Error | null, body?: object | null) => {
    let response;
    if (error) {
        const { message } = error;
        const errorCode = (<any>errorList)[<string>message];
        response = {
            statusCode: errorCode || 500,
            body: JSON.stringify({ error: { message } })
        };
    } else {
        response = {
            statusCode: 200,
            body: JSON.stringify({data: { ...body }})
        };
    }
    return response;
};

export default lambdaResponser;
