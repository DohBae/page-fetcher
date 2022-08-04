const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
console.log(args);
const url = args[0];
const localPath = args[1];

const fetchAndSave = function (url, filePath) {
  //request
  request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body.length); // Print the HTML for the Google homepage.
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`)
  });
});

  //local path
}
fetchAndSave(url, localPath)
// const process = require('process');
// const args = process.argv[2];
// const https = require('https');
// const fs = require('fs');

// const url = args

// https.get(url, (res) => {
//   const webInfoPath = './vagrant/page-fetcher.txt'
//   const stream = fs.writeFile(webInfoPath);
// })

// const size = stats.size

// fs.stat(page-fetcher.txt, (size));
// console.log(stats)



// console.log(args);