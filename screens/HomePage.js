import { TextInput, View, StyleSheet, Text } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

function HomePage() {
  return (
    <View style={styles.overallContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Welcome back,</Text>
        {/* Username goes here */}
        <Text style={styles.header}>Admin!</Text>
      </View>
      <View style={styles.mainButtonContainer}>
        <PrimaryButton>Start IPPT</PrimaryButton>
      </View>
      <View style={styles.subButtonContainer}>
        <PrimaryButton>Push up</PrimaryButton>
      </View>
      <View style={styles.subButtonContainer}>
        <PrimaryButton>Sit up</PrimaryButton>
      </View>
      <View style={styles.subButtonContainer}>
        <PrimaryButton>2.4km run</PrimaryButton>
      </View>
      <View style={styles.subButtonContainer}></View>
    </View>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  overallContainer: {
    backgroundColor: "#F8FFF5",
    flex: 1,
  },
  headerContainer: {
    marginTop: 60,
    paddingVertical: 40,
    paddingHorizontal: 20,
    flex: 0.3,
    borderColor: "#cccccc",
    borderWidth: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
  },
  mainButtonContainer: {
    flex: 1,
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 15,
  },
  subButtonContainer: {
    flex: 0.6,
    borderColor: "#cccccc",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  button: {
    flex: 1,
  },
});
