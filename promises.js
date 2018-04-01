// Provide a easier way to organize callback functions

// A Promise is a placeholder object 
//where we can register our callbacks for success and failure

const request = require('request');
const requestPromise = require('request-promise');

// GET with callback
/*request.get("https://google.com", function (error, response, body) {
    console.log(body)
})
*/

// GET with promises
var options_google = {
    url: 'https://google.com',
    method: 'GET'
}

var options_amazon = {
    url: 'https://amazon.com',
    method: 'GET'
}


function doHTTPRequest(options) {
    return new Promise(function(resolve, reject) {
        request(options, function (error, response, body) {
            if(error) {
                reject(error);
            }
            if(response.statusCode === 200) {
                resolve(body);
            } else {
                reject(response.statusCode)
            }
        })
    });
}

function handleErrors(error) {
    console.log('Error: ', error);
}

doHTTPRequest(options_google).then(function(googleWebpage) {
    console.log(googleWebpage);
    return doHTTPRequest(options_amazon)
}).then(function(amazonWebpage) {
    console.log(amazonWebpage);
}).catch(handleErrors);


// GET request using promises wrapper from module request-promise
requestPromise(options_amazon).then(function(htmlString) {
    console.log(htmlString);
}).then(function(htmlString) {
    console.log(htmlString)
}).catch(function(error) {
    console.log(error);
})