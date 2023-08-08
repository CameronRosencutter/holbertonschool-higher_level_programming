#!/usr/bin/node
const request = require('request');
const fs = require('fs');

<<<<<<< HEAD
const url = process.argv[2];

request(url, function (err, response, body) {
  if (err) throw err;
  fs.writeFile(process.argv[3], body, function (err) {
    if (err) throw err;
  });
});
=======
const url = process.argv[2];

request(url, function (err, response, body) {
  if (err) throw err;
  fs.writeFile(process.argv[3], body, function (err) {
    if (err) throw err;
  });
});

>>>>>>> 88e24f2db9b44991c05725f2062e0d833ea40fa8