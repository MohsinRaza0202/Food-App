import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native'

const CategoryGirdTile = props => {
    let TouchableCamp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCamp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.GirdItem}>
            <TouchableCamp
                onPress={props.onselect}
                style={{ flex: 1 }}
            >
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            </TouchableCamp>
        </View>
    );
};
const styles = StyleSheet.create({
    GirdItem: {
        flex: 1,
        margin: 10,
        height: 150,
        borderRadius: 10,
        overflow:  Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' :'visible',
        elevation: 6,
    },
    container: {
        borderRadius: 2,
        borderColor: 'red',
        shadowColor: 'red',
        shadowOpacity: 2,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 2 },
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Bold',
        fontSize: 20,
        color:'black'
    }
})
export default CategoryGirdTile;