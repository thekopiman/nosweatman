import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import { useState } from "react";

import BookIppt from "../components/BookIppt";

export default function BookIPPT() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [bookings, setBookings] = useState([]);

  function startBookIpptHandler() {
    setModalIsVisible(true);
  }

  function cancelBookIpptHandler() {
    setModalIsVisible(false);
  }

  function bookIpptHandler(array) {
    setBookings((bookings) => [...bookings, array]);
    console.log(bookings);
    setModalIsVisible(false);
  }

  function renderListItem(itemData) {
    return (
      <View style={styles.listItemContainer}>
        <Text style={styles.listItem}>{itemData.item.location}</Text>
        <Text style={styles.listItem}>{itemData.item.date}</Text>
        <Text style={styles.listItem}>{itemData.item.time}</Text>
      </View>
    );
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.header}>IPPT Booking</Text>
      </View>
      <Pressable onPress={startBookIpptHandler}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Book IPPT</Text>
          <View style={styles.imageContainer}>
            <Image
              style={styles.buttonImg}
              source={require("../assets/situp.png")}
            />
          </View>
        </View>
      </Pressable>
      <BookIppt
        visible={modalIsVisible}
        onCancel={cancelBookIpptHandler}
        onBookIppt={bookIpptHandler}
      />
      <View
        style={[
          styles.listItemContainer,
          { flex: 0, backgroundColor: "#78B752" },
        ]}
      >
        <View style={styles.listItem}>
          <Text>Location</Text>
        </View>
        <View style={styles.listItem}>
          <Text>Date</Text>
        </View>
        <View style={styles.listItem}>
          <Text>Time</Text>
        </View>
      </View>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={renderListItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#F8FFF5",
  },
  headingContainer: {
    paddingVertical: 20,
    marginBottom: 20,
  },
  header: {
    fontSize: 40,
    fontWeight: "800",
  },
  bookingContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#A9FF74",
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "800",
    paddingLeft: 20,
  },
  buttonImg: {
    width: 60,
    height: 50,
    resizeMode: "contain",
  },
  imageContainer: {
    backgroundColor: "#78B752",
    padding: 6,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#DFFFCC",
    borderRadius: 10,
    marginVertical: 5,
    // width: 300,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  listItem: {
    flex: 1,
    padding: 10,
    // borderWidth: 1,
    // borderColor: "red",
    alignItems: "center",
  },
});
