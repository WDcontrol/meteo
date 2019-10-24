import React from 'react';
import {Text,View,ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types'

class Loading extends React.Component {
    static propTypes = {
        displayColor: PropTypes.string.isRequired
    }

    render(){
        return(
            <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator color={this.props.displayColor} size='large'/>
                {this.props.children}
            </View>
        )
    }
}

export default Loading;