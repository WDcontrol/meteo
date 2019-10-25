import React from 'react';
import Swipeout from 'react-native-swipeout';
import {View, Text} from 'react-native';
import {Temperature , Loading, ImgWeather} from '../components'
import PropTypes from 'prop-types';
import WeatherService from '../services/weather-service';

class FavoritesItem extends React.Component{

  serv = new WeatherService();

  state= {
    cityData:null
  }
  
  static propTypes = {
      city: PropTypes.string.isRequired
  }

    swipeBtns(city) {
        return [
          {
            text: 'Supprimer',
            backgroundColor: 'red',
            underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
            onPress: () => {
              this.props.onDelete(city);
            }
          }
        ];
      }

      componentDidMount(){
        this.serv.getWeatherByCity(this.props.city).then((resp) => {
          this.setState({
            cityData:resp.data,
          })
        }).catch((err)=>{
          console.log(err)
        })
      }

      render(){
        return(
          this.state.cityData != null ? (
            <Swipeout
                style={{ flex: 1 }}
                right={this.swipeBtns(this.props.city)}
                autoClose={true}
                backgroundColor='transparent'
                key={this.state.cityData.name}
                >
                <View
                style={{flex: 1,flexDirection: 'row',justifyContent: 'space-between',padding: 15}}>
                    <Text style={{ fontSize: 23, color: 'white' }}>
                    {this.state.cityData.name}
                    </Text>
                    <Temperature style={{color:"white"}} temp={this.state.cityData.main.temp}></Temperature>
                </View>
            </Swipeout>
          ): <Loading></Loading>
        )
    }
}
export default FavoritesItem