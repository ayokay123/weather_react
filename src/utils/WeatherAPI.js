const API_key = "d55b198d8cfc3123b841f852079ec707";

const Weath = {
    searchWeather(city, country) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`)
            .then((response) => response.json());
    }
}

export default Weath
