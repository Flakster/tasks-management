const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const addTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const { name, description, hours, stack, role} = JSON.parse(event.body);
  const id = v4()
  const newTask = {
    id,
    name,
    description,
    hours,
    stack,
    role,
    done: false,
    newJoinerId: null,
    parentTaskId: null
  }
  await dynamodb.put({
    TableName: "task",
    Item: newTask
  }).promise()

  return {
    status: 200,
    body: {newTask}
  }
};


module.exports = {
  addTask,
}