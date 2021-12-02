const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${process.argv[2]}`, (err, response, body) => {
  const data = JSON.parse(body);
  if (err) {
    console.error(err);
    return;
  }
  if (data[0] === undefined) {
    console.log("BREED NOT FOUND!!!");
  } else {
    console.log(data[0]['description']);
    console.log(typeof data);
  }
});