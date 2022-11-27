const { default: axios } = require("axios");



var city = process.argv[2]

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=185bda49b50014d02d7006e8ccbe5d9a&units=metric`;

axios.get(url).then(result => {
    const temp = result.data.main.temp;
    const pressure = result.data.main.pressure
    const humidity = result.data.main.humidity
    const city = result.data.name

    console.log(
        `
        City : ${city}
        Temp : ${temp}
        Pressure : ${pressure}
        Humidity : ${humidity}
        `);
})
    .catch(err => {
        console.log(err);
    })