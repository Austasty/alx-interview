#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
if (!movieId) {
  console.log('Please provide a Movie ID as a positional argument.');
  process.exit(1);
}

const movieEndpoint = 'https://swapi-api.alx-tools.com/api/films/' + movieId;

function sendRequest(characterList, index) {
  if (characterList.length === index) {
    return;
  }

  request(characterList[index], (error, response, body) => {
    if (error) {
      console.error('Error fetching character data:', error);
    } else if (response.statusCode !== 200) {
      console.error('Failed to fetch character data. Status code:', response.statusCode);
    } else {
      try {
        const character = JSON.parse(body);
        console.log(character.name);
      } catch (parseError) {
        console.error('Error parsing character data:', parseError);
      }
    }
    sendRequest(characterList, index + 1);
  });
}

request(movieEndpoint, (error, response, body) => {
  if (error) {
    console.error('Error fetching movie data:', error);
  } else if (response.statusCode !== 200) {
    console.error('Failed to fetch movie data. Status code:', response.statusCode);
  } else {
    try {
      const movie = JSON.parse(body);
      const characterList = movie.characters;
      sendRequest(characterList, 0);
    } catch (parseError) {
      console.error('Error parsing movie data:', parseError);
    }
  }
});
