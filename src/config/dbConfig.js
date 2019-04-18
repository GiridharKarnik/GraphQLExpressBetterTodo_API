const mongoose = require('mongoose');

module.exports = (config) => {
    mongoose.connect(config.db, {
        useNewUrlParser: true,
    });

    const db = mongoose.connection;

    // Use native promises
    mongoose.Promise = global.Promise;

    db.on("error", (error) => {
        console.log("DB error occurred.. ***************************");
        console.log(error);
        process.exit(0);
    });

    db.on("close", () => {
        console.log("DB has connection has been closed");
    });

    db.once("open", () => {
        console.log("DB connection success");
    });

    process.on("SIGINT", () => {
        mongoose.connection.close(() => {
            console.log("Mongoose disconnected on app termination");
            process.exit(0);
        });
    });

    return db;
}