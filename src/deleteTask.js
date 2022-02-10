const AWS = require('aws-sdk');

deleteTask = (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'})
  const {id} = event.pathParameters
  
}

module.exports = {
  deleteTask
}