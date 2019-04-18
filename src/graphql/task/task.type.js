const gql = require('graphql');

const taskType = new gql.GraphQLObjectType({
    name: "task",
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

module.exports = taskType;