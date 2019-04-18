const path = require('path');
const rootPath = path.normalize(__dirname + "/../");

module.exports = {
    development: {
        rootPath,
        db: "mongodb://localhost:27017/todo_list_gql",
        host: "127.0.0.1",
        port: process.env.PORT || 8080,
        env: "dev",
        logLevel: "debug",
    }
}

