import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WindMill from "./components/WindMill";

export default function App() {
  return (
    <View style={styles.container}>
      <WindMill />
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
