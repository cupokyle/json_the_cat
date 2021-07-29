const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error !== null) {
    // Print the error if one occurred
      callback(`Unable to fetch data \nError: ${error.errno}`);
      return;
    }
    if (response.statusCode !== 200) {
      callback(`statusCode: ${response && response.statusCode}`);
      return;
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      callback("Cannot find this breed in our database. Try another search");
      return;
    }
    callback(null, `\n${data[0].description}\n`);
  });
};

module.exports = { fetchBreedDescription };