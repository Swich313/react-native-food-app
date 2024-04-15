import {View, Text, Pressable, Image, StyleSheet, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MealDetails from '../MealDetails';
import PressableComponent from '../PressableComponent';

const MealItem = ({id, title, imageUrl, affordability, duration, complexity}) => {
    const mealDetailsProps = {affordability, duration, complexity};

    const navigation = useNavigation();

    function pressMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    }

    return (
        <View style={styles.mealItem}>
            <PressableComponent onPress={pressMealItemHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails {...mealDetailsProps}/>
                </View>
            </PressableComponent>
        </View>
    );
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        // android shadow
        elevation: 4,
        // android_ripple fix
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        // ios shadow
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    }
});