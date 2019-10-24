import React from 'react';
import { Text } from 'react-native';

const Sun = (props) => {
  const dt = new Date(props.time * 1000);
  return (
    <Text style={{ fontSize: 20, textAlign: 'center' }}>
      {props.sunKey} {`${dt.getHours()}h${dt.getMinutes()}`}
    </Text>
  );
};

export default Sun;