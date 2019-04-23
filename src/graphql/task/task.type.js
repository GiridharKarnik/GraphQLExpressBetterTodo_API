const gql = require('graphql');

const taskType = new gql.GraphQLObjectType({
    name: "task",
    description: "GraphQL type for the Task object",
    fields: () => {
        return {
            id: {
                type: gql.GraphQLNonNull(gql.GraphQLID)
            },
            taskName: {
                type: gql.GraphQLNonNull(gql.GraphQLString)
            },
            taskDone: {
                type: gql.GraphQLNonNull(gql.GraphQLBoolean)
            },
            authorId: {
                type: gql.GraphQLNonNull(gql.GraphQLString)
            }
        }
    }
});

const updateTaskStatusInputType = new gql.GraphQLInputObjectType({
    name: "updateTaskStatusType",
    description: "Input user payload for updating a task status",
    fields: () => {
        return {
            id: {
                type: gql.GraphQLNonNull(gql.GraphQLID)
            },
            taskDone: {
                type: gql.GraphQLNonNull(gql.GraphQLBoolean)
            }
        }
    }
});

module.exports = {
    taskType,
    updateTaskStatusInputType
}