import * as React from "react";

// Nav
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import HomePage from "../screens/HomePage";
import HistoryScreen from "../screens/HistoryScreen";
import LeaderboardScreen from "../screens/LeaderboardScreen";

// Screen names
const homeName = "Home";
const leaderboardName = "Leaderboard";
const historyName = "History";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <Tab.Navigator
      initalRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn == homeName) {
            iconName = "home-outline";
          } else if (rn == leaderboardName) {
            iconName = "trophy-outline";
          } else if (rn == historyName) {
            iconName = "time-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007D38",
        tabBarInactiveTintColor: "#00B14F",
        //Tab bar styles can be added here
        tabBarStyle: { height: 90 },
        tabBarLabelStyle: { paddingBottom: 3 },
        headerShown: false,
      })}
    >
      <Tab.Screen name={homeName} component={HomePage} />
      <Tab.Screen name={leaderboardName} component={LeaderboardScreen} />
      <Tab.Screen name={historyName} component={HistoryScreen} />
    </Tab.Navigator>
  );
}
