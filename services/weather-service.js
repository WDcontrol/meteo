import axios from "axios";
import React from 'react';

// const key='28d34498e1077e332fd570e1efbf1262'
const key='b5bb72c72d099d41ac283611eb47592a'
const url=`https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric`

class WeatherService{
    getWeatherByCity(city="Paris",country){
        if(country){
            country = "," + country
        }
        return axios.get(`${url}&q=${city},${country}`)
    }
}

export default WeatherService;