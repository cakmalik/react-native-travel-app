import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./slides.style";
import { SIZES, COLORS } from "../../constants/theme";
import {
  ReusableText,
  ReusableBtn,
  HeightSpacer,
} from "../../components/index";
const Slides = ({ item }) => {
  return (
    <View>
      <Image source={item.image} style={styles.image} />
      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          family={"medium"}
          size={SIZES.xxLarge}
          color={COLORS.white}
        />

        <HeightSpacer height={30} />

        <ReusableBtn
          onPress={() => {}}
          btnText={"LETS GO"}
          width={(SIZES.width - 50) / 2.2}
          bgColor={COLORS.red}
          borderColor={COLORS.red}
          borderWidth={0}
          textColor={COLORS.white}
        />
      </View>
    </View>
  );
};

export default Slides;
