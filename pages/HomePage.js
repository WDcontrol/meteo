import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import WeatherService from '../services/weather-service';
import LoadingComponent from '../components/Loading';
import {LinearGradient} from 'expo-linear-gradient';

class HomePage extends React.Component{

    serv = new WeatherService();

    state = {
        weather:null
    };

    componentDidMount(){
        this.serv.getWeatherByCity().then((response) => {
            this.setState({weather: response.data});
        })
        this.setState({page: 'default'});
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
            this.state.weather != null ?
                this.state.page == 'default' ? 
                    (        
                        <LinearGradient style={{flex:1}} colors={['#336eb0', '#5791e7', '#5791e7']}>
                            <TouchableOpacity style={{padding: 15, alignItems: 'center',flex:1,justifyContent:"center"}} onPress={() => this.setState({page:'description'})}>
                                <Text style={{textAlign:"center",fontSize:25,color:"white"}}>{this.state.weather.name}</Text>
                                <ImgWeather icon={this.state.weather.weather[0].icon}/>
                                <Text style={{fontSize:20,textAlign:"center",color:"white"}}>{Math.round(this.state.weather.main.temp)}°C</Text> 
                            </TouchableOpacity>
                        </LinearGradient>
                    ):(
                        <TouchableOpacity style={{flex:1, justifyContent:"center"}} onPress={() => this.setState({page:'default'})}>
                            <Text style={{fontSize:20,textAlign:"center"}}>Minimale : {Math.round(this.state.weather.main.temp_min)}°C</Text>
                            <Text style={{fontSize:20,textAlign:"center"}}>Maximale : {Math.round(this.state.weather.main.temp_max)}°C</Text>
                            <Text style={{fontSize:20,textAlign:"center"}}>pression : {this.state.weather.main.pressure}</Text>
                            <Text style={{fontSize:20,textAlign:"center"}}>Vitesse du vent : {this.state.weather.wind.speed} km/h</Text>
                            <Sunrise time={this.state.weather.sys.sunrise}/>
                            <Sunset time={this.state.weather.sys.sunset}/>
                        </TouchableOpacity>
                ):(
                    <LoadingComponent displayColor="grey">
                        <Text>Chargement</Text>
                    </LoadingComponent>
                )
        );
    }
}
const Sunrise = (props) =>{
    const dt = new Date(props.time * 1000)
    return(
        <Text style={{fontSize:20,textAlign:"center"}}>Levé du soleil : {`${dt.getHours()}h${dt.getMinutes()}`}</Text>
    )
}
const Sunset = (props) =>{
    const dt = new Date(props.time * 1000);
    return(
        <Text style={{fontSize:20,textAlign:"center"}}>Couché du soleil : {`${dt.getHours()}h${dt.getMinutes()}`}</Text>
    )
}

const ImgWeather = (props) => {
    return(
        <Image style={{height:100,width:100,alignSelf:"center"}} source={{uri:`https://openweathermap.org/img/wn/${props.icon}@2x.png`}}/>
    )
}

export default HomePage;