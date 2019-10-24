import React from 'react';
import { Text, StyleSheet } from 'react-native';

class Temperature extends React.Component {
  render() {
    return (
      <Text style={styles.textStyles}>
        {this.props.tempKey}
        {Math.round(this.props.temp)} °C
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  textStyles: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default Temperature;
