const AWS = require('aws-sdk');

const updateTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'})
  const {id} = event.pathParameters;
  const {done, newJoinerId} = JSON.parse(event.body)
  const params = {
    TableName: "task",
    Key: {
      id
    },
    UpdateExpression: 'set done = :done, newJoinerId = :newJoinerId',
    ExpressionAttributeValues: {
      ":done": done,
      ":newJoinerId": newJoinerId
    },
  }
  await dynamodb.update(params, function (err, data){
    if (err){
      console.log(err)
    }else {
      console.log(data);
    }
  }).promise()

  return {
    status: 200,
    body: {
      message: "Task successfully updated "
    }
  }
}

module.exports = {
  updateTask
}