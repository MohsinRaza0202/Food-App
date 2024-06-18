import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { enableScreens } from 'react-native-screens';
import {createStore,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Meals from './Navigation/TabNav';
import FilterTab from './Navigation/Drawer';
import Colors from './Constants/Colors';
import MealReducer from './store/Reducer/meal';

enableScreens();
const rootReducer = combineReducers({
  meal:MealReducer,
});
const store = createStore(rootReducer);

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

export default function App() {
  const [loaded] = useFonts({
    Bold: require('./assets/fonts/Bold.ttf'),
    Regular: require('./assets/fonts/Regular.ttf')
  });
  if (!loaded) {
    return null;
  }
const Drawers = createDrawerNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
       <Drawers.Navigator
       drawerType='front'
       drawerStyle={{
         backgroundColor:'#b3b3b3'
       }}
       ScreenOption={{
        DefuaultNavOption
        }}
       >
    <Drawers.Screen 
    name="Meals" 
    component={Meals}
    options={{
      drawerIcon:({focused})=>(
      <Ionicons
      name="ios-restaurant" size={focused?25:20} color={focused?'black':'gray'}
      />
      ) 
    }}
     />
    <Drawers.Screen  
      name='Filters'
    component={FilterTab}
    options={{
      drawerIcon:({focused})=>(
      <Ionicons
      name="color-filter" size={focused?25:20} color={focused?'black':'gray'}
      />
      ) 
    }}/>
  </Drawers.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
