import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Platform, Text } from 'react-native';


import Colors from '../Constants/Colors';
import CategoriesScreen,{ScreenOption as CategoriesScreens } from '../Screen/CategoriesScreen';
import CategoryMealScreen,{ScreenOption as CategoryMealScreens } from '../Screen/CategoryMealScreen';
import MealDetailscreen,{ScreenOption as MealDetailscreens } from '../Screen/MealDetailScreen';


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


const MealsNavigators = createStackNavigator(); 

const MealsNavigator = () => {
    return (
            <MealsNavigators.Navigator screenOptions={DefuaultNavOption}>

                <MealsNavigators.Screen 
                name="CategoriesScreen" 
                component={CategoriesScreen}
                options={CategoriesScreens} />

                <MealsNavigators.Screen 
                name="CategoryMealScreen" 
                component={CategoryMealScreen}
                options={CategoryMealScreens} />

                <MealsNavigators.Screen 
                name="MealDetailscreen" 
                component={MealDetailscreen}
                options={MealDetailscreens} />
            </ MealsNavigators.Navigator>

    );
}


export default  MealsNavigator;

