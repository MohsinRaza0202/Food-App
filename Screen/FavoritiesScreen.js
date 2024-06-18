import React from 'react';
import { View,Text,StyleSheet,ImageBackground } from 'react-native'
import Meallist from '../Components/Meallist';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import Colors from '../Constants/Colors';
import {useSelector} from 'react-redux';
import DefaultText from '../Components/DefaultText';

const FavoritiesScreen = props =>{
    const  FavMeal = useSelector(state=>state.meal.FavoritiesMeal)

    if(FavMeal.length===0||!FavMeal){
        return(
            <ImageBackground 
            source={require('../assets/bg.jpg')}
            style={styles.container}>
                <DefaultText style={styles.text}>No favorite meal found. Start adding some</DefaultText>
            </ImageBackground>
        );
    };
    return (
     <Meallist data={FavMeal} navigation={props.navigation}/>
    );
};


export const ScreenOption = Navdata => {
    return {
        headerStyle: {
            backgroundColor:Platform.OS==='android'?Colors.accent:'white' 
        },
        headerTitle: 'Favorities', 
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                Navdata.navigation.toggleDrawer();
            }} />
        </HeaderButtons>

    };
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
      color:Colors.accent,
      marginBottom:300,
      fontSize:17,
      fontFamily:'Regular' 
    }
})

export default FavoritiesScreen;