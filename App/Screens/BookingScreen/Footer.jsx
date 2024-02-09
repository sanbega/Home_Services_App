import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function Footer() {
  return (
    <View style={style.container}>
      <Text>Footer</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
