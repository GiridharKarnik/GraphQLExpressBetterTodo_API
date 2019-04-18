const gql = require('graphql');

const authorType = require('./author.type');
const authorModel = require('../../mongodb/models/author.model').AuthorModel;

const authorQueries = new gql.GraphQLObjectType({
    name: "getAllAuthors",
    fields: () => {
        return {
            authors: {
                type: new gql.GraphQLList(authorType),
                resolve: () => {
                    const author = authorModel.find().exec();
                    if (!author) {
                        throw new Error("Error");
                    }
                    return author;
                },
            }
        };
    },
});

module.exports = authorQueries;
