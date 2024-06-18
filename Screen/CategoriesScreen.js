import React from 'react';
import { StyleSheet, FlatList,ImageBackground} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGirdTile from '../Components/CategoryGirdTile';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';

const CategoriesScreen = props => {
    const renderGirdItem = (itemData) => {
        return (
            
            <CategoryGirdTile
                title={itemData.item.title}
                onselect={() => {
                    props.navigation.navigate('CategoryMealScreen',{
                            categoryId: itemData.item.id
                        });
                }}
                color={itemData.item.color}
            />
        );
    }
    return (
        <ImageBackground source={require('../assets/bg.jpg')}
        style={styles.image}>
        <FlatList
            data={CATEGORIES}
            numColumns={2}
            renderItem={renderGirdItem}
        />
        </ImageBackground>
    );
};
export const ScreenOption = (Navdata) => {
    return {
        headerTitle: 'Pakistani Food',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="Menu" iconName="ios-menu" onPress={() => {
            Navdata.navigation.toggleDrawer();
        }} />
    </HeaderButtons>
    };
};

const styles = StyleSheet.create({
    image:{
        flex:1,  
    }
});
export default CategoriesScreen;



//  ............ Notes............>
 //    push is used when we go to same screen over and over again,push used 
                // in such cases where we have different content of data in different folder
                // and we show that data on after another   
                //  props.navigation.push('Categories')