import {FlatList, View, StyleSheet} from 'react-native';

import MealItem from './MealItem';

const MealsList = ({mealsList}) => {

    function renderMealItem(itemData) {
        const {id, title, affordability, complexity, imageUrl, duration} = itemData.item;

        const mealItemProps = {id, title, imageUrl, affordability, complexity, duration};
        return <MealItem {...mealItemProps} />;
    }

    return <View style={styles.container}>
            <FlatList
                data={mealsList}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
    </View>;

};

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});