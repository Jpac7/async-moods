var $ = jQuery = require('jquery');

// First ajax request is triggered
var url = "./data/destinations.json";
sendAjaxRequest(url, cbFirstAjaxRequest)


function cbFirstAjaxRequest(data) {
    console.log(data)

    var url = "./data/destinations.json";
    sendAjaxRequest(url, cbSecondAjaxRequest)
}

function cbSecondAjaxRequest(data) {
    console.log(data);

    var url = "./data/destinations.json";
    sendAjaxRequest(url, function(data) {
        console.log(data);
    })
}

function sendAjaxRequest(url, cbSuccess) {
    $.ajax({
        type: "GET",
        url: url,
        success: cbSuccess,
        error: handleError
    })
}

function handleError(jqXHR, textStatus, error) {
    console.log(error);
}