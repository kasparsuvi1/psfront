//Install express server
const express = require('express');
const app = express();
const proxy = require('express-http-proxy');

//redirect
app.use('/oauth/token', proxy('http://144.202.77.179:443'));
app.use('/api', proxy('http://144.202.77.179:443'));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 443);

const path = require('path');

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
