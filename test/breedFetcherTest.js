const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // We expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      //compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns a string error for an invalid breed, via callback', (done) => {
    fetchBreedDescription('Goofball', (err, desc) => {
      // We expect no error for this scenario
      const expectedError = "Cannot find this breed in our database. Try another search";
      
      assert.equal(err, expectedError);

      //compare returned description
      assert.equal(null, desc);

      done();
    });
  });
});