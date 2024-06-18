import React from 'react';
import {} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MealDetailscreen,{ScreenOption as MealDetailscreens } from '../Screen/MealDetailScreen';
import FavoritiesScreen,{ScreenOption as  FavoritiesScreens} from '../Screen/FavoritiesScreen';
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

const FavMeal = ()=>{
const FavMealScreen = createStackNavigator();
return(
<FavMealScreen.Navigator screenOptions={DefuaultNavOption}>

<FavMealScreen.Screen
name='FavoritiesScreen'
component={FavoritiesScreen}
options={FavoritiesScreens}
/>
<FavMealScreen.Screen
name="MealDetailscreen"
component={MealDetailscreen}
options={MealDetailscreens}
/>
</FavMealScreen.Navigator>
    )
}
export default FavMeal;