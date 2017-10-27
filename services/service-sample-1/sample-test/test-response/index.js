'use strict';

export default class TestResponse {

    constructor(event) {
        this.event = event;
    }

    get responseBody() {
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: this.event,
            }),
        }
    }
}