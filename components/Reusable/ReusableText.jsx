import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ReusableText = ({ text, font, size, color }) => {
  return <Text style={styles.textStyle(font, size, color)}>{text}</Text>;
};

export default ReusableText;

const styles = StyleSheet.create({
  textStyle: (family, size, color) => ({
    fontFamily: family,
    fontSize: size,
    color: color,
  }),
});
