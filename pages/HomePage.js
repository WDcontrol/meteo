import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'
import WeatherService from '../services/weather-service';
import LoadingComponent from '../components/Loading';
import { LinearGradient } from 'expo-linear-gradient';
import Temperature from '../components/Temperature';
import Sun from '../components/Sun';
import ImgWeather from '../components/ImgWeather';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  serv = new WeatherService();

  state = {
    weather: null
  };

  componentDidMount() {
    this.serv.getWeatherByCity().then((response) => {
      this.setState({ weather: response.data });
    });
    this.setState({ page: 'default' });
  }

  render() {
    const { navigate } = this.props.navigation;
    return this.state.weather != null ? (
      this.state.page == 'default' ? (
        <LinearGradient
          style={{ flex: 1 }}
          colors={['#336eb0', '#5791e7', '#5791e7']}>
          <TouchableOpacity
            style={{
              padding: 15,
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center'
            }}
            onPress={() => this.setState({ page: 'description' })}>
            <Text style={{ textAlign: 'center', fontSize: 25, color: 'white' }}>
              {this.state.weather.name}
            </Text>
            <ImgWeather icon={this.state.weather.weather[0].icon} />
            <Text style={{ fontSize: 20, textAlign: 'center', color: 'white' }}>
              {Math.round(this.state.weather.main.temp)}°C
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      ) : (
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center' }}
          onPress={() => this.setState({ page: 'default' })}>
          <Temperature
            style={styles.textStyles}
            tempKey='Minimale : '
            temp={this.state.weather.main.temp_min}></Temperature>
          <Temperature
            style={styles.textStyles}
            tempKey='Maximale : '
            temp={this.state.weather.main.temp_max}></Temperature>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>
            pression : {this.state.weather.main.pressure}
          </Text>
          <Text style={{ fontSize: 20, textAlign: 'center' }}>
            Vitesse du vent : {this.state.weather.wind.speed} km/h
          </Text>
          <Sun
            sunKey='Levé du soleil :'
            time={this.state.weather.sys.sunrise}
          />
          <Sun sunKey='Couché du soleil' time={this.state.weather.sys.sunset} />
        </TouchableOpacity>
      )
    ) : (
      <LoadingComponent displayColor='grey'>
        <Text>Chargement</Text>
      </LoadingComponent>
    );
  }
}

const styles = StyleSheet.create({
  textStyles: {
    color: 'black'
  }
});

const mapStateToProps = (state) => {
  const { weather } = state
  return { weather }
};

export default connect(mapStateToProps)(HomePage);
