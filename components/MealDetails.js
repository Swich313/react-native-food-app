import {Image, Text, View,  StyleSheet} from 'react-native';

const MealDetails = ({duration, complexity, affordability, style, textStyle, iconStyle}) => {
    return (
        <View style={[styles.details, style]}>
            <View style={styles.detailItem}>
                <Image source={require('../assets/icons/clock-icon.png')} style={[styles.icon, iconStyle]}/>
                <Text style={[styles.text, textStyle]}>{duration}min</Text>
            </View>
            <View style={styles.detailItem}>
                <Image source={require('../assets/icons/difficulty-icon.png')} style={[styles.icon, iconStyle]}/>
                <Text style={[styles.text, textStyle]}>{complexity.toUpperCase()}</Text>
            </View>
            <View style={styles.detailItem}>
                <Image source={require('../assets/icons/money-icon.png')} style={[styles.icon, iconStyle]}/>
                <Text style={[styles.text, textStyle]}>{affordability.toUpperCase()}</Text>
            </View>
        </View>
    );
};

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        marginHorizontal: 4,
    },
    text: {
        fontSize: 12
    },
    icon: {
        width: 18,
        height: 18,
        backgroundColor: 'white',
        objectFit: 'contain'
    }
});