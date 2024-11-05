import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import Animated, { SlideInLeft, SlideInRight, SlideInDown } from "react-native-reanimated";

export default function App() {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const [orientation, setOrientation] = useState("portrait");

  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get("window");
      if (width < height) {
        setOrientation("portrait");
      } else {
        setOrientation("landscape");
      }
    };
    Dimensions.addEventListener("change", updateOrientation);
    return () => {
      Dimensions.removeEventListener("change", updateOrientation);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Screen width: {screenWidth}</Text>
      <Text>Screen height: {screenHeight}</Text>
      <Animated.View entering={SlideInLeft}>
        <Text>screenWidth: {screenWidth}</Text>
      </Animated.View>
      <Animated.View entering={SlideInRight}>
        <Text>screenHeight: {screenHeight}</Text>
      </Animated.View>
      <Animated.View entering={SlideInDown}>
        <Text>Orientation: {orientation}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: "#b58df1",
    borderRadius: 20,
  },
});
