import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import WeatherService from '../services/weather-service';
import Icon from 'react-native-vector-icons/Ionicons';
import LoadingComponent from '../components/Loading';
import {LinearGradient} from 'expo-linear-gradient';

class HomePage extends React.Component{

    serv = new WeatherService();

    state = {
        weather:null
    };

    componentDidMount(){
        this.serv.getWeatherHome().then((response) => {
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
                        <LinearGradient
                                colors={['#336eb0', '#5791e7', '#5791e7']}
                                style={{ padding: 15, alignItems: 'center', borderRadius: 5,flex:1,justifyContent:"center" }}>
                            <TouchableOpacity onPress={() => this.setState({page:'description'})}>
                            <Text style={{textAlign:"center",fontSize:25,color:"white"}}>{this.state.weather.weather[0].main}</Text>
                            <ImgWeather icon={this.state.weather.weather[0].icon}/>
                            <Text style={{fontSize:20,textAlign:"center",color:"white"}}>{this.state.weather.main.temp}°C</Text> 
                            </TouchableOpacity>
                        </LinearGradient>
                    ):(
                        <TouchableOpacity style={{flex:1, justifyContent:"center"}} onPress={() => this.setState({page:'default'})}>
                            {/* <Text style={{textAlign:"center",fontSize:25}}>{this.state.weather.weather[0].description}</Text> */}
                            <Text style={{fontSize:20,textAlign:"center"}}>Minimale : {this.state.weather.main.temp_min}°C</Text>
                            <Text style={{fontSize:20,textAlign:"center"}}>Maximale : {this.state.weather.main.temp_max}°C</Text>
                            <Text style={{fontSize:20,textAlign:"center"}}>pression : {this.state.weather.main.pressure}°C</Text>
                            <Text style={{fontSize:20,textAlign:"center"}}>Vitesse du vent : {this.state.weather.wind.speed} km/h</Text>
                            <Sunrise time={this.state.weather.sys.sunrise}/>
                            <Sunset time={this.state.weather.sys.sunset}/>
                        </TouchableOpacity>
                ):(
                    <LoadingComponent name="vie"></LoadingComponent>
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