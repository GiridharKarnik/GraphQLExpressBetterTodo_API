const express = require('express');
const cors = require('cors');
const graphQLHTTP = require('express-graphql');
const gql = require('graphql');

const rootSchema = require('../graphql/rootSchema');

const graphQLRouteFunction = (app) => {
    //initialize the route
    const graphQLRoute = express.Router();

    //protect the route in prod
    if (process.env.NODE_ENV === "prod") {
        tokenGateWay(graphQLRoute, app);
    }

    graphQLRoute.get('/schema', (req, res) => {
        res.type('text/plain').send(gql.printSchema(rootSchema));
    });

    graphQLRoute.use(
        "/",
        cors(),
        graphQLHTTP({
            schema: rootSchema,
            rootValue: global,
            graphiql: process.env.NODE_ENV !== "production"
        })
    );

    return graphQLRoute;
};

module.exports = graphQLRouteFunction;