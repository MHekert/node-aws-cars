const handleResponse = (statusCode: number, body: object) => ({
    statusCode,
    body: JSON.stringify(body)
});

export default handleResponse;
