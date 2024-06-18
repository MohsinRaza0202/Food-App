import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, ImageBackground } from 'react-native';
import { useDispatch } from 'react-redux'

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';
import Colors from '../Constants/Colors';
import { filterHandler } from '../store/Action/meal'

const FilterSwitch = props => {
    return (
        <View style={styles.filter}>
            <Text style={styles.title1}>{props.label}</Text>
            <Switch
                trackColor={{ true: Colors.accent, false: 'silver' }}
                thumbColor='white'
                value={props.state}
                onValueChange={props.onchange}
            />
        </View>
    );
};

const FiltersScreen = props => {
    const { navigation } = props;

    const [isGlutenFree, SetisGlutenFree] = useState(false)
    const [isVegan, SetisVegan] = useState(false)
    const [isVegetarin, SetisVegetarin] = useState(false)
    const [isLoctoseFree, SetisLoctoseFree] = useState(false)

    const dispatch = useDispatch();

    const Savefilter = useCallback(() => {
        const Appliedfilter = {
            GlutenFree: isGlutenFree,
            Vegan: isVegan,
            Vegetarin: isVegetarin,
            LoctoseFree: isLoctoseFree,
        };
        dispatch(filterHandler(Appliedfilter));
    }, [isGlutenFree, isVegan, isVegetarin, isLoctoseFree, dispatch]);

    useEffect(() => {
        navigation.setParams({ save: Savefilter });
    }, [Savefilter]);

    return (
        <ImageBackground
            source={require('../assets/bg.jpg')}
            style={styles.screen}>
            <Text style={styles.title}>Available Filters and Restirctions</Text>

            <FilterSwitch
                label='IsGlutenFree'
                state={isGlutenFree}
                onchange={newvalue => SetisGlutenFree(newvalue)} />

            <FilterSwitch
                label='IsVegan'
                state={isVegan}
                onchange={newvalue => SetisVegan(newvalue)} />

            <FilterSwitch
                label='IsVegetarin'
                state={isVegetarin}
                onchange={newvalue => SetisVegetarin(newvalue)} />

            <FilterSwitch
                label='IsLoctoseFree'
                state={isLoctoseFree}
                onchange={newvalue => SetisLoctoseFree(newvalue)} />
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontFamily: 'Bold',
        fontSize: 20,
        marginTop: 20,
        color: Colors.accent,
    },
    title1: {
        color: Colors.accent,
        fontSize: 15,
        fontFamily: 'Regular'
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10,
    }
});

export const ScreenOption = Navdata => {
    const filters = Navdata.route.params ? Navdata.route.params.save : null;
    return {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.accent : 'white'
        },
        headerTitle: 'Filters',
        headerTitleStyle: {
            color: 'white'
        },
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                Navdata.navigation.toggleDrawer();
            }} />
        </HeaderButtons>,

        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu"
                iconName="ios-save"
                onPress={filters}
            />
        </HeaderButtons>
    };
};

export default FiltersScreen;