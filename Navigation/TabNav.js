import React from 'react';
import {Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
 
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import FiltersScreen,{ScreenOption as FiltersScreens } from '../Screen/FiltersScreen';
import MealsNavigator from './MealsNavigator';
import FavMeal from './FavMeal';
import Colors from '../Constants/Colors';


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

const TabNav = ()=>{
    const Tab = createMaterialBottomTabNavigator(); 
   
    return(
<Tab.Navigator
        activeColor='white'
        shifting={true}
        screenOptions={DefuaultNavOption}>
           <Tab.Screen
           name="Meals"
           component={MealsNavigator}
           options={{
              tabBarIcon: ({color}) => {
                  return <Ionicons name="ios-restaurant" size={25} color={color} />
              },
              tabBarColor: Colors.primary,
              tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'Regular' }}>Meals</Text> : 'meals'
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
          tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'Regular' }}>Filters</Text> : 'filters'
      }}
        />
       </Tab.Navigator>
    )
}
export default TabNav;