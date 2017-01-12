const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=49edaf2b5ba52474d763afc170cac046&units=metric';

module.exports = {
    getTemp(location) {
        const encodedLocation = encodeURIComponent(location);
        const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl)
            .then((res) => {
                if (res.data.cod && res.data.message) {
                    throw new Error(res.data.message);
                } else {
                    return res.data.main.temp;
                }
            })
            .catch((res) => {
                throw new Error(res.data.message);
            });
    }
};