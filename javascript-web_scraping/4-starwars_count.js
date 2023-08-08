#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

<<<<<<< HEAD
request(url, function (err, response, body) {
  if (err) throw err;
  const data = JSON.parse(body).results;
  let count = 0;
  for (const movie in data) {
    const chars = data[movie].characters;
    for (const char in chars) {
      if (chars[char].includes('/18/')) {
        count++;
      }
    }
  }
  console.log(count);
});
=======
request(url, function (err, response, body) {
  if (err) throw err;
  const data = JSON.parse(body).results;
  let count = 0;
  for (const movie in data) {
    const chars = data[movie].characters;
    for (const char in chars) {
      if (chars[char].includes('/18/')) {
        count++;
      }
    }
  }
  console.log(count);
});

>>>>>>> 88e24f2db9b44991c05725f2062e0d833ea40fa8