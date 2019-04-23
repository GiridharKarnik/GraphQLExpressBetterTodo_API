const gql = require('graphql');

const taskType = require('./task.type').taskType;
const TaskModel = require('../../mongodb/models/task.model').TaskModel;

const taskQueries = new gql.GraphQLObjectType({
    name: "TaskQuries",
    fields: () => {
        return {
            tasks: {
                name: "GetAllTasks",
                type: gql.GraphQLList(taskType),
                resolve: () => {
                    const authors = TaskModel.find().exec();
                    if (!authors) {
                        throw new Error("Error");
                    }
                    return authors;
                },
            },
            taskById: {
                name: "GetTaskById",
                type: taskType,
                args: {
                    id: {
                        type: new gql.GraphQLNonNull(gql.GraphQLString)
                    }
                },
                resolve: async (_, args) => {
                    try {
                        const task = await TaskModel.findById(args.id);
                        return task;
                    } catch (err) {
                        throw new Error(err);
                    }
                }
            }
        };
    },
});

module.exports = taskQueries;
