const gql = require('graphql');

const taskType = require('../task.type').taskType;
const newTask = require('../../../mongodb/models/task.model').newTask;

const createNewTask = {
    name: "AddATask",
    description: "A mutation using which you can add a task to the todo list",
    type: taskType,
    args: {
        taskName: {
            type: new gql.GraphQLNonNull(gql.GraphQLString)
        },
        authorId: {
            type: new gql.GraphQLNonNull(gql.GraphQLString)
        }
    },
    async resolve(_, params) {
        try {
            const task = newTask(params.taskName, params.authorId);
            return await task.save();
        } catch (err) {
            throw new Error(err);
        }
    }
};

module.exports = createNewTask;