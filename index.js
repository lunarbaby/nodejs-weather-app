const request = require('request');

let apiKey = "0e25992adb7e2be7ecd21a31e99a090a";
let city = 'atlanta';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body){
if (err){
    console.log('error:', error);
} else {
    console.log('body:', body);
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
}
});


