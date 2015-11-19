'use strict';

// module dependencies
var express = require('express');
var request = require('request');
var url = require('url');

// config
var config = {
  // refresh interval (in seconds)
  interval: process.env.INTERVAL || 30,
  // flynn cluster domain
  domain: (process.env.FLYNN_DOMAIN || 'demo.localflynn.com').replace('status.'),
  // application title
  title: process.env.TITLE || 'Flynn',
  // status api request timeout (in seconds),
  timeout: process.env.TIMEOUT || 5
};

// initialize status response
var statusData = {};
var loadStatus = function() {
  // get status
  request(url.format({
    protocol: 'http',
    host: 'status.' + config.domain,
  }), {
    timeout: config.timeout * 1000
  }, function (err, res, body) {
    // error handler
    if (err || res.statusCode !== 200) {
      // log error
      console.error('Api request error: %s', err ? err.toString() : res.statusCode);
      // move on
      return;
    } else {
      // parse body string
      try {
        statusData = JSON.parse(body).data;
      } catch (e) {
        return;
      }
    }
  });
};

// initial load
loadStatus();

// set interval
setInterval(loadStatus, config.interval * 1000);

// initialize application
var app = express();

// configure views
app.set('views', 'views');
app.set('view engine', 'jade');

// pretty
app.locals.pretty = true;

// static files
app.use(express.static('public'));

// main route
app.get('/', function(req, res, next) {
  // render page
  res.render('main', {
    title: config.title,
    status: statusData.status || 'unknown',
    services: statusData.detail || null
  }, function(err, html) {
    // error handler
    if (err) {
      return next(err);
    } else {
      res.status(200).send(html);
    }
  });
});

// listen
app.listen(process.env.PORT || 1337, function() {
  console.log('Flynn status UI is listening on %s', process.env.PORT || 1337);
});

// move on
module.exports = app;
