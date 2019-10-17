import React from 'react';
import {Text, View, Image, FlatList, Button} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

class FavoritesPage extends React.Component{
    static navigationOptions= ({navigation}) => {
        return {
            title: 'Favoris',
            headerRight:(
                <Icon onPress={() => navigation.push('FavoritesAdd')} style={{paddingRight:10}} size={25} name={'ios-add'}></Icon>
            )
        }
    };

    state ={
        cities:null,
    };
    componentDidMount(){
        this.setState({
            cities:[
                {name: 'Marseille', temp: 29, main:'clear' },
                {name: 'New York', temp: 13, main:'clear'},
                {name: 'Pekin', temp: 12, main:'clear'}
            ]
        });
    }
    
    render(){
        return(
            this.state.cities != null ?  
            (
                <LinearGradient style={{flex:1}} colors={['#336eb0', '#5791e7', '#5791e7']}>
                <View style={{flex:1}}>
                    <FlatList
                        data={this.state.cities}
                        renderItem={({ item }) => (
                            <View style={{flex:1,flexDirection:"row",justifyContent:"space-between",padding:15}}>
                                <Text style={{fontSize:23,color:"white"}}>{item.name}</Text>
                                <Text style={{fontSize:23,color:"white"}}>{item.temp}°C</Text>
                            </View>
                          )}
                        />
                </View> 
            </LinearGradient>
            ):(
                <View></View>
            )
        )
    }
}


const ImgWeather = (props) => {
    return(
        <Image style={{height:100,width:100,alignSelf:"center"}} source={{uri:`https://openweathermap.org/img/wn/${props.icon}@2x.png`}}/>
    )
}



export default FavoritesPage