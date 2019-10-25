import WeatherService from './services/weather-service';

const INITIAL_STATE = {
  serv : new WeatherService(),
};

const weatherServiceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default weatherServiceReducer;