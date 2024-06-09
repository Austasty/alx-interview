#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const movieEndpoint = 'https://swapi-api.alx-tools.com/api/films/' + movieId;

function sendofRequest (characterList, index) {
  if (characterList.length === index) {
    return;
  }

  request(characterList[index], (error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      console.log(JSON.parse(body).name);
      sendofRequest(characterList, index + 1);
    }
  });
}

request(movieEndpoint, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const characterList = JSON.parse(body).characters;

    sendofRequest(characterList, 0);
  }
});
