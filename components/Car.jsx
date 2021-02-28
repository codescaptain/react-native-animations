import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import Tire from "./Tire";
import CarBody from "./CarBody";
const DEVICE_WIDTH = Dimensions.get("window").width;
class Car extends Component {
  state = {
    animation: new Animated.Value(DEVICE_WIDTH),
  };

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    Animated.loop(
      Animated.timing(this.state.animation, {
        duration: 5000,
        toValue: -300,
        easing: Easing.cubic,
      })
    ).start();
  };
  render() {
    const animatedSytles = {
      left: this.state.animation,
    };
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.car, animatedSytles]}>
          <CarBody />

          <View style={styles.tire1}>
            <Tire />
          </View>

          <View style={styles.tire2}>
            <Tire />
          </View>
        </Animated.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 10,
    top: -350,
  },
  car: {
    position: "relative",
    width: 200,
    height: 200,
  },
  tire1: {
    position: "absolute",
    left: 1,
    bottom: -70,
  },
  tire2: {
    position: "absolute",
    right: 20,
    bottom: -70,
  },
});

export default Car;
