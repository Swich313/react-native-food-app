import {Text,  View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import MealsList from '../components/MealsList/MealsList';
import {MEALS} from '../data/dummy-data';

const FavouritesScreen = () => {
    const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids);
    const favouriteMeals = MEALS.filter(item => favouriteMealsIds.includes(item.id));

    if(favouriteMeals.length === 0){
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>No Favourite Meals yet...</Text>
        </View>;
    }

    return <MealsList mealsList={favouriteMeals}/>;
};

export default FavouritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});