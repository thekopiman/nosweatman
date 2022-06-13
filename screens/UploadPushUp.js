import { useState } from "react";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";
import LoginButton from "../components/loginbutton";

function UploadPushUp() {
  const [text, setText] = useState("");
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Upload your push ups score</Text>
      </View>
      <View style={styles.instructionsContainer}>
        <Text style={{ flex: 0, fontSize: 20, fontWeight: "bold" }}>
          Push ups in a minute
        </Text>
      </View>
      <View style={styles.ContainerTextWrapper}>
        <View style={{ flex: 1 }}>
          <Text>Repititions:</Text>
        </View>
        <View style={styles.containertext}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            onChangeText={setText}
            value={text}
          />
        </View>
      </View>
      <LoginButton
        onPress={() => {
          setText("");
          //   text = "";
        }}
        text={"Submit"}
      />
    </View>
  );
}
export default UploadPushUp;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#F8FFF5",
  },
  headerContainer: {
    marginTop: "30%",
    // paddingTop: 40,
    paddingHorizontal: 20,
    flex: 0,
    // justifyContent: "center",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
  },
  instructionsContainer: {
    flex: 0,
    alignItems: "flex-start",
    width: "80%",
    marginTop: "10%",
  },
  ContainerTextWrapper: {
    flex: 0,
    flexDirection: "row",
    width: "50%",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  containertext: {
    flex: 0,
    paddingVertical: 20,
  },
  input: {
    flex: 0,
    fontSize: 16,
    backgroundColor: "#97FF95",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 100,
    fontSize: 16,
  },
});
