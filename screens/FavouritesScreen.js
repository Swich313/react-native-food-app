import {useContext} from 'react';
import {Text,  View, StyleSheet} from 'react-native';

import MealsList from '../components/MealsList/MealsList';
import {FavouritesContext} from '../store/context/favourites-context';
import {MEALS} from '../data/dummy-data';

const FavouritesScreen = () => {
    const favouriteMealsCtx = useContext(FavouritesContext);
    const favouriteMeals = MEALS.filter(item => favouriteMealsCtx.ids.includes(item.id));

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