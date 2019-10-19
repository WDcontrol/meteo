import React from 'react';
import {Button, View,TextInput, AsyncStorage} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import WeatherService from '../services/weather-service';

// const CityList = require("./city.list.json");

class FavoritesAdd extends React.Component {

    serv= new WeatherService()

    static navigationOptions={
        title: 'Ajouter',
    };
    
    
    state = {
        cityName:'',
    }

    onAddPress(){
        if(this.state.cityName != ''){
            this.serv.getWeatherByCity(this.state.cityName).then(()=>{
                AsyncStorage.getItem('cities').then(data =>{
                    let tab = [];
                    if(data !== null){
                        tab = JSON.parse(data)
                    }
                    tab.push(this.state.cityName);
                    AsyncStorage.setItem('cities',
                        JSON.stringify(tab)).then(()=>{
                        this.props.navigation.goBack();
                    }).catch((err)=>{
                        alert(err)
                    })
                })            
            }).catch(err=>{
                alert(`Pas de données pour la ville ${this.state.cityName}`)
            })
        }else{
            alert("Pas de donnée")
        }
    }

    render(){
        return(
            <LinearGradient style={{flex:1, justifyContent:"center"}} colors={['#336eb0', '#5791e7', '#5791e7']}>
                <View style={{alignSelf:"center", alignContent:"center"}}>
                <TextInput
                style={{height: 40,width:120, fontSize:25,textAlign:"center",borderWidth: 1}}
                placeholder="Monaco..."
                onChangeText={(cityName) => this.setState({cityName})}
                value={this.state.cityName}
                />
                </View>
                <Button
                title="Ajouter"
                color="white"
                onPress={() => this.onAddPress()}
                />
            </LinearGradient>
        )
    }
}

export default FavoritesAdd;