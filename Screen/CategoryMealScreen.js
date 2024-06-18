import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import {ImageBackground,StyleSheet} from 'react-native'
import {useSelector} from 'react-redux';
import Meallist from '../Components/Meallist';
import DefaultText from '../Components/DefaultText'
import Colors from '../Constants/Colors';

const CategoryMealScreen = props => {
    const avaiableMeals = useSelector(state=>state.meal.FiltersMeal);
    const catId = props.route.params.categoryId
    // const { catId } = route.params;
    const DisplayedMeal = avaiableMeals.filter(meal =>
        meal.categoryIds.indexOf(catId) >= 0
    );
    if(DisplayedMeal.length===0){
        return(
            <ImageBackground
            style={styles.image} 
            source={require('../assets/bg.jpg')}
            >
             <DefaultText style={styles.text}>No meals found,maybe check your filters?</DefaultText>
            </ImageBackground>
        )
    }
    return (
        <ImageBackground
        style={styles.image} 
        source={require('../assets/bg.jpg')}>
        <Meallist data={DisplayedMeal} navigation={props.navigation}/>
        </ImageBackground>
    );
};
export const ScreenOption = navigationData => {
    // const catId = navigationData.navigation.getParam('categoryId');
    const  catId  = navigationData.route.params.categoryId;
    const SelectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: SelectedCategory.title,
    };
};
const styles = StyleSheet.create({
    image:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:Colors.primary,
        marginBottom:300,
        fontFamily:'Regular',
        fontSize:17,
    }
})

export default CategoryMealScreen;

 // pop is alternative of goBack does the same work as goBack
                // the difference is that it only work in stakeNavigator but 
                // goBack is avaiable in all Navigator
                // props.navigation.pop();

         // // goBack is used in such case when we do some configuration and
                // // when we press save button we automatically leave the page    
                // title="Go back" onPress={() => {
                //     props.navigation.goBack();
                // }}  