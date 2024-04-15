import {Pressable, Text, View, StyleSheet, Platform} from 'react-native';
import PressableComponent from './PressableComponent';

const CategoryGridTile = ({title, color, onPress}) => {
    return <View style={styles.gridItem}>
        <PressableComponent onPress={onPress}>
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </PressableComponent>
    </View>
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        // android shadow
        elevation: 4,
        // android_ripple fix
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        // ios shadow
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});