module.exports = (app) => {

    const gqlRoute = require('../routes/graphql.route');

    app.use('/graphql', gqlRoute(app));

    app.get('/', (req, res) => {
        res.status(200).send("Welcome to todo api built using express and graphql.")
    });
}