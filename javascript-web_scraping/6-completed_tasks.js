#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

<<<<<<< HEAD
request(url, function (err, response, body) {
  if (err) throw err;
  const users = {};
  for (const task of JSON.parse(body)) {
    if (task.completed) {
      if (users[task.userId]) {
        users[task.userId]++;
      } else {
        users[task.userId] = 1;
      }
    }
  }
  console.log(users);
});
=======
request(url, function (err, response, body) {
  if (err) throw err;
  const users = {};
  for (const task of JSON.parse(body)) {
    if (task.completed) {
      if (users[task.userId]) {
        users[task.userId]++;
      } else {
        users[task.userId] = 1;
      }
    }
  }
  console.log(users);
});

>>>>>>> 88e24f2db9b44991c05725f2062e0d833ea40fa8