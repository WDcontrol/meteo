import React from 'react';
import {View, Text, Button, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


class SettingsPage extends React.Component{
    render(){
        return(
            <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{alignContent:"center",textAlign:"center",alignSelf:"center",alignItems:"center"}}>Settings</Text>
                <Button title="Supprimer les favoris" onPress={() => this.onDeleteFavoritesPress()}></Button>
            </View>
        )
    }
    
    onDeleteFavoritesPress(){
        AsyncStorage.removeItem('cities').then(() => alert('Favoris supprimés'));
    }

} 

export default SettingsPage;