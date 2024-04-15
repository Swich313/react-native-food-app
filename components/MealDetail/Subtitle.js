import {Text, View, StyleSheet} from 'react-native';

const Subtitle = ({children}) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
};

export default Subtitle;

const styles = StyleSheet.create({
    subtitleContainer: {
        borderBottomWidth: 2,
        borderColor: '#e2b497',
        padding: 6,
        marginHorizontal: 14,
        marginVertical: 4,
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});