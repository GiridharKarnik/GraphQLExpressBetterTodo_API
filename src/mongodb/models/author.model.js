const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    {
        collection: "authors"
    }
);

const AuthorModel = mongoose.model("authors", authorSchema);

module.exports = {
    AuthorModel,
    authorSchema,
    newAuthor: (name, email) => {
        return new AuthorModel({
            name,
            email
        });
    }
}
