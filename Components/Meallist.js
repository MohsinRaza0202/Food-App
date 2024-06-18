import React from 'react';
import {View, StyleSheet,FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import MealItem from './MealItem'; 
const Meallist = props =>{
    const CurrentFavMeal = useSelector(state=>state.meal.FavoritiesMeal);
    const renderGirdItem = itemData => {
        const isFavorities=CurrentFavMeal.some(meal=>meal.id===itemData.item.id);
        return ( 
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onselect={() => {
                    props.navigation.navigate('MealDetailscreen',{
                            MealId:itemData.item.id,
                            Mealtitle:itemData.item.title,
                            Favmeal:isFavorities
                        
                    });                                                                                                                          
                }}
            />
        );
    };
    return(
        <View style={styles.screen}>
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={props.data}
            renderItem={renderGirdItem}
            style={{ width: '95%' }}
        />
    </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default Meallist;