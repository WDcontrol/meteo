import axios from "axios";
import React from 'react';
// import {navigator} from 'react-navigation'
// const key='8fd2f1785421c1728c62f58da989e496'
const key='eff64d99b6917117f44978412d4935f7'
const url=`https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric`

class WeatherService{
    async getWeatherHome(city="Paris"){
        navigator.geolocation.getCurrentPosition((position)=>{
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            // this.setState({
            //     lon : lon,
            //     lat : lat, // TODO set in reducer
            // })
        })
        return await axios.get(`${url}&q=${city}`)
    }

    getWeatherByCity(city="Paris"){
        return axios.get(`${url}&q=${city}`)
    }
}

export default WeatherService;