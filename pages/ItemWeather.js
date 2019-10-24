import WeatherService from "../services/weather-service";
import React from 'react';
import ImgWeather from '../components/ImgWeather'

class ItemWeather extends React.Component{
    static propTypes = {
        city: this.propTypes.object.isRequired
    }
    
    serv = new WeatherService();

    componentDidMount(){
        this.serv.getWeatherByCity(this.props.city).then((resp) => {
            this.setState({weather: resp.data})
        })
    }

    render(){
        return (
            <View
            key={this.props.city}
            style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between',padding: 15}}>
                <Text style={{ fontSize: 23, color: 'white' }}>
                    {this.props.city.name}
                </Text>
                <View style={{flex:1, flexDirection:'row'}}>
                    <Text style={{ fontSize: 23, color: 'white' }}>
                        {Math.round(this.props.city.temp)}°C
                    </Text>
                    <ImgWeather icon={this.state.weather.weather[0].icon}></ImgWeather>
                </View>
            </View>
        )
    }
}

export default ItemWeather