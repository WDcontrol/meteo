import React from 'react';
import { Image } from 'react-native';

const ImgWeather = (props) => {
  return (
    <Image
      style={{ height: 100, width: 100, alignSelf: 'center' }}
      source={{ uri: `https://openweathermap.org/img/wn/${props.icon}@2x.png` }}
    />
  );
};

export default ImgWeather;
