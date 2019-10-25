import WeatherService from "./services/weather-service";

const INITIAL_STATE = {
  favorites : [],
};

const serv = new WeatherService();

const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default favoritesReducer;