const AWS = require('aws-sdk');
const listTasks = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'})

  const result = await dynamodb.scan({
    TableName: "task",
    AttributesToGet: ["id", "name", "description", "hours", "stack", "role", "done", "newJoinerId", "parentTaskId"]
  }).promise();

  const tasks = result.Items;
  return {
    status: 200,
    body: {tasks}
  }
}

module.exports = {
  listTasks
}