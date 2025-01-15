// const request = require("request");
// const GeocodeUrl = "https://api.opencagedata.com/geocode/v1/json?key=d2334f8d61c946bfaa79828b8972707b&q=Ludhiana";

// request({url: GeocodeUrl, json: true}, (error,response) => {
//     if(error){
//         console.log("Please check your internet connection!");
//     }
//     else if(response.body.status.code !== 200 ){
//         console.log("Unable to find location please try another search!");
//     }
//     else{
//        console.log(response.body.results[0].formatted);
//     }
// })


// ! ____________________________

const request = require("request");

const geocode = (address, callback)=> {
    let geocodeURl = `https://api.opencagedata.com/geocode/v1/json?key=d2334f8d61c946bfaa79828b8972707b&q=${encodeURIComponent(address)}`;
    request({json: true, url: geocodeURl}, (error, response)=>{
        if(error){
            callback("Please check your interner connection!");
        }
        else if(response.body.status.code !== 200){
            callback("This is unable to search please use another sesarch!");
        }
        else{
            callback(undefined, {
                latitude: response.body.results[0].geometry.lat,
                longitude: response.body.results[0].geometry.lng,
                location: response.body.results[0].formatted
            })
        }
    });
}

geocode("jamu", (error, data)=> {
    console.log("error", error);
    console.log("data", data);
})