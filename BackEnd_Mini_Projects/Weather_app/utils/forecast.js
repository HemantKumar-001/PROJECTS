const request = require("request");
// ! Weather API
// const url = "http://api.weatherapi.com/v1/current.json?key=255afaa92f2d4b0799754544241408&q=Jalandhar&aqi=no/37.122.-122.4233";

// request({url: url, json: true}, (error, response) => {

//     if(error){
//         console.log("Please check your internet connection!");
//     }
//     else if(response.body.error === 200 ){
//         console.log("Unable to find Weather please try another search!");
//     }
//     else{
//         console.log(`It is currently ${response.body.current.temp_c} degree and ${response.body.current.condition.text}`);
//         console.log(response.body);  
//     }
// });


const forecast = (latitude, longitude, callback)=>{
    const url = `http://api.weatherapi.com/v1/current.json?key=255afaa92f2d4b0799754544241408&q=${latitude},${longitude}&aqi=no`
    request({ url, json: true}, (error, {body}) => {
      if(error){
          callback('Unable to connect to weather sevice')
      }else if(body.error){
          callback(error)
      }else {
          callback(undefined,`${body.current.condition.text} Through out the day. It is currently ${body.current.temp_c} degress out. There is a ${body.current.precip_mm} percent chance of rain`);
      }          
    })
  }
  
module.exports = forecast;