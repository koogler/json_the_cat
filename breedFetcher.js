const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (err, response, body) => {
      let data = JSON.parse(body);
      if (data[0] === undefined) {
        return callback(err, null);
      }
      if (!err) {
        let result = data[0]['description'];
        return callback(null, result);
      }
    });
};

module.exports = { fetchBreedDescription };

// request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (err, response, body) => {
//   const data = JSON.parse(body);
//   if (err) {
//     console.error(err);
//     return;
//   }
//   if (data[0] === undefined) {
//     console.log("BREED NOT FOUND!!!");
//   } else {
//     console.log(data[0]['description']);
//     console.log(typeof data);
//   }
// });

// if (err) {
//   console.error(err);
//   return;
// }
// const desc = JSON.parse(body);
// return desc;
// })