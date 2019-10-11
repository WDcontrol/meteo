import axios from "axios";
import React from 'react';

const key='28d34498e1077e332fd570e1efbf1262'
const url=`https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric`

class WeatherService{
    getWeatherHome(){
        return axios.get(`${url}&q=nanterre,fr`)
        // return{
        //     weather:{
        //         main: 'Beau temps',
        //         description: `Il fait beau aujourd'hui.`
        //     },
        //     main:{
        //         temp:'13',
        //         temp_min:'13',
        //         temp_max:'21',
        //         humidity:'92',
        //         pressure:'1009'
        //     },
        //     wind:{
        //         speed:'20',
        //     },
        //     sys:{
        //         sunrise:1560281377,
        //         sunset: 1560333478
        //     }
        // }
    }
}

export default WeatherService;