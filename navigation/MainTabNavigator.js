import HomePage from "../pages/HomePage";
import SettingsPage from "../pages/SettingsPage";
import FavoritesPage from "../pages/FavoritesPage";
import FavoritesAddPage from "../pages/FavoritesAddPage";
import HomeDetailsPage from "../pages/HomeDetailsPage"
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { createStackNavigator } from "react-navigation-stack";

const favoritesNavigator = createStackNavigator(
    {
        Favorites:{
            screen:FavoritesPage
        },
        FavoritesAdd:{
            screen:FavoritesAddPage
        }
    },
    {
        initialRouteName:'Favorites',
        defaultNavigationOptions:{
            headerStyle: {
                backgroundColor:'white',
            },
            headerTintColor:'black',
            headerTitleStyle:{
                fontWeight: 'bold'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home:{
            screen : HomePage,
        },
        HomeDetails:{
            screen: HomeDetailsPage
        },
    },
    {
        initialRouteName:'Home',
        defaultNavigationOptions:{
            headerStyle: {
                backgroundColor:'white',
            },
            headerTintColor:'black',
            headerTitleStyle:{
                fontWeight: 'bold'
            }
        }
    }
)

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
        Favorites: { 
            screen: favoritesNavigator,
            navigationOptions:{
                tabBarLabel: 'Favoris',
                tabBarIcon:({tintColor}) =>(
                    <Icon color={tintColor} size={25} name={'ios-star'} />
                ),
                barStyle: { backgroundColor: 'white' }
            }
        }
    },
    { 
        initialRouteName: 'Home',
        activeColor:'black',
        inactiveColor:'grey',
    }
);

export default tabNavigator;