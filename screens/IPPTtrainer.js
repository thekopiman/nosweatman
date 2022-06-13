import { View, Text, StyleSheet, Pressable } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function IPPTtrainer({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>IPPT Trainer</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-start" }}>
        <Text style={{ flex: 1, fontSize: 20, fontWeight: "bold" }}>
          Select a sport:
        </Text>
      </View>
      <View style={styles.mainButtonContainer}>
        <PrimaryButton
          textline="Push Ups"
          iconlink={require("../assets/pushup.png")}
          pressHandler={() => navigation.navigate("TrainerPushUp")}
        />
      </View>
      <View style={styles.mainButtonContainer}>
        <PrimaryButton
          textline="Sit Ups"
          iconlink={require("../assets/situp.png")}
          pressHandler={() => navigation.navigate("TrainerSitUp")}
        />
      </View>
      <View style={styles.mainButtonContainer}>
        <PrimaryButton
          textline="2.4km run"
          iconlink={require("../assets/running.png")}
          pressHandler={() => navigation.navigate("TrainerRun")}
        />
      </View>
      <View style={styles.mainButtonContainer}>
        <PrimaryButton
          textline="Guides"
          iconlink={require("../assets/guides.png")}
          pressHandler={() => navigation.navigate("TrainerGuides")}
        />
      </View>
    </View>
  );
}
export default IPPTtrainer;

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
