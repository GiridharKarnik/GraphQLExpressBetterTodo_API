const gql = require('graphql');

const TaskType = require('../task.type');
const TaskModel = require('../../../mongodb/models/task.model').TaskModel;

const checkTodo = {
    name: "CheckTodo",
    description: "A mutation using which you can either check or uncheck a task",
    type: TaskType.taskType,
    args: {
        input: {
            type: new gql.GraphQLNonNull(TaskType.updateTaskStatusInputType)
        }
    },
    resolve: async (_, { input }) => {
        try {
            const task = await TaskModel.findOneAndUpdate({
                _id: input.id
            }, {
                $set: {
                    taskDone: input.taskDone
                }
            }, {
                    "lean": false,
                    "new": true,
                    "upsert": false,
                    "multi": false
                });
            return task;
        } catch (err) {
            throw new Error(err);
        }
    }
};

module.exports = checkTodo;