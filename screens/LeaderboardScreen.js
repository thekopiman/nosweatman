import * as React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { LEADER } from "../dummy-stats/data";
import DropDownPicker from "react-native-dropdown-picker";

export default function LeaderboardScreen({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Push Up", value: "pushup" },
    { label: "Sit Up", value: "situp" },
    { label: "Run", value: "run" },
  ]);
  //   if (!open) {
  //     console.log(value);
  //   }

  const displayedLeader = LEADER.filter((leaderItem) => {
    return leaderItem.exercise == value;
  });

  function renderExerciseItem(itemData) {
    return (
      <View style={styles.listItemContainer}>
        <Text style={styles.listItem}>{itemData.item.name}</Text>
        <Text style={styles.listItem}>{itemData.item.score}</Text>
      </View>
    );
  }

  return (
    <View style={styles.maincontainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Leaderboard</Text>
      </View>
      <View style={styles.filterContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      <View style={[styles.listItemContainer, { backgroundColor: "#78B752" }]}>
        <View style={styles.listItem}>
          <Text>Name</Text>
        </View>
        <View style={styles.listItem}>
          <Text>Score</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={displayedLeader}
          keyExtractor={(item) => item.id}
          renderItem={renderExerciseItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#F8FFF5",
  },

  headerContainer: {
    marginTop: 60,
    paddingVertical: 40,
    paddingHorizontal: 20,
    flex: 2,
    justifyContent: "center",
  },
  filterContainer: {
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: "center",
    elevation: 2,
    zIndex: 100,
  },
  listContainer: {
    flex: 5,
    justifyContent: "center",
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#A9FF74",
    borderRadius: 10,
    marginVertical: 5,
    width: 300,
    justifyContent: "space-between",
  },
  listItem: {
    flex: 1,
    padding: 10,
    // borderWidth: 1,
    // borderColor: "red",
    alignItems: "center",
  },
});
