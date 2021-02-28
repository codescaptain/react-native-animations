import React, { Component } from "react";
import { View, Text, Animated, Image, StyleSheet, Easing } from "react-native";

class Tire extends Component {
  state = {
    animation: new Animated.Value(0),
  };
  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    Animated.loop(
      Animated.timing(this.state.animation, {
        duration: 1000,
        toValue: 1,
        easing: Easing.linear,
      })
    ).start();
  };
  render() {
    const interpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["360deg", "0deg"],
    });
    const animatedStyles = {
      transform: [
        {
          rotate: interpolation,
        },
      ],
    };
    return (
      <View style={styles.container}>
        <Animated.Image
          source={require("../assets/tire.png")}
          resizeMode="contain"
          style={[styles.tire, animatedStyles]}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  tire: {
    width: 50,
    height: 150,
  },
});

export default Tire;
