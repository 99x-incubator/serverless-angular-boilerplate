'use strict';
const Dynamo = require('../shared-modules/dynamodb-helper.js');

module.exports.listItems = (event, context, callback) => {

    Dynamo.init();
    let dynamo = Dynamo.getCoreClient();

    dynamo.listTables(function(err, data) {
        console.log(JSON.stringify(data, null, '  '));
    });
        
    var docClient = Dynamo.getDocClient();

   // setting conditions for the query
    var params = {
        TableName : 'Items',
        KeyConditionExpression : 'itemId = :itemId',
        ExpressionAttributeValues : {
            ':itemId' : 'aa84fb90-12c4-11e1-840d-7b32c5ee775a'        
        }
    };

    //execute the query 
    docClient.query(params, function(err, data) {
        if (err) {
            dataObj = err;
            console.log("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            //dataObj = 'Query succeeded';
            console.log("Query succeeded 1");
            console.log(data.Items);
            data.Items.forEach(function(item) {
                 console.log(item);
            });
        }
    });

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v1.0! Your function executed successfully!'  ,
            input: event,
        }),
    };

    callback(null, response);

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};