import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Car from "./components/Car";
import WindMill from "./components/WindMill";
import FlowersAndWay from "./components/FlowersAndWay";

export default function App() {
  return (
    <View style={styles.container}>
      <WindMill style={{ right: 250, top: 40 }} />
      <WindMill style={{ left: 10, top: -70 }} />
      <FlowersAndWay />
      <Car />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#94BBA9",
    alignItems: "center",
    justifyContent: "center",
  },
});
