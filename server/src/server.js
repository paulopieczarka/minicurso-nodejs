const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./server.routes');

// MongoDB Config.

const mongoUri = 'mongodb://localhost/horta';
mongoose.connect(mongoUri);
mongoose.connection.on('error', () => {
    throw new Error(`No connected to ${mongoUri}`);
})

// Express Config.
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use( express.static( path.join(__dirname, 'public') ) );

app.use('/api', routes);

function server() {
    app.listen(3000, () => {
        console.log("Served at 3000.");
    });
}

module.exports = server;