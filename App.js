import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import WeatherServiceReducer from './WeatherServiceReducer';
import FavoritesReducer from './FavoritesReducer';

const rootReducer = combineReducers({
  weatherService: WeatherServiceReducer,
  favorites : FavoritesReducer,
});

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    console.log(this.state)
    return (
      <Provider store={ store }>
        <AppNavigator></AppNavigator>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
