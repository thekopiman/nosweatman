import { View, Text, Pressable, StyleSheet } from 'react-native';


function PrimaryButton({ children }) {
    function pressHandler() {
        console.log('Pressed!!');
    }
    return (
        <View style={styles.buttonOuterContainer}>
            {/* pressed is a boolean and its name is fixed */}
            <Pressable
            // Making it a if statement, if pressed is true, array will be applied
            // if false, then the single object will be applied
            style={({pressed}) => pressed 
                ? [styles.pressed, styles.buttonInnerContainer]
                : styles.buttonInnerContainer}
            onPress={pressHandler}
            android_ripple={{ color: '#ffada9'}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
        flex: 1
    },
    // Main button style
    buttonInnerContainer: {
        backgroundColor: '#A9FF74',
        paddingVertical: 8,
        paddingHorizontal: 16,
        flex: 1,
        justifyContent: "center"
    },
    // Button text
    buttonText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    // Dedicated style for ios
    pressed: {
        opacity: 0.75
    }
});
