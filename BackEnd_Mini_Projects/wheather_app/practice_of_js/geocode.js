const request = require("request");
const geocode = require("../utils/geocode");



const url = "http://api.weatherapi.com/v1/current.json?key=255afaa92f2d4b0799754544241408&q=Jalandhar&aqi=no/37.122.-122.4233";
const geocode = ((address, callback) => {
    request({url: url, json: true}, (error, {body}) => {
    if(error){
        callback("Please check your internet connection!");
    }
    else if(body.error){
        callback("Unable to find location please check another location!");
    }
    else{
        callback(body.response, body.response);
    }
});

})
module.exports = geocode;