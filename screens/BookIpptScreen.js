import { StyleSheet, Text, View, Pressable, Image, Button } from "react-native";
import { useState } from "react";

import BookIppt from "../components/BookIppt";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [bookings, setBookings] = useState([]);

  function startBookIpptHandler() {
    setModalIsVisible(true);
  }

  function cancelBookIpptHandler() {
    setModalIsVisible(false);
  }

  function bookIpptHandler() {
    setBookings((currentBookings) => [...currentBookings]);
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
              source={require("../assets/Sit%20Up.png")}
            />
          </View>
        </View>
      </Pressable>
      <BookIppt
        visible={modalIsVisible}
        onCancel={cancelBookIpptHandler}
        onBookIppt={bookIpptHandler}
      />
      <View style={styles.bookingContainer}>
        <Text></Text>
      </View>
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
    marginTop: 60,
    paddingVertical: 40,
    paddingHorizontal: 20,
    flex: 0.3,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
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
  imageContainer: {
    backgroundColor: "#78B752",
    padding: 6,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  buttonImg: {
    width: 60,
    height: 50,
    resizeMode: "contain",
  },
});
