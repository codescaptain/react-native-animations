import React from "react";
import { StyleSheet, Image, View } from "react-native";

const FlowersAndWay = () => (
  <View style={styles.container}>
    <Image
      source={require("../assets/flowers-and-way.png")}
      style={styles.flowers}
      resizeMode={"contain"}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    zIndex: 5,
  },
  flowers: {
    width: 350,
    height: 350,
  },
});
export default FlowersAndWay;
