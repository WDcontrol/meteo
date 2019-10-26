import React, {useState,useEffect,useContext} from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import WeatherService from '../services/weather-service';
import {ImgWeather,Loading, Temperature} from '../components';

HomePage = props => {
  const serv = new WeatherService();
  const [weather, setWeather] = useState(null);

    useEffect(() => {
        serv.getWeatherByCity().then((res)=>{
          setWeather(res.data);
        });
      }, []);
  
    return weather != null ? (
        <LinearGradient style={{ flex: 1 }} colors={['#336eb0', '#5791e7', '#5791e7']}>
          <TouchableOpacity style={{ padding: 15, alignItems: 'center', flex: 1, justifyContent: 'center' }} onPress={() => props.navigation.actions.navigate('HomeDetails',)}>
            <Text style={ styles.cityStyle }> {weather.name} </Text>
            <ImgWeather icon={weather.weather[0].icon} />
            <Temperature temp={weather.main.temp}></Temperature>
          </TouchableOpacity>
        </LinearGradient>
    ) : (
      <Loading displayColor='grey'>
        <Text>Chargement</Text>
      </Loading>
    );
}

const styles = StyleSheet.create({
  cityStyle: {
    textAlign: 'center', 
    fontSize: 25, 
    color: 'white'
  },

});

export default HomePage;
