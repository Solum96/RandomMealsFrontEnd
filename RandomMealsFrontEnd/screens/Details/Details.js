import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

export const Details = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Det här är en ny sida på vår app</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
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
