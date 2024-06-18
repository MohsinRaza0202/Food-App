import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FiltersScreen,{ScreenOption as FiltersScreens } from '../Screen/FiltersScreen';
import Colors from '../Constants/Colors';
import MealsNavigator from './MealsNavigator';
import FavMeal from './FavMeal';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native'

const DefuaultNavOption = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    headerTitleStyle: {
        fontFamily: 'Bold',
    },
    headerBackTitleStyle: {
        fontFamily: "Regular"
    },
    headerShown:true
  };

const HomeStack =()=>{
    const Stack = createStackNavigator();
    return(
  <Stack.Navigator ScreenOption={DefuaultNavOption}>
    <Stack.Screen
    name="Filters"
    component={FiltersScreen}
    options={FiltersScreens}
    />
  </Stack.Navigator>
    )
  }
  
  const FilterTab = ()=>{
    const Tab = createMaterialBottomTabNavigator(); 
    return(
  <Tab.Navigator
        activeColor='white'
        shifting={true}
        screenOptions={DefuaultNavOption}
        initialRouteName="filter">
           <Tab.Screen
           name="Meals"
           component={MealsNavigator}
           options={{
              tabBarIcon: ({color}) => {
                  return <Ionicons name="ios-restaurant" size={25} color={color} />
              },
              tabBarColor: Colors.primary,
              tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'Regular' }}>Meals</Text> : 'meal'
          }} />
          <Tab.Screen
          name='Favroite'
          component={FavMeal}
          options={{
              tabBarIcon: ({color}) => {
                  return <Ionicons name="ios-star" size={25} color={color} />
              },
              tabBarColor: Colors.accent,
              tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'Regular' }}>Favorities</Text> : 'Favorities'
          }}
          />
          <Tab.Screen
          name='filter'
          component={HomeStack}
          options={{
            tabBarIcon: ({color}) => {
                return <Ionicons name="color-filter" size={25} color={color} />
            },
            tabBarColor: Colors.accent,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'Regular' }}>Filters</Text> : 'meal'
        }}
          />
       </Tab.Navigator>
    )
  }
  export default FilterTab;