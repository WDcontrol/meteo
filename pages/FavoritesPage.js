import React from 'react';
import { Text, View, FlatList, AsyncStorage } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationEvents } from 'react-navigation';
import WeatherService from '../services/weather-service';
import FavoritesItem from '../components/FavoritesItem'

class FavoritesPage extends React.Component {
  serv = new WeatherService();

  state = {
    cities: [],
    citiesData: [],
    refresh:false,
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Favoris',
      headerRight: (
        <Icon
          onPress={() => {
            navigation.state.params.count < 15 ? navigation.push('FavoritesAdd'): alert("Vous ne pouvez ajouter que 15 favoris")
          }}
          style={{ paddingRight: 10 }}
          size={25}
          name={'ios-add'}></Icon>
      )
    };
  };

  render() {
    return (
      <LinearGradient
        style={{ flex: 1 }}
        colors={['#336eb0', '#5791e7', '#5791e7']}>
        <View style={{ flex: 1 }}>
          <NavigationEvents onDidFocus={() => this.refresh()} />
          <FlatList
            data={this.state.cities}
            extraData={this.state.refresh}
            renderItem={({item}) => (
                <FavoritesItem key={item} city={item} onDelete={()=>{this.deleteCity(item)}}></FavoritesItem>
            )}
          />
        </View>
      </LinearGradient>
    );
  }

  deleteCity(item) {
    let indexToDelete = this.state.cities.indexOf(item);
    if (indexToDelete > -1) {
      this.setState({
        cities: this.state.cities.splice(indexToDelete, 1)
      });
    }
    AsyncStorage.setItem('cities', JSON.stringify(this.state.cities))
      .then(() => {
        this.refresh();
      })
      .catch((err) => {
        alert(err);
      });
  }

  refresh(){
    // AsyncStorage.setItem('cities',JSON.stringify(["Paris","Nantes","Nice","Amiens"]))
    AsyncStorage.getItem('cities').then((data) => {
      if(data != null){
        this.setState({
          cities: JSON.parse(data).sort()
        })
        console.log("ref",JSON.parse(data))
        
        this.props.navigation.setParams({ count: JSON.parse(data).length })
        console.log(this.state.cities)
      }
      else{
        this.props.navigation.setParams({ count: 0 })
      }
      
    }).catch((err)=>(alert(err)))
  }
}

export default FavoritesPage;