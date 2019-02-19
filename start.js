// Transpile all code to es6
require('babel-register')({
  presets: [
    ["env", {
      "targets": {
        "node": "current"
      }
    }]
  ]
});

// Set environment
require('dotenv').config();

// Import the rest of our application.
module.exports = require('./server.js')