import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import {useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import {removeFavourite, addFavourite} from '../store/redux/favourites';

const MealDetailScreen = ({route, navigation}) => {
    const mealId = route.params.mealId;
    const {id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageUrl,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactoseFree} = MEALS.find(item => item.id === mealId);
    const mealDetailsProps = {
        affordability,
        duration,
        complexity,
        textStyle: styles.detailText,
        iconStyle: styles.detailIcon
    };
    const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids);
    const dispatch = useDispatch();
    const isMealFavourite = favouriteMealsIds.includes(id);

    function changeFavouriteStatusHandler(){
        if(isMealFavourite){
            dispatch(removeFavourite({id: id }));
        } else {
            dispatch(addFavourite({id: id}))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: title,
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
            headerRight: () => {
                return <IconButton
                    icon={isMealFavourite ? 'star' : 'star-outline' }
                    color='white'
                    onPress={changeFavouriteStatusHandler}
                />
            }
        })
    }, [navigation, title, changeFavouriteStatusHandler]);

    return <ScrollView style={styles.rootContainer}>
        <Image source={{uri: imageUrl}} style={styles.image}/>
        <Text style={styles.title}>{title}</Text>
        <View>
            <MealDetails {...mealDetailsProps}/>
        </View>
        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients:</Subtitle>
                <List data={ingredients}/>
                <Subtitle>Steps:</Subtitle>
                <List data={steps}/>
            </View>
        </View>

    </ScrollView>;
};

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    detailIcon: {
        borderRadius: 10,
        width: 20,
        height: 20,
        objectFit: 'fill'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
});