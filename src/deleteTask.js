const AWS = require('aws-sdk');

deleteTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'})
  const {id} = event.pathParameters

  await dynamodb.delete({
    TableName: "task",
    Key: {
      id
    }
  }).promise();

  return {
    status: 200, 
    body: {
      message: "Task deleted"
    }
  }
  
}

module.exports = {
  deleteTask
}