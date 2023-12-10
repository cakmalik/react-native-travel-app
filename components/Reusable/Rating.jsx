import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ReusableText, WidthSpacer } from "../../components";
import { COLORS } from "../../constants/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import reusable from "./reusable.style";

const Rating = ({ rating }) => {
  return (
    <View style={reusable.rowWithSpace("flex-start")}>
      <MaterialCommunityIcons name="star" size={15} color={"#FD9942"} />
      <WidthSpacer width={3} />
      <ReusableText
        text={rating}
        family={"medium"}
        size={13}
        color={"#FD9942"}
      />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({});
