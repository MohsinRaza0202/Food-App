import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../Components/HeaderButton';
import DefaultText from '../Components/DefaultText';
import { toggleFavorities } from '../store/Action/meal';
import Colors from '../Constants/Colors';

const Listitem = props => {
    return (
        <View style={styles.listdata}>
            <DefaultText style={styles.list}>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailScreen = props => {

    const avaiableMeals = useSelector(state => state.meal.meal);

    const MealId = props.route.params.MealId;
    const SelectedMeal = avaiableMeals.find(meal => meal.id === MealId);

    const CurrentFavMeal = useSelector(state => state.meal.FavoritiesMeal.some(meal => meal.id === MealId))

    const dispatch = useDispatch();

    const toggleFavHandler = useCallback(() => {
        dispatch(toggleFavorities(MealId))
    }, [dispatch, MealId])

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavHandler });
    }, [toggleFavHandler])

    useEffect(() => {
        props.navigation.setParams({ Favmeal: CurrentFavMeal });
    }, [CurrentFavMeal])

    return (
        <ImageBackground
            style={styles.image1}
            source={require('../assets/bg.jpg')}>
            <ScrollView>
                <Image source={{ uri: SelectedMeal.imageUrl }} style={styles.image} />
                <View style={styles.detail}>
                    <DefaultText>{SelectedMeal.duration}m</DefaultText>
                    <DefaultText>{SelectedMeal.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{SelectedMeal.affordability.toUpperCase()}</DefaultText>
                </View>
                <Text style={styles.title}>Ingrdients</Text>
                {SelectedMeal.ingrdients.map(ingrdients => (
                    <Listitem key={ingrdients}>{ingrdients}</Listitem>
                ))}
                <Text style={styles.title}>Step</Text>
                {SelectedMeal.step.map(step => (
                    <Listitem key={step}>{step}</Listitem>
                ))}
            </ScrollView>
        </ImageBackground>
    );
};

export const ScreenOption = navigationData => {
    const MealTitle = navigationData.route.params.Mealtitle;
    const toggleFavHandler = navigationData.route.params.toggleFav;
    const isFavMeal = navigationData.route.params.Favmeal;
    // const SelectedMeal = MEALS.find(meal => meal.id === MealId);
    return {
        headerTitle: MealTitle,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Favorite"
                iconName={isFavMeal ? 'ios-star' : 'ios-star-outline'}
                onPress={toggleFavHandler}
            />
        </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    image1: {
        flex: 1,
    },
    detail: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'gray',
        height: 30,
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Bold',
        fontSize: 24,
        marginVertical: 20,
        color: 'black'
    },
    listdata: {
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: Colors.primary,

    },
    list: {
        color: 'white',
        fontFamily: 'Regular'
    }
});

export default MealDetailScreen;