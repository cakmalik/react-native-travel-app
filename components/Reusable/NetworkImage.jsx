import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const NetworkImage = ({ src, width, height, radius }) => {
  return (
    <Image source={{ uri: src }} style={styles.image(width, height, radius)} />
  );
};

export default NetworkImage;

const styles = StyleSheet.create({
  image: (width, height, radius) => ({
    width: width,
    height: height,
    borderRadius: radius,
    resizeMode: "cover",
  }),
});
