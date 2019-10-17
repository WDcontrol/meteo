import React from 'react';
import {Button, View,TextInput, Image} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

class FavoritesAdd extends React.Component {
    static navigationOptions={
        title: 'Ajouter',
    };
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }
    
    onAddPress(){
        alert(this.state.text);
        this.props.navigation.pop();
    }

    render(){
        return(
            <LinearGradient style={{flex:1, justifyContent:"center"}} colors={['#336eb0', '#5791e7', '#5791e7']}>
                <View style={{alignSelf:"center", alignContent:"center"}}>
                <TextInput
                style={{height: 40,width:120, fontSize:25,textAlign:"center",borderWidth: 1}}
                placeholder="Monaco..."
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                />
                </View>
                <Button
                title="Ajouter"
                color="white"
                onPress={() => this.onAddPress()}
                />
            </LinearGradient>
        )
    }
}

export default FavoritesAdd;