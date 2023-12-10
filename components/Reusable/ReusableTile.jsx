import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import reusable from "./reusable.style";
import {
  WidthSpacer,
  NetworkImage,
  ReusableText,
  HeightSpacer,
} from "../../components";
import { Rating } from "../../components/index";

const ReusableTile = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={reusable.rowWithSpace("flex-start")}>
        <NetworkImage src={item.imageUrl} width={70} height={70} radius={10} />

        <WidthSpacer width={10} />

        <View>
          <ReusableText
            text={item.title}
            family={"medium"}
            size={TEXT.medium}
            color={COLORS.black}
          />

          <HeightSpacer height={2} />

          <ReusableText
            text={item.location}
            family={"medium"}
            size={TEXT.small}
            color={COLORS.gray}
          />

          <HeightSpacer height={2} />

          <View style={reusable.rowWithSpace("flex-start")}>
            <Rating rating={item.rating} />

            <WidthSpacer width={3} />


            <ReusableText
              text={`(${item.review})`}
              family={"medium"}
              size={13}
              color={COLORS.gray}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ReusableTile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 10,
  },
});
