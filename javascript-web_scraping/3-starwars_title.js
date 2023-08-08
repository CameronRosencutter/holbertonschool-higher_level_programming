#!/usr/bin/node
const request = require('request');

<<<<<<< HEAD
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + id;
localStorage
request(url, function (err, response, body) {
  if (err) throw err;
  console.log(JSON.parse(body).title);
});
=======
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + id;
localStorage
request(url, function (err, response, body) {
  if (err) throw err;
  console.log(JSON.parse(body).title);
});

>>>>>>> 88e24f2db9b44991c05725f2062e0d833ea40fa8