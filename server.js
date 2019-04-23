const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 8000;

const env = process.env.NODE_ENV || 'development';
const config = require('./src/config/envConfig')[env];

app.use(cors());

app.use(morgan('combined'));

//configs
require('./src/config/dbConfig')(config);
require('./src/config/routesConfig')(app);

app.listen(port, () => {
    console.log("Todo list express graphql server started on port " + port);
});