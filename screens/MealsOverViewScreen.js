import {useLayoutEffect} from 'react';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

const MealsOverViewScreen = ({ route, navigation }) => {
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter(item => item.categoryIds.includes(categoryId));

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(item => item.id === categoryId).title;

        navigation.setOptions({
            title: categoryTitle,
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'}
        })
    }, [categoryId, navigation]);

    return <MealsList mealsList={displayedMeals}/>;
};

export default MealsOverViewScreen;

