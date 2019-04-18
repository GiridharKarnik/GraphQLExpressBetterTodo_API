const gql = require('graphql');

const taskQuery = require('./task.queries');
const taskMutations = require('./mutations');

const taskSchema = new gql.GraphQLSchema({
    query: taskQuery,
    mutation: new gql.GraphQLObjectType({
        name: "TaskMutations",
        fields: taskMutations
    })
});

module.exports = taskSchema;