/** server.js
 * Server for a CAS client
 */

// Constants
const PORT = 3000;

// Requires
var fs = require('fs');
var http = require('http');
var express = require('express');

// The Express app
var app = express();

var AuthCAS = require('auth-cas');
var config = require('./config.json')
var authCAS = AuthCAS(config.host, config.casHost);

// Serve files from public folder
app.use(express.static('public'));

// Start the server
app.listen(PORT, function(){
  console.log(PORT);
});
