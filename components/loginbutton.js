import { Pressable, View, Text, StyleSheet } from "react-native";

function LoginButton({ onPress, text }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: "#79FF63" }]}>
      <Pressable
        android_ripple={{ color: "grey" }}
        style={styles.button}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={{ color: "black" }}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default LoginButton;

const styles = StyleSheet.create({
  gridItem: {
    flex: 0,
    margin: 16,
    height: 20,
    width: "20%",
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    justifyContent: "flex-end",
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 0,
    // padding: 16,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
});
