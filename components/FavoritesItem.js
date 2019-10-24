import React from 'react';
import Swipeout from 'react-native-swipeout';
import {View, Text} from 'react-native';
import {Temperature , Loading, ImgWeather} from '../components'
import PropTypes from 'prop-types';

class FavoritesItem extends React.Component{

    static propTypes = {
        item: PropTypes.object.isRequired
    }

    swipeBtns(item) {
        return [
          {
            text: 'Supprimer',
            backgroundColor: 'red',
            underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
            onPress: () => {
              this.props.onDelete(item);
            }
          }
        ];
      }

      render(){
        return(
            <Swipeout
                style={{ flex: 1 }}
                right={this.swipeBtns(this.props.item)}
                autoClose='true'
                backgroundColor='transparent'
                >
                <View
                key={this.props.item}
                style={{flex: 1,flexDirection: 'row',justifyContent: 'space-between',padding: 15}}>
                    <Text style={{ fontSize: 23, color: 'white' }}>
                    {this.props.item.name}
                    </Text>
                    <Temperature style={{color:"white"}} temp={this.props.item.temp}></Temperature>
                </View>
              </Swipeout>
        )
    }
}
export default FavoritesItem