const AWS = require('aws-sdk');
const getTasks = async (event) =>{
  const dynamodb = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});

  const result = await dynamodb.scan({
    TableName: "task",
    AttributesToGet: ["id"]
  }).promise();  

  const tasks = result.Items;
  return {
    status: 200,
    body: {tasks}
  }
}

module.exports = {
  getTasks
};