# Serverless Microservices (AWS API GAteway, AWS Lamda and AWS DynamoDB)

## Creating a New Service

- Copy one of the services as a template and rename as a service e.g sample-service-x
- Go inside the copied directory (e.g cd sample-service-x) Run `npm install`
- To start the offline server run `npm start`

## Creating a New Service from scratch
- Create an empty serverless service by using `serverless create --template aws-nodejs --path sample-service-1`
- Install Serverless Offline Plugin `npm install --save-dev serverless-offline`
- Install Serverless DynamoDB Local Plugin `npm install --save-dev serverless-dynamodb-local`
- Install Winston NPM for application logging `npm install winston`
- Install Config NPM for application configurations `npm install config`

## Running DynamoDB
You can either start dynamodb using `serverless dynamodb install` and `serverless dynamodb start` or run dynamodb in a docker container using `docker run -v <base-path>/dynamodb_local_db -p 8000:8000 cnadiminti/dynamodb-local:latest`

e.g `<base-path>/dynamod_local_db` => `/Workspace/DynamoDB/dynamodb_local_db`