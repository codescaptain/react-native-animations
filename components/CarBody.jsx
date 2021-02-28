import React, { Component } from "react";
import { View, Text, StyleSheet, Animated } from "react-native";

class Car extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animation, {
          duration: 400,
          toValue: 5,
        }),
        Animated.timing(this.state.animation, {
          duration: 500,
          toValue: 0,
        }),
      ])
    ).start();
  };
  render() {
    const animatedSyules = {
      top: this.state.animation,
    };
    return (
      <Animated.Image
        resizeMode="contain"
        source={require("../assets/car.png")}
        style={[styles.carBody, animatedSyules]}
      />
    );
  }
}
const styles = StyleSheet.create({
  carBody: {
    width: 200,
    height: 200,
    position: "absolute",
    left: 0,
    top: 0,
  },
});

export default Car;
