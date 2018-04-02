//Install express server
const express = require('express');
const app = express();
const proxy = require('express-http-proxy');

//redirect
app.use('/oauth/token', proxy('http://138.68.71.15:8080'));
app.use('/api', proxy('http://138.68.71.15:8080'));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
