const args = process.argv.slice(2);
const request = require('request');

const breedSearch = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedSearch}`, (error, response, body) => {
  if (error !== null) {
    // Print the error if one occurred
    console.log(`Unable to fetch data \nError: ${error.errno}`);
    return;
  }
  if (response.statusCode !== 200) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Cannot find this breed in our database. Try another search");
    return;
  }
  console.log(`\n${data[0].description}\n`);
});
