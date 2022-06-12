import { View, Text, Pressable, StyleSheet, Image } from "react-native";

function PrimaryButton({ textline, iconlink }) {
  function pressHandler() {
    console.log("Pressed!!");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      {/* pressed is a boolean and its name is fixed */}
      <Pressable
        // Making it a if statement, if pressed is true, array will be applied
        // if false, then the single object will be applied
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#ffada9" }}
      >
        <View
          style={{
            flex: 1,
            resizeMode: "contain",
            width: "30%",
            borderWidth: 2,
            borderColor: "black",
          }}
        >
          <Image
            style={{
              flex: 1,
              resizeMode: "contain",
              width: "100%",
              borderWidth: 2,
              borderColor: "black",
            }}
            source={iconlink}
          />
        </View>

        <Text style={styles.buttonText}>{textline}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    flex: 1,
    flexDirection: "row",
  },
  // Main button style
  buttonInnerContainer: {
    backgroundColor: "#A9FF74",
    paddingVertical: 8,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "center",
  },
  // Button text
  buttonText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
  },
  // Dedicated style for ios
  pressed: {
    opacity: 0.75,
  },
});
