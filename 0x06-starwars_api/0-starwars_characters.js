#!/usr/bin/node

const request = require('request');

if (process.argv.length < 3) {
    console.log('Please provide a Movie ID as a positional argument.');
    process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, { json: true }, (error, response, body) => {
    if (error) {
        console.error('Error fetching the movie data:', error);
        return;
    }

    if (response.statusCode !== 200) {
        console.error(`Failed to fetch movie data. Status code: ${response.statusCode}`);
        return;
    }

    if (!body.characters) {
        console.error('No characters found for this movie.');
        return;
    }

    const characters = body.characters;
    characters.forEach((characterUrl) => {
        request(characterUrl, { json: true }, (error, response, body) => {
            if (error) {
                console.error('Error fetching character data:', error);
                return;
            }

            if (response.statusCode !== 200) {
                console.error(`Failed to fetch character data. Status code: ${response.statusCode}`);
                return;
            }

            console.log(body.name);
        });
    });
});
