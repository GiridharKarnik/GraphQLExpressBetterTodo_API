const gql = require('graphql');

const authorQuries = require('./author.queries');
const authorMutations = require('./mutations');

const authorSchema = new gql.GraphQLSchema({
    query: authorQuries,
    mutation: new gql.GraphQLObjectType({
        name: "TaskMutations",
        fields: authorMutations
    })
});

module.exports = authorSchema;