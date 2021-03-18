import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Home } from "./screens/Home/Home";
import { Details } from "./screens/Details/Details";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Details") {
              iconName = focused ? "ios-list" : "ios-list";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Details" component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    flexDirection: "row",
  },
  itemCard: {
    backgroundColor: "gray",
    margin: 5,
    flex: 2,
    alignItems: "center",
    width: "33%",
  },
});
