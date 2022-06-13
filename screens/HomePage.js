import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput, View, StyleSheet, Text } from "react-native";

import PrimaryButton from "../components/PrimaryButton";

const Stack = createNativeStackNavigator();

function HomePage({ navigation }) {
  // function pressIPPTtrainerHandler() {
  //   navigation.navigate("IPPT Trainer");
  // }
  return (
    <View style={styles.overallContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Welcome back,</Text>
        {/* Username goes here */}
        <Text style={styles.header}>Admin!</Text>
      </View>
      <View style={styles.mainButtonContainer}>
        <PrimaryButton
          textline="IPPT Trainer"
          iconlink={require("../assets/running.png")}
          pressHandler={() => navigation.navigate("IPPT Trainer")}
        />
      </View>
      <View style={styles.subButtonContainer}>
        <PrimaryButton
          textline="Upload scores"
          iconlink={require("../assets/uploadscores.png")} // Change the file location later
          pressHandler={() => navigation.navigate("UploadScores")}
        />
      </View>
      <View style={styles.subButtonContainer}>
        <PrimaryButton
          textline="Book IPPT"
          iconlink={require("../assets/situp.png")} // Change the file location later
          pressHandler={() => navigation.navigate("BookIPPT")}
        />
      </View>
      <View style={styles.subButtonContainer}>
        <PrimaryButton
          textline="Health Checkup"
          iconlink={require("../assets/healthcheckup.png")} // Change the file location later
          pressHandler={() => navigation.navigate("HealthCheckUp")}
        />
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
    justifyContent: "center",
  },
  header: {
    fontSize: 35,
    fontWeight: "bold",
  },
  mainButtonContainer: {
    flex: 1,
    padding: 15,
  },
  subButtonContainer: {
    flex: 0.6,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  button: {
    flex: 1,
  },
});
