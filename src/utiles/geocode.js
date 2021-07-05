const request = require("request");

const geocode = (city,cb) =>{
    request({
        // we can give latitude and longitude instead of name of the city
        url : `http://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoicGFydGhpMDQwNzE5OTMiLCJhIjoiY2txN3BiNTg3MDhhNzJwb2FteWF5ZnVqciJ9.uFlrSqumB99eQMeHdOvzXw`,
        json : true
    }, function(error,response){
        cb(response.body.features[0].center);
    })

}
module.exports = geocode;