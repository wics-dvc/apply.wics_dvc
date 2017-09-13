var winston = require('winston');
var Slack = require('./slack.js').Slack;
var config = require('../config');

// Creates and returns a new logging instance
module.exports = () => (new winston.Logger({
  'transports': [
    new (winston.transports.Console)({
      'level': 'debug',
      'handleExceptions': false,
      'json': false,
      'colorize': true,
      'timestamp': true
    }),
    new (Slack)({
      channel: '#general',
      webhookUri: config.slack.webhookUri,
      username: config.slack.username,
      level: 'error'
    })
  ],
  'exitOnError': false
}));