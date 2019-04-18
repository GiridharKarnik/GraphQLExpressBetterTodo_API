const gql = require('graphql');

const authorType = new gql.GraphQLObjectType({
    name: "author",
    fields: () => {
        return {
            id: {
                type: gql.GraphQLNonNull(gql.GraphQLID)
            },
            name: {
                type: gql.GraphQLNonNull(gql.GraphQLString)
            },
            email: {
                type: gql.GraphQLNonNull(gql.GraphQLString)
            }
        }
    }
});

module.exports = authorType;