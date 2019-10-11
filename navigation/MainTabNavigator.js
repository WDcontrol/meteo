import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

const tabNavigator = createMaterialBottomTabNavigator(
    {
        Home: { 
            screen: HomePage,
            navigationOptions: {
                tabBarLabel: 'Accueil',
                tabBarIcon:({tintColor}) =>(
                    <Icon color={tintColor} size={25} name={'ios-home'} />                
                ),
                barStyle: { backgroundColor: 'white' }
            }
        },
        Settings: { 
            screen: SettingsPage,
            navigationOptions:{
                tabBarLabel: 'Paramètres',
                tabBarIcon:({tintColor}) =>(
                    <Icon color={tintColor} size={25} name={'ios-settings'} />
                ),
                barStyle: { backgroundColor: 'white' }
            }
        },
    },
    { 
        initialRouteName: 'Home',
        activeColor:'black',
        inactiveColor:'grey',
    }
);

export default tabNavigator;