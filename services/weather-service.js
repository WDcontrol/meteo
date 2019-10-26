import axios from "axios";
const key='eff64d99b6917117f44978412d4935f7';
const url=`https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric`;

 class WeatherService {
    getWeatherHome = async(city="Paris") =>{
        return await axios.get(`${url}&q=${city}`);
    }

    getWeatherByCity = async(city="Paris") => {
        return await axios.get(`${url}&q=${city}`);
    }
}

export default WeatherService;