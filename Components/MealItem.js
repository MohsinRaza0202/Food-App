import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';

const MealItem = props => {
    return (
        <View style={styles.screen}>
        <TouchableOpacity onPress={props.onselect}> 
                <View style={{ ...styles.mealrow, ...styles.header }}>
                <ImageBackground source={{uri:props.image}} 
                style={styles.image}
                >
                      <View style={styles.textContainer}>
                    <Text style={styles.text} numberOfLines={1}>{props.title}</Text>
                    </View>
               </ImageBackground>
                </View>
                <View style={{ ...styles.mealrow, ...styles.data }}>
                    <Text style={styles.textData}>{props.duration}m</Text>
                    <Text style={styles.textData}>{props.complexity.toUpperCase()}</Text>
                    <Text style={styles.textData}>{props.affordability.toUpperCase()}</Text>
                </View>
        </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    screen:{
    flex:1,
    height: 200,
    backgroundColor:'gray',
    width:'100%',
    borderRadius:8,
    marginTop:8,
    overflow:'hidden',
    marginVertical:5,
    },
    mealrow: {
        flexDirection: 'row'
    },
    header:{
    height:'88%',
    },
    data: {
        paddingHorizontal:10,
        justifyContent: 'space-between',
        alignItems:'center',
        height:'12%',
    },
    image:{
        height:'100%',
        width:'100%',
        justifyContent:'flex-end'
    },
    text:{
        fontSize:18,
        color:'white',
        fontFamily:'Regular',
        textAlign:'center'
    },
    textContainer:{
        backgroundColor:'black',
        paddingHorizontal:10,
        paddingVertical:2,
    },
    textData:{
        fontFamily:'Bold',
        fontSize:14,
        color:'black'
    }
});
export default MealItem;