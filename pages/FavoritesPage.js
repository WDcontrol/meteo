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
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Favoris',
      headerRight: (
        <Icon
          onPress={() => {
            // console.log(navigation);
            navigation.state.params.count < 15 ? navigation.push('FavoritesAdd'): alert("Vous ne pouvez ajouter que 15 favoris")
          }}

          // onPress={
          //   ()=>{navigation.push('FavoritesAdd')}
          // }
          style={{ paddingRight: 10 }}
          size={25}
          name={'ios-add'}></Icon>
      )
    };
  };

  refresh(){
    this.setState({refreshing:true});
    AsyncStorage.getItem('cities').then((date)=>{
      this.props.navigation.setParams({ count: JSON.parse(data).length })
      this.setState({cities:JSON.parse(data).sort(), refreshing:false})
    })
  }
  
  // componentDidMount(){
  //   this.props.navigation.setParams({ length: this.state.cities.length });
  // }

  render() {
    return (
      <LinearGradient
        style={{ flex: 1 }}
        colors={['#336eb0', '#5791e7', '#5791e7']}>
        <View style={{ flex: 1 }}>
          <NavigationEvents onDidFocus={() => this.refresh()} />
          <FlatList
            // onRefresh={()=> this.refresh()}
            keyExtractor = {item => item.name} 
            data={this.state.citiesData}
            renderItem={({ item }) => (
              <FavoritesItem item={item} onDelete={()=>{this.deleteCity(item)}}></FavoritesItem>
            )}
          />
        </View>
      </LinearGradient>
    );
  }

  deleteCity(item) {
    let indexToDelete = this.state.cities.indexOf(item.name);
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

  refresh() {
    this.setState({ citiesData: [] });
    AsyncStorage.getItem('cities').then((data) => {
      this.setState({ cities: JSON.parse(data) });
      this.props.navigation.setParams({ count: JSON.parse(data).length })
      for (var i = 0; i < this.state.cities.length; i++) {
        this.serv
          .getWeatherByCity(this.state.cities[i])
          .then((response) => {
            this.setState({
              citiesData: [
                ...this.state.citiesData,
                { name: response.data.name, temp: response.data.main.temp, icon: response.data.weather[0].icon }
              ]
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }
}

export default FavoritesPage;
