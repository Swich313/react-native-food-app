import {FlatList, StyleSheet} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';



const CategoriesScreen = ({navigation}) => {

    function renderCategoryItem(itemData) {
        const {title, color, id} = itemData.item;

        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: id
            });
        }
        return <CategoryGridTile title={title} color={color} onPress={pressHandler}/>;
    }

    return <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
        numColumns={2}
    />;
};

export default CategoriesScreen;

const styles = StyleSheet.create({

});