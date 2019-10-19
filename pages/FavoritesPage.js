import React from 'react';
import {Text, View, Image, FlatList, Button,AsyncStorage} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationEvents } from 'react-navigation';
import WeatherService from '../services/weather-service';

class FavoritesPage extends React.Component{
    serv = new WeatherService();    
    
    state ={
        cities:[],
        citiesData:[],
    };
    
    static navigationOptions= ({navigation}) => {
        return {
            title: 'Favoris',
            headerRight:(
                <Icon onPress={() => navigation.push('FavoritesAdd')} style={{paddingRight:10}} size={25} name={'ios-add'}></Icon>
            )
        }
    }

    refresh(){
        this.setState({citiesData:[]});
        AsyncStorage.getItem('cities').then((data)=>{
            this.setState({cities: JSON.parse(data)});
            for(var i =0;i<this.state.cities.length;i++){
                this.serv.getWeatherByCity(this.state.cities[i]).then((response)=>{
                    this.setState({
                        citiesData:[...this.state.citiesData, {name:response.data.name,temp:response.data.main.temp}]
                    })
                }).catch((error)=>{
                    console.log(error)
                })
            }
        })
    }

    render(){
        return(
            <LinearGradient style={{flex:1}} colors={['#336eb0', '#5791e7', '#5791e7']}>
                <View style={{flex:1}}>
                    <NavigationEvents onDidFocus={() => this.refresh()} />
                    <FlatList
                        data={this.state.citiesData}
                        renderItem={({item}) => (
                            <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",padding:15}}>
                                <Text style={{fontSize:23,color:"white"}}>{item.name}</Text>
                                <Text style={{fontSize:23,color:"white"}}>{item.temp}°C</Text>
                            </View>
                        )}
                        />
                </View>
            </LinearGradient>
        )
    }
}


const ImgWeather = (props) => {
    return(
        <Image style={{height:100,width:100,alignSelf:"center"}} source={{uri:`https://openweathermap.org/img/wn/${props.icon}@2x.png`}}/>
    )
}



export default FavoritesPage