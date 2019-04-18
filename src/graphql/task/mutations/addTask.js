const gql = require('graphql');

const taskType = require('../task.type');
const newTask = require('../../../mongodb/models/task.model').newTask;

const createNewTask = {
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
            const task = newTask(params.taskName);
            return await task.save();
        } catch (err) {
            throw new Error(err);
        }
    }
};

module.exports = createNewTask;