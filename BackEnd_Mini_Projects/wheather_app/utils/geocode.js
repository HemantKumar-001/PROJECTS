
const request = require("request");

const geocode = (address, callback)=> {
    // const GeocodeUrl = `https://api.opencagedata.com/geocode/v1/json?key=e94abed622ba4895a9a1fb919ab09113 &q=${encodeURIComponent(address)}`;
    const GeocodeUrl = `https://api.opencagedata.com/geocode/v1/json?key=e94abed622ba4895a9a1fb919ab09113&q=${encodeURIComponent(address)}`;
    request({url: GeocodeUrl, json: true}, (error, {body}) => {
        if(error) {
            callback("Please check your internet connection!", undefined);
        }
        else if(body.status.code !== 200 ){
            callback("Unable to find location please try another search!", undefined);
        }

        else {
            callback(undefined,{
                latitude: body.results[0].geometry.lat,
                longitude: body.results[0].geometry.lng,
                location: body.results[0].formatted
            })
        } 
    })
}

module.exports = geocode;
