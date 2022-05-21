const request = require('request');
function getGoogleHomePage.promise(); {
    request('http://www.google.com', function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        finalCallBack(error);
        console.log('statusCode:', response && response.statusCode); // Print the response status
     if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        finalCallBack(null, body);
    });
};
console.log(getGoogleHomePage((result) => {
    console.log("RESULT==>", result);
    .then((data)=> console.log(data)).catch((err)=> console.log(err))
}));

// const util = require('util');
// const request = require('request');
// const google1 = util.promisify(finalCallBack);


