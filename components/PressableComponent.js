import { Pressable, StyleSheet } from 'react-native';

const PressableComponent = ({children, onPress}) => {
    return <Pressable
        onPress={onPress}
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
    >
        {children}
    </Pressable>;
};

export default PressableComponent;

const styles = StyleSheet.create({
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    }
});
