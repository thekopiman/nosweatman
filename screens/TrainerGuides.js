import { View, Text, StyleSheet, Pressable } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function TrainerGuides({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Guides</Text>
      </View>
      <View style={styles.mainButtonContainer}>
        <PrimaryButton
          textline="Push Ups"
          iconlink={require("../assets/pushup.png")}
          pressHandler={() => navigation.navigate("TrainerPushUp")} //Change Location
        />
      </View>
      <View style={styles.mainButtonContainer}>
        <PrimaryButton
          textline="Sit Ups"
          iconlink={require("../assets/situp.png")}
          pressHandler={() => navigation.navigate("TrainerSitUp")} //Change Location
        />
      </View>
      <View style={styles.mainButtonContainer}>
        <PrimaryButton
          textline="2.4km run"
          iconlink={require("../assets/running.png")}
          pressHandler={() => navigation.navigate("TrainerRun")} //Change Location
        />
      </View>
    </View>
  );
}
export default TrainerGuides;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#F8FFF5",
  },
  headerContainer: {
    marginTop: "20%",
    // paddingTop: 40,
    paddingHorizontal: 20,
    flex: 1,
    // justifyContent: "center",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
  },
  mainButtonContainer: {
    flex: 1,
    padding: 15,
    width: "100%",
  },
});
