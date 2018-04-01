// Using generators to run a steps sequence in mandatory order

const request = require('request-promise');


function* runSequence() {
    var a = yield firstProcedure();
    console.log("Continue?: " + a);
    var b = yield secondProcedure();
    console.log("Continue?:" + b);
    var c = yield thirdProcedure();
    console.log("Continue?: " + c);
    return "Sequence completed";
}

function firstProcedure() {
    // return promise
    return request("https://google.com");
}

function secondProcedure() {
    // return promise
    return request("https://google.com");
}

function thirdProcedure() {
    // return promise
    return request("https://google.com");
}

// preparing and starting the generator
var gen = runSequence();

var firstResult = gen.next().value
//console.log(firstResult)
var secondResult = gen.next().value
//console.log(secondResult)
var thirdResult = gen.next().value
//console.log(thirdResult)
gen.next();
console.log(gen.next().done)