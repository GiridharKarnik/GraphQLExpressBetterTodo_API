const gqlTools = require('graphql-tools');

const taskSchema = require('./task/task.schema');
const authorSchema = require('./author/author.schema');

const rootSchema = gqlTools.mergeSchemas({
    schemas: [
        taskSchema,
        authorSchema
    ]
});

module.exports = rootSchema;