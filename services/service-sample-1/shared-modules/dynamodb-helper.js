const AWS = require('aws-sdk');
const Winston = require('winston');

export default class Dynamo {

    constructor(options) {
        if (process.env.IS_OFFLINE) {
            this.options = {
                region: 'localhost',
                endpoint: 'http://localhost:8000',
                credentials: {
                    accessKeyId: 'devAccessKeyId',
                    secretAccessKey: 'devSecretAccessKey',
                }
            }
            Winston.level = 'debug';
            Winston.info("Accessing Dynamodb in offline mode");
        } else {
            this.options = options;
        }
    }

    getDocClient() {
        let dynamodb;
        try {
            dynamodb = new AWS.DynamoDB.DocumentClient(this.options);
        } catch (error) {
            Winston.error("Unable to return dynamodb document client. Error:", JSON.stringify(error, null, 2));
            throw error;
        }
        return dynamodb;
    }

    getCoreClient() {
        let dynamodb;
        try {
            dynamodb = new AWS.DynamoDB(this.options);

        } catch (error) {
            Winston.error("Unable to return dynamodb core client. Error:", JSON.stringify(error, null, 2));
            throw error;
        }
        return dynamodb;
    }

}