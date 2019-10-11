import React from 'react';
import {View, Text} from 'react-native';
import WeatherService from '../services/weather-service';
import Icon from 'react-native-vector-icons/Ionicons';


class SettingsPage extends React.Component{
    serv = new WeatherService();
    weather = this.serv.getWeatherHome();

    render(){
        return(
            <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{alignContent:"center",textAlign:"center",alignSelf:"center",alignItems:"center"}}>Settings</Text>
            </View>
        );
    }
} 

export default SettingsPage;