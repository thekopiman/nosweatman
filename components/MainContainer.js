import * as React from "react";

// Nav
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import HomePage from "../screens/HomePage";
import SettingsScreen from "../screens/SettingsScreen";
import DetailsScreen from "../screens/DetailsScreen";

// Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <Tab.Navigator
      initalRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn == homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn == detailsName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn == settingsName) {
            iconName = focused ? "settings" : "settings-outline";
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
      <Tab.Screen name={detailsName} component={DetailsScreen} />
      <Tab.Screen name={settingsName} component={SettingsScreen} />
    </Tab.Navigator>
  );
}
