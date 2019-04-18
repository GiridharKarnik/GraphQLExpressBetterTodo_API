const gql = require('graphql');

const authorType = require('../author.type');
const newAuthor = require('../../../mongodb/models/author.model').newAuthor;

const createNewAuthor = {
    type: authorType,
    args: {
        name: {
            type: new gql.GraphQLNonNull(gql.GraphQLString)
        },
        email: {
            type: new gql.GraphQLNonNull(gql.GraphQLString)
        }
    },
    async resolve(_, params) {
        try {
            const author = newAuthor(params.name, params.email);
            return await author.save();
        } catch (err) {
            throw new Error(err);
        }
    }
};

module.exports = createNewAuthor;